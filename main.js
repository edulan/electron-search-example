var path = require('path');
var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  var mainWindow = new BrowserWindow();
  var url = 'file://' + path.resolve(__dirname, 'index.html');

  mainWindow.loadURL(url);
});
