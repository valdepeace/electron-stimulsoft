"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var fs = require("fs");
var win;
electron_1.app.on("ready", createWindow);
electron_1.app.on("activate", function () {
    if (win === null) {
        createWindow();
    }
});
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 800, height: 600 });
    /*
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, `/../../dist/index.html`),
        protocol: "file:",
        slashes: true
      })
    );
    */
    win.loadURL("file://" + __dirname + "/../../dist/index.html");
    //win.webContents.openDevTools();
    win.on("closed", function () {
        win = null;
    });
}
electron_1.ipcMain.on("getFiles", function (event, arg) {
    var files = fs.readdirSync(__dirname);
    win.webContents.send("getFilesResponse", files);
});
//# sourceMappingURL=main.js.map