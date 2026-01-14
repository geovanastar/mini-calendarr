const { app, BrowserWindow } = require("electron");

function criaçaoapp() {
  const win = new BrowserWindow({
    title: "pequeno calendario",
    width: 340,
    height: 340,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false,
    transparent: true,
    background: "#00000000",
    webPreferences: {
      contextIsolation: true,
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(criaçaoapp);

app.on("janela-fechada", () => {
  if (process.plataform !== "darwin") app.quit();
});
