import { app, BrowserWindow } from "electron";
import { exec } from 'child_process';

const execute = (command, callback) => {
    exec(command, (error, stdout, stderr) => { callback(stdout); });
};

const osCommandsOn = {
  darwin: {
    restart: () => {
      console.log("macOS")
        app.exit();
        execute("npm start", function(stdout) {
          console.log(stdout);
        })
    }
  },
  win32: {
    restart: () => {
      console.log("win32")
        app.relaunch();
        app.exit();
    }
  }
}

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
      label: "Restart",
      accelerator: "Alt+CmdOrCtrl+T",
      click: () => {
        console.log("platform", process.platform);
        osCommandsOn[process.platform].restart();
        // app.exit();
        // execute("npm start", function(stdout) {
        //   console.log(stdout);
        // })
      }
    },
    {
      label: "Test",
      accelerator: "CmdOrCtrl+T",
      click: () => {
        app.relaunch();
        app.exit();
        execute("echo $JAVA_HOME", function(stdout) {
          console.log(stdout);
        })
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
