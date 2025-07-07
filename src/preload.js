// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
//preload.js หน้าที่คือเชื่อมต่อระหว่าง main process กับ renderer process โดยมัน run ใน context ที่ปลอดภัย (secure, isolated environment)
const { contextBridge, ipcRenderer } = require('electron');

// Expose ipcRenderer to the renderer process in a safe way
//สิ่งนี้ทำให้ใน renderer (เช่น render.js, timer.js) สามารถใช้แบบนี้ได้ window.electron.send('navigate', 'menu/menu.html');
contextBridge.exposeInMainWorld('electron', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args)),
});