Start using `rpc` to handle backend and frontend comunication.

https://github.com/GoogleChromeLabs/carlo/blob/master/API.md#windowloaduri-params

Ex: 

```js
// Backend
const carlo = require('carlo');
const { rpc } = require('carlo/rpc');

carlo.launch().then(async app => {
  app.serveFolder(__dirname);
  app.on('exit', () => process.exit());
  await app.load('index.html', rpc.handle(new Backend));
});

class Backend {
  hello(name) {
    console.log(`Hello ${name}`);
    return 'Backend is happy';
  }

  setFrontend(frontend) {
    // Node world can now use frontend RPC handle.
    this.frontend_ = frontend;
  }
}
```

```html
//Frontend
<script>
class Frontend {}

async function load(backend) {
  // Web world can now use backend RPC handle.
  console.log(await backend.hello('from frontend'));
  await backend.setFrontend(rpc.handle(new Frontend));
}
</script>
<body>Open console</body>
```