const { app, BrowserWindow } = require('electron');
app.on('ready', () => {
   const crawler = new BrowserWindow({
      show: true,
      webPreferences: {
         webSecurity: false, // allows cross-origin requests,
         nodeIntegration: true
      }
   });
   crawler.loadFile('root/index.html');
});
