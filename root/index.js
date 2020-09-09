const { writeFileSync, mkdirSync, existsSync, readFileSync } = require('fs');
const { origin, debug } = require('./../options.json');

const __ = {
   chain: (base, modifier) => {
      const chain = (object) => modifier(object, chain);
      chain(base);
   },
   download: (link, callback) => {
      const request = fetch(`${origin}/${link}`);
      request.then((data) => data.text()).then((text) => {
         const markup = document.createRange().createContextualFragment(text);
         callback(markup);
      });
   },
   from: (context, selector) => {
      return [ ...context.querySelectorAll(selector) ];
   },
   generate: (root) => {
      const dep = __.from(root, 'div.description div.deprecationBlock');
      if (dep.length > 0) return [];

      const inf = __.from(root, 'div.description pre')[0].innerText.split('\n');
      if (inf.includes('@Deprecated')) return [];

      const title = __.from(root, 'h2.title')[0].innerText;
      if (title.startsWith('Annotation')) return [];
      const camel = `${title[0].toLowerCase()}${title.slice(1)}`;
      const ns = camel.split(' ')[1].replace(/\./g, '$');

      const header = __.syntax.header([ camel, ...inf.slice(1) ].join(' '));
      const desc = (__.from(root, 'div.description div')[0] || {}).innerText;

      const enumerated = camel.split(' ')[0] === 'enum';
      const props = __.syntax[enumerated ? 'enum' : 'class'](root, ns);

      return [ ns, `${__.syntax.desc(desc)}export ${header} {\n${props}\n}\n` ];
   },
   save: (dict) => {
      const pre = "import * as classes from './classes';\nexport class ";

      const types = [ `${pre}types {`, '    static type (name: string): any;' ];
      const events = [ `${pre}events {` ];
      const classes = [ readFileSync('./bootstrap.d.ts').toString() ];

      dict = dict.map((entry) => {
         if (entry.length !== 3) return;
         let [ path, ns, code ] = entry;
         classes.push(code);
         ns = ns.split('<')[0];
         if (code.includes('export interface')) {
            types.push(`    static type (name: '${path}'): classes.${ns};`);
         } else {
            types.push(`    static type (name: '${path}'): typeof classes.${ns};`);
         }
         if (ns.endsWith('Event')) {
            events.push(
               [
                  `    static event (`,
                  `        name: '${path}',`,
                  `        ...listeners: ((event: classes.${ns}) => {})[]`,
                  `    ): void;`
               ].join('\n')
            );
         }
      });

      types.push('}');
      events.push('}');

      existsSync('dict') || mkdirSync('dict');
      writeFileSync('dict/types.d.ts', types.join('\n'));
      writeFileSync('dict/events.d.ts', events.join('\n'));
      writeFileSync('dict/classes.d.ts', classes.join('\n'));

      if (!debug) window.close();
   },
   syntax: {
      any: (text) => {
         text = text.replace(/\?/g, 'X');
         return text;
      },
      desc: (text) => {
         if (!text) return '';
         text = text.replace(/(\xa0)/g, '');
         if (text.startsWith('\n')) text = text.slice(1);
         if (text.endsWith('\n')) text = text.slice(0, -1);
         text = text.replace(/(\n){1}/g, ' ');
         text = text.replace(/(\n){2,}/g, '\n\n');
         if (text === '') return '';
         text = `/**${text}*/\n`;
         return text;
      },
      header: (text) => {
         if (text.startsWith('enum')) text = `class ${text.slice(5)}`;
         text = text.replace(/\./g, '$');
         text = __.syntax.any(text);
         return text;
      },
      props: (items) => {
         items = items.filter((item) => item);
         let text = items.join(';\n');
         text = __.syntax.any(text);
         return text;
      },
      member: (items) => {
         let info = items[2] ? items[2].innerText : '';
         if (info.split('\n').includes('Deprecated.')) return '';
         let desc = __.syntax.desc(info);
         if (desc) desc = `    ${desc}`;
         let method = __.syntax.method(items[1].innerText);
         let type = __.syntax.type(items[0].innerText);
         if (type.startsWith('static')) {
            method = `static ${method}`;
            type = type.slice(7);
         }
         if (type.startsWith('<')) {
            method = method.replace('(', `${type.split('>')[0]}>(`);
            type = type.split('>').slice(1).join('>');
         }
         method = method.replace(/(\? extends )/g, '');
         type = type.replace(/(\? extends )/g, '');
         method = method.replace(/( super [^>]*)(>{1})/g, '>');
         type = type.replace(/( extends [^>]*)(>{1})/g, '>');
         while (type.startsWith('>')) {
            method = method.replace('(', `>(`);
            type = type.slice(1);
         }
         return `${desc}    ${method}: ${type}`;
      },
      method: (text) => {
         text = text.slice(0, -1);
         let [ name, args ] = text.split('(');
         if (name.endsWith('\u200b')) name = name.slice(0, -1);
         args = args.replace(/(,\n)/g, ', ');
         args = args.split(', ');
         args = args.map((arg) => {
            if (arg === '') return '';
            let [ type, param ] = arg.split('\xa0');
            if (param === 'with') param = '_with';
            if (param === 'function') param = '_function';
            if (type.endsWith('...')) {
               type = `${type.slice(0, -3)}[]`;
               param = `...${param}`;
            }
            type = type.replace(/( extends [^>]*)(>{1})/g, '>');
            return `${param}: ${__.syntax.type(type)}`;
         });
         text = `${name} (${args.join(', ')})`;
         return text;
      },
      type: (text) => {
         text = text.replace('default ', '');
         text = text.replace('abstract ', '');
         text = text.replace('protected ', '');
         text = text.replace(/\./g, '$');
         text = text.replace(/\xa0/g, '');
         text = text.replace(/^( ){1,}/g, '');
         text = text.replace(/(int|short|long|double|byte|float)/g, 'number');
         return text;
      },
      enum: (root, ns) => {
         const ref = __.from(root, 'a[name="enum.constant.summary"]')[0];
         let items = __.from(ref.parentElement, 'span.memberNameLink');
         items = items.map((item) => __.syntax.constant(item, ns));
         items = __.syntax.props(items);
         return items;
      },
      path: (text) => {
         text = text.slice(0, -5);
         text = text.replace(/(\/)/g, '.');
         return text;
      },
      constant: (item, ns) => {
         const container = item.parentNode.parentNode.parentNode;
         const block = container.querySelector('div.block');
         let desc = __.syntax.desc(block && block.innerText);
         if (desc) desc = `    ${desc}`;
         const member = `static ${item.innerText}: ${ns}`;
         return `${desc}    ${member}`;
      },
      class: (root) => {
         const ref = __.from(root, 'a[name="method.summary"]')[0];
         if (!ref) return [];
         let items = __.from(ref.parentElement, 'tr[id]');
         items = items.map((item) => [ ...item.children ]);
         items = items.map(__.syntax.member);
         items = __.syntax.props(items);
         return items;
      }
   }
};

__.download('allclasses-noframe.html', ($a) => {
   let dict = [];
   __.chain(__.from($a, 'a'), (state, next) => {
      const source = state[0].getAttribute('href');
      console.log(`generating: /${source}`);
      __.download(source, ($b) => {
         dict.push([ __.syntax.path(source), ...__.generate($b) ]);
         state.length > 1 ? next(state.slice(1)) : __.save(dict);
      });
   });
});

// todo: document enum methods
