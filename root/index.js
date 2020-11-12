const { mode, bootstrap, standard } = require('./../options.json');
const { writeFileSync, mkdirSync, existsSync, readFileSync } = require('fs');

const context = {
   page: '',
   root: '',
   get base () {
      return context.page.slice(0, context.page.lastIndexOf('/') + 1);
   },
   get path () {
      return context.page.replace(context.root, '');
   },
   relative: (link) => {
      let page = context.base;
      for (const node of link.getAttribute('href').split('/')) {
         if (node === '..') page = page.split('/').slice(0, -1).join('/');
         else page += `/${node}`;
      }
      page = page.replace(/(\/\.\/)/g, '/');
      page = page.replace(/(?<!:)(\/\/)/g, '/');
      return page;
   },
   absolute: (link) => {
      context.page = context.root;
      context.page = context.relative(link);
   },
   download: (callback) => {
      fetch(context.page)
         .then((data) => data.text())
         .then((text) => callback(document.createRange().createContextualFragment(text)));
   }
};

const tools = {
   chain: (base, modifier) => {
      const chain = (object) => modifier(object, chain);
      chain(base);
   },
   filter: (value) => {
      return typeof value === 'number' ? value === value : ![ null, undefined ].includes(value);
   },
   from: (context, selector) => {
      return [ ...context.querySelectorAll(selector) ];
   },
   init: () => {
      const dict = (globalThis.dict = []);
      tools.chain({ bootstrap, standard }[mode], (list, nextSource) => {
         if (list.length > 0) {
            context.page = list[0];
            context.root = context.base;
            context.download((index) => {
               tools.chain(tools.from(index, 'a'), (state, nextIndex) => {
                  if (state.length > 0) {
                     context.absolute(state[0]);
                     context.download((root) => {
                        dict.push(engine.main(root));
                        nextIndex(state.slice(1));
                     });
                  } else {
                     nextSource(list.slice(1));
                  }
               });
            });
         } else {
            tools.save(dict);
         }
      });
   },
   save: (dict) => {
      const types = [];
      const events = [];
      const classes = [];
      if (mode === 'bootstrap') {
         types.push("import * as classes from './classes'", 'export class types {');
         events.push("import * as classes from './classes'", 'export class events {');
      } else {
         types.push(readFileSync('./bootstrap/types.d.ts').toString());
         events.push(readFileSync('./bootstrap/events.d.ts').toString());
         classes.push(readFileSync('./bootstrap/classes.d.ts').toString());
      }
      for (let { short, long, code } of dict.filter(tools.filter)) {
         code = code.replace(/(\?)/g, 'any');
         code = code.replace(/(\xa0|\u200b)/g, '');
         classes.push(code);
         if (code.includes(`export interface ${short}`)) {
            types.push(`    static type (name: '${long}', ...args: any[]): classes.${short};`);
         } else {
            types.push(`    static type (name: '${long}', ...args: any[]): typeof classes.${short};`);
         }
         if (short.endsWith('Event')) {
            events.push(
               [
                  `    static event (`,
                  `        name: '${long}',`,
                  `        ...listeners: ((event: classes.${short}) => any)[]`,
                  `    ): void;`
               ].join('\n')
            );
         }
      }
      let target = 'dict';
      if (mode === 'bootstrap') target = 'bootstrap';
      else types.push('}'), events.push('}');
      existsSync(target) || mkdirSync(target);
      writeFileSync(`${target}/types.d.ts`, `${types.join('\n').trim()}\n`);
      writeFileSync(`${target}/events.d.ts`, `${events.join('\n').trim()}\n`);
      writeFileSync(`${target}/classes.d.ts`, `${classes.join('\n').trim()}\n`);
   }
};

const engine = {
   addons: (nodes) => {
      let arrow = 0;
      let output = '';
      for (const node of nodes) {
         if (node.textContent === '<') {
            if (output.endsWith(',')) output = output.slice(0, -1);
            output += node.textContent;
            ++arrow;
         } else if (node.textContent[0] === '>') {
            if (output.endsWith(',')) output = output.slice(0, -1);
            output += node.textContent.trimEnd();
            --arrow;
         } else if (node.textContent[0] === '<') {
            if (output.endsWith(',')) output = output.slice(0, -1);
            output += node.textContent.trimEnd();
         }
         if (arrow === 0) {
            if (node.tagName === 'A') {
               if (!output.endsWith(' ')) output += ' ';
               output += `${engine.short(node)},`;
            } else if (node.textContent.startsWith('\nextends ') || node.textContent.startsWith('\nimplements ')) {
               if (output.endsWith(',')) output = output.slice(0, -1);
               output += ` ${node.textContent.slice(1)}`;
            }
         } else if (node.tagName === 'A') {
            output += `${engine.short(node)},`;
         }
         output = output.replace(/\n/g, ' ');
      }
      if (output.endsWith(',')) output = output.slice(0, -1);
      while (!output.startsWith(' extends') && !output.startsWith(' implements') && output.length > 0) {
         output = output.slice(1);
      }
      return output.trimEnd();
   },
   argument: (string) => {
      if (string === '') return '';
      let [ type, name ] = string.split('\xa0');
      [ 'in', 'with', 'function' ].includes(name) && (name = `_${name}`);
      if (type.endsWith('...')) {
         type = `${type.slice(0, -3)}[]`;
         name = `...${name}`;
      }
      type = engine.type(type);
      return `${name.trim()}: ${type.trim()}`;
   },
   comment: (source) => {
      typeof source === 'object' && (source = (source && source.innerText) || '');
      if (!source) return '';
      source = source.replace(/(\xa0)/g, '');
      source = source.replace(/(\/)/g, '\\/');
      if (source.startsWith('\n')) source = source.slice(1);
      if (source.endsWith('\n')) source = source.slice(0, -1);
      source = source.replace(/(\n){1}/g, ' ');
      source = source.replace(/(\n){2,}/g, '\n\n');
      source = source.trim();
      return source && `/**${source}*/\n    `;
   },
   constants: (root, short) => {
      return engine.reference(root, 'enum.constant.summary', 'span.memberNameLink', (item) => {
         const container = item.parentNode.parentNode.parentNode;
         const comment = engine.comment(container.querySelector('div.block'));
         return `${comment}static ${item.innerText}: ${short}`;
      });
   },
   constructors: (root) => {
      return engine.reference(root, 'constructor.summary', 'tr[class]', (item) => engine.function(item));
   },
   function: (item, typed) => {
      const comment = engine.comment(item.querySelector('div.block'));
      const body = item.querySelector('span.memberNameLink').parentNode;
      let output = '';
      for (const node of body.childNodes) {
         if (node.tagName === 'A') {
            output += engine.short(node);
         } else {
            output += node.textContent;
         }
      }
      let args = output.split('(')[1];
      args = args.slice(0, -1).split(',\n').map(engine.argument).join(', ');
      if (typed) {
         let type = '';
         for (const node of item.children[0].children[0].childNodes) {
            if (node.tagName === 'A') {
               type += engine.short(node);
            } else {
               type += node.textContent;
            }
         }
         type = engine.type(type);
         let name = body.innerText.split('(')[0];
         if (type.startsWith('static')) {
            name = `static ${name}`;
            type = type.slice(7);
         }
         if (type.startsWith('<')) {
            let index = 1;
            let level = 1;
            while (level > 0) {
               const char = type[index++];
               char === '<' && ++level;
               char === '>' && --level;
            }
            name += type.slice(0, index);
            type = type.slice(index);
         }
         return `${comment}${name} (${args}): ${engine.short(type)}`;
      } else {
         return `constructor (${args})`;
      }
   },
   main: (root) => {
      if (tools.from(root, 'div.description div.deprecationBlock').length > 0) return null;
      if (tools.from(root, 'div.description pre')[0].innerText.split('\n').includes('@Deprecated')) return null;
      const category = tools.from(root, 'h2.title')[0].innerText.split(' ')[0].toLowerCase();
      if (category === 'annotation') return null;
      let long = context.path.slice(0, -5).replace(/(\/)/g, '.');
      if (mode === 'bootstrap') long = long.split('.').slice(2).join('.');
      const short = engine.short(long);
      let label = tools.from(root, 'span.typeNameLabel')[0].innerText.split('<').slice(1).join('<');
      label = label ? `<${label}` : '';
      let addons = engine.addons(tools.from(root, 'div.description pre')[0].childNodes);
      addons = addons.split(' ').filter((segment) => !segment.includes('@')).join(' ');
      const comment = engine.comment(tools.from(root, 'div.description div')[0]);
      const header = `export ${category === 'enum' ? 'class' : category} ${short}${label}${addons}`;
      let properties = [];
      if (mode === 'bootstrap') {
         switch (short) {
            case 'jlIterable':
               properties.push('[Symbol.iterator](): Iterator<T>');
               break;
            case 'jufConsumer':
               properties.push('(t: T): any');
               break;
         }
      }
      category === 'enum' && properties.push(...engine.constants(root, short));
      category === 'class' && properties.push(...engine.constructors(root));
      properties.push(...engine.methods(root));
      properties = properties.filter((line) => !line.startsWith('/**Deprecated'));
      properties = properties.length ? `\n${properties.map((line) => `    ${line};`).join('\n')}\n` : '';
      return { short: short, long: long, code: `${comment.slice(0, -4)}${header} {${properties}}` };
   },
   methods: (root) => {
      return engine.reference(root, 'method.summary', 'tr[class]', (item) => engine.function(item, true));
   },
   reference: (root, name, selector, handler) => {
      const ref = tools.from(root, `a[id="${name}"],a[name="${name}"]`)[0];
      if (!ref) return [];
      return tools.from(ref.parentElement, selector).map(handler);
   },
   short: (path) => {
      if (typeof path === 'string') {
         const nodes = path.trim().split('.');
         return [ ...nodes.slice(0, -1).map((node) => node[0]), nodes.slice(-1)[0] ].join('');
      } else {
         if (path.title.includes('parameter')) {
            return path.innerText;
         } else {
            return engine.short(`${path.title.split('in ')[1]}.${path.innerText}`);
         }
      }
   },
   type: (text) => {
      text = text.replace('default ', '');
      text = text.replace('abstract ', '');
      text = text.replace('protected ', '');
      text = text.replace('@NonNull ', '');
      text = text.replace(/(jlBoolean)/g, 'boolean');
      text = text.replace(/(char|jlString)/g, 'string');
      text = text.replace(/(int|short|long|double|byte|float|jlDouble)/g, 'number');
      text = text.replace(/(\? (super|extends) )/g, '');
      return text;
   }
};

tools.init();

// todo: document fields
