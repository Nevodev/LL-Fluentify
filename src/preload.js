const { contextBridge, ipcRenderer } = require("electron");


contextBridge.exposeInMainWorld("fluentify_nev", {
    updateStyle: (callback) => ipcRenderer.on(
        "LiteLoader.fluentify_nev.updateStyle",
        callback
    ),
    rendererReady: () => ipcRenderer.send(
        "LiteLoader.fluentify_nev.rendererReady"
    )
});