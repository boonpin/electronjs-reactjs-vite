import { app, BrowserWindow } from "electron";
import * as path from "path";

const isDev = `${process.env.APP_MODE}` === "dev";
const isWatch = `${process.env.APP_MODE}` === "watch";

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
        width: 800,
    });

    if (isDev || isWatch) {
        const url = `http://localhost:${process.env.PORT || 12800}`;
        console.log("load url", url);
        mainWindow.loadURL(url);
        if (isDev) {
            mainWindow.webContents.openDevTools();
        }
    } else {
        mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
    createWindow();

    app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.