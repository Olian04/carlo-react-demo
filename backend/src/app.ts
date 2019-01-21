import * as carlo from 'carlo';
import * as path from 'path';

const publicPath = path.join(__dirname, '..', '..', 'frontend', 'build');

(async () => {
  // Launch the browser.
  const app = await carlo.launch();

  // Terminate Node.js process on app window closing.
  app.on('exit', () => process.exit());

  // Tell carlo where your web files are located.
  app.serveFolder(publicPath);

  // Expose 'env' function in the web environment.
  await app.exposeFunction('env', () => process.env);

  // Navigate to the main page of your app.
  await app.load('index.html');
})();