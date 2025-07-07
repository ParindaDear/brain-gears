//ใส่เพิ่มเพื่อให้มันอัปเดตแบบ real-time
require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/../node_modules/electron`)
});

//(Already included with this code)
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.(Already included with this code)
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 550,
    frame: false,
    resizable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // load the index.html of the app. (Already included with this code)
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Reduce zoom level and lock it to prevent automatic scaling
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.setZoomFactor(0.85);
  });

  // Listen for the 'navigate' command to switch pages (used in render.js and timer.js)
  ipcMain.on('navigate', (event, filePath) => {
    const fullPath = path.join(__dirname, filePath);
    console.log("Navigating to:", fullPath);
    mainWindow.loadFile(fullPath).catch(err => console.error("Failed to load file:", err));
  });

  // Open the DevTools. (Already included with this code)
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs. (Already included with this code)
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open. (Already included with this code)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q. (Already included with this code)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// ฟังคำสั่ง navigate-to จาก renderer (ใช้กับ query param ได้)
ipcMain.on('navigate-to', (event, page) => {
  const mainWindow = BrowserWindow.getFocusedWindow();
  if (mainWindow) {
    mainWindow.loadFile(path.join(__dirname, page));
  }
});

// ฟังคำสั่ง window-control (ปิด/ย่อแอป)
ipcMain.on('window-control', (event, command) => {
  const window = BrowserWindow.getFocusedWindow();
  if (window) {
    if (command === 'minimize') {
      window.minimize();
    } else if (command === 'close') {
      window.close();
    } else if (command === 'quit') {
      app.quit();
    }
  }
});