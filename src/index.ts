import { app, BrowserWindow, shell } from 'electron';

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL("https://www.papaly.com");
    win.webContents.on('new-window', (e: Electron.Event, url: string) => {
        e.preventDefault();
        shell.openExternal(url);
    });
}

app.on('ready', createWindow);