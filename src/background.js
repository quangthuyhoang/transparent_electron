// This is main process of Electron, started as first thing when your
// app starts. It runs through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import path from "path";
import url from "url";
import { app, Menu } from "electron";
import { devMenuTemplate } from "./menu/dev_menu_template";
import { editMenuTemplate } from "./menu/edit_menu_template";
import createWindow from "./helpers/window";

// Special module holding environment variables which you declared
// in config/env_xxx.json file.
import env from "env";

const setApplicationMenu = () => {
  const menus = [editMenuTemplate];
  if (env.name !== "production") {
    
    menus.push(devMenuTemplate);
  }
  Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
};

// Save userData in separate folders for each environment.
// Thanks to this you can use production and development versions of the app
// on same machine like those are two separate apps.
if (env.name !== "production") {
  const userDataPath = app.getPath("userData");
  app.setPath("userData", `${userDataPath} (${env.name})`);
}

app.on("ready", () => {
  setApplicationMenu();

  const mainWindow = createWindow("main", {
    width: 400,
    height: 400,
    transparent: true,
    resizable: true,
    movable: true,
    focusable: false,
    alwaysOnTop: true,
    show: false
  });

  // const childWindow = createWindow("child", {
  //   width: 800,
  //   height: 400,
  //   parent: mainWindow,
    // modal: true,
    // frame: true
  // })

  // mainWindow.setIgnoreMouseEvents(true)
  mainWindow.setAlwaysOnTop(true, "floating");
  mainWindow.setVisibleOnAllWorkspaces(true);
  mainWindow.setFullScreenable(false);

  // childWindow.setAlwaysOnTop(true)

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "app.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // childWindow.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, "child-app.html"),
  //     protocol: "file:",
  //     slashes: true
  //   })
  // )
  if (mainWindow.isMaximized != false) {
    mainWindow.maximize();
  } 
  if (!mainWindow.isVisible()) {
    app.dock.hide();
    mainWindow.showInactive();

    // And also hide it after a while
    setTimeout(() => {
    //   // mainWindow.hide();
      app.dock.show();
    }, 1000);
  }
  if (env.name === "development") {
    // mainWindow.openDevTools();
  }
});

app.on("window-all-closed", () => {
  app.quit();
});

// app.dock.hide();
