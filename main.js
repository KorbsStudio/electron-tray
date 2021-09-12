const {app, BrowserWindow, Tray, Menu} = require('electron')

function createWindow () {
  // Show and control the main window of your application
  // Electron Docs: https://www.electronjs.org/docs/api/browser-window#class-browserwindow
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    autoHideMenuBar: true,
    webPreferences: {
      nativeWindowOpen: true // Default changes to true in Electron 15
    }
  })
  mainWindow.loadFile('index.html')

  tray = new Tray('./electron.png')
  tray.setToolTip('Chirp')
  tray.on('click', () => {
    mainWindow.show();
  });
  const contextMenu = Menu.buildFromTemplate([
    { 
      label: 'Hide',
      click: async() => {mainWindow.hide()}
    }
  ])
  tray.setContextMenu(contextMenu)
}
app.whenReady().then(() => {createWindow()})