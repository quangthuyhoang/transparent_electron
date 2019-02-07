import { app, BrowserWindow } from "electron";

export const devMenuTemplate = {
  label: "Development",
  submenu: [
    {
      label: "Reload",
      accelerator: "CmdOrCtrl+R",
      click: () => {
        BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
      }
    },
    {
      label: "Maximize Window",
      accelerator: "Alt+CmdOrCtrl+O",
      click: () => {
        console.log("maximize window in node");
      }
    },
    {
      label: "Transparent",
      accelerator: "Alt+mdOrCtrl+T",
      click: () => {
        console.log("hey")
      }
    },
    {
      label: "Toggle DevTools",
      accelerator: "Alt+CmdOrCtrl+I",
      click: () => {
        BrowserWindow.getFocusedWindow().toggleDevTools();
      }
    },
    {
      label: "Quit",
      accelerator: "CmdOrCtrl+Q",
      click: () => {
        app.quit();
      }
    }
  ]
};
