const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

require("./backend/server");

function createWindow() {

    const win = new BrowserWindow({
        width: 800,
        height: 600,

        minWidth: 400,
        minHeight: 400,
        
        icon: path.join(__dirname, "assets", "icon.ico")
    });

    Menu.setApplicationMenu(null); // removes File/Edit/View menu

    win.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);