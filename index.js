const { app, BrowserWindow } = require('electron');
app.on('ready', () => {
   const crawler = new BrowserWindow({
      show: false,
      webPreferences: {
         webSecurity: false, // allows cross-origin requests,
         nodeIntegration: true
      }
   });
   crawler.loadFile('root/index.html');
   crawler.webContents.openDevTools({ mode: 'detach' });
});
