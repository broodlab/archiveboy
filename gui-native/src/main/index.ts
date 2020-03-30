import {BrowserWindow, app, dialog, ipcMain, screen} from "electron";
import installExtension, {REDUX_DEVTOOLS} from "electron-devtools-installer";
import {api} from "@archiveboy/api-local";

let browserWindow;

global["api"] = api;

async function createWindow() {
    const electronScreen = screen;
    const screenSize = electronScreen.getPrimaryDisplay().workAreaSize;

    await api.init();

    browserWindow = new BrowserWindow({
        x: 0,
        y: 0,
        width: screenSize.width,
        height: screenSize.height,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    browserWindow.loadURL("http://localhost:4200");
    browserWindow.webContents.openDevTools();

    browserWindow.on("closed", () => {
        browserWindow = null;
    });

    installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log("An error occurred: ", err));
}

try {
    app.disableHardwareAcceleration();

    app.on("ready", createWindow);

    app.on("window-all-closed", async () => {
        await api.destroy();
        if (process.platform !== "darwin") {
            app.quit();
        }
    });

    app.on("activate", async () => {
        if (browserWindow === null) {
            await createWindow();
        }
    });
} catch (e) {
    throw e;
}

ipcMain.on("open-file-dialog", (event) => {
    dialog
        .showOpenDialog(browserWindow, {
            properties: ["openFile", "openDirectory"],
        })
        .then((files) => {
            if (files) {
                event.sender.send("selected-directory", files);
            }
        });
});
