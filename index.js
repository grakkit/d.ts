const { app, BrowserWindow } = require('electron');
const { config } = require('./options.json');

app.on('ready', () => {
   const win = new BrowserWindow(config);
   win.loadFile('root/index.html');
   win.webContents.openDevTools({ mode: 'detach' });
});

app.on('window-all-closed', () => {
   process.exit();
});
