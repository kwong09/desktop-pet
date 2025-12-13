const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
    })

    win.loadFile('index.html')
    win.setMenuBarVisibility(false)

    //tracks if window is in focus and in-use
    win.on('focus', () => {
        console.log('focused window');
    });
    win.on('blur', () => {
        console.log('not focused window!');
    });
}

app.whenReady().then(() => {
    createWindow()
})
