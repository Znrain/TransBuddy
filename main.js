const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    hasShadow: false,
    resizable: true,
    skipTaskbar: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.setAlwaysOnTop(true, 'screen-saver');
  mainWindow.setVisibleOnAllWorkspaces(true);

  // Toggle visibility with Ctrl+Shift+T
  globalShortcut.register('CommandOrControl+Shift+T', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  });

  // Toggle click-through with Ctrl+Shift+P
  globalShortcut.register('CommandOrControl+Shift+P', () => {
    const isClickThrough = mainWindow.isAlwaysOnTop();
    mainWindow.setIgnoreMouseEvents(!mainWindow._ignoreMouseEvents);
    mainWindow._ignoreMouseEvents = !mainWindow._ignoreMouseEvents;
  });

  // Adjust opacity
  globalShortcut.register('CommandOrControl+Shift+Up', () => {
    let opacity = mainWindow.getOpacity();
    mainWindow.setOpacity(Math.min(1, opacity + 0.1));
  });

  globalShortcut.register('CommandOrControl+Shift+Down', () => {
    let opacity = mainWindow.getOpacity();
    mainWindow.setOpacity(Math.max(0.1, opacity - 0.1));
  });

  mainWindow._ignoreMouseEvents = false;
}

app.whenReady().then(createWindow);

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  app.quit();
});
