const { app, BrowserWindow, session } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 300,
        height: 400, 
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    // Disable autofill
    session.defaultSession.webRequest.onBeforeRequest({ urls: ['*://*/*'] }, (details, callback) => {
        if (details.url.includes("Autofill")) {
            return callback({ cancel: true });
        }
        callback({});
    });

    win.loadFile('index.html');
    win.on('close', (event)=> {
        app.quit(); //quits calc instead of just hiding it
    });
}

app.whenReady().then(createWindow);

console.log("if you see this, your calculator is doing it's best to open!");