const __ = {
   chain: (base, modifier) => {
      const chain = (object) => modifier(object, chain);
      chain(base);
   },
   download: (link, callback) => {
      fetch(`https://papermc.io/javadocs/paper/1.16/${link}`).then((data) => data.text()).then((text) => {
         const markup = document.createRange().createContextualFragment(text);
         callback(markup);
      });
   },
   from: (context, selector) => {
      return [ ...context.querySelectorAll(selector) ];
   },
   generate: (root) => {
      const dep = __.from(root, 'div.description div.deprecationBlock');
      if (dep.length > 0) return;

      const info = __.from(root, 'div.description pre')[0].innerText.split('\n');
      if (info.includes('@Deprecated')) return;

      const title = __.from(root, 'h2.title')[0].innerText;
      if (title.startsWith('Annotation')) return;
      const camel = `${title[0].toLowerCase()}${title.slice(1)}`;
      const ns = camel.split(' ')[1].replace(/\./g, '$');

      const header = __.syntax.header([ camel, ...info.slice(1) ].join(' '));
      const desc = (__.from(root, 'div.description div')[0] || {}).innerText;

      const enumerated = camel.split(' ')[0] === 'enum';
      const props = __.syntax[enumerated ? 'enum' : 'class'](root, ns);

      return `${__.syntax.desc(desc)}${header} {${props}}\n`;
   },
   init: () => {
      __.download('allclasses-noframe.html', ($a) => {
         let dict = '';
         __.chain(__.from($a, 'a'), (state, next) => {
            const source = state[0].getAttribute('href');
            console.log(`generating: /${source}`);
            __.download(source, ($b) => {
               dict += __.generate($b) || '';
               state.length > 1 ? next(state.slice(1)) : console.log(dict);
            });
         });
      });
   },
   syntax: {
      any: (text) => {
         text = text.replace(/\?/g, 'X');
         // text = text.replace(/( ){2,}/g, ' ');
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
         type = type.replace(/( extends [^>]*)(>{1})/g, '>');
         method = method.replace(/( super [^>]*)(>{1})/g, '>');
         return `${desc}${method}: ${type}`;
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
            return `${param}:${__.syntax.type(type)}`;
         });
         text = `${name}(${args.join(',')})`;
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
         items = items.map((item) => `static ${item.innerText}: ${ns}`);
         items = __.syntax.props(items);
         return items;
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
