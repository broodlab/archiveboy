import {BrowserWindow, app, dialog, ipcMain, screen} from "electron";

let browserWindow;

function createWindow() {
    const electronScreen = screen;
    const screenSize = electronScreen.getPrimaryDisplay().workAreaSize;

    browserWindow = new BrowserWindow({
        x: 0,
        y: 0,
        width: screenSize.width,
        height: screenSize.height,
        webPreferences: {
            nodeIntegration: true
        }
    });

    browserWindow.loadURL("http://localhost:4200");
    browserWindow.webContents.openDevTools();

    browserWindow.on("closed", () => {
        browserWindow = null;
    });
}

try {
    app.disableHardwareAcceleration();

    app.on("ready", createWindow);

    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
            app.quit();
        }
    });

    app.on("activate", () => {
        if (browserWindow === null) {
            createWindow();
        }
    });
} catch (e) {
    throw e;
}

ipcMain.on("open-file-dialog", event => {
    dialog.showOpenDialog(
        {
            properties: ["openFile", "openDirectory"]
        },
        files => {
            if (files) {
                event.sender.send("selected-directory", files);
            }
        }
    );
});
