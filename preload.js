const { contextBridge, ipcRenderer } = require("electron");


contextBridge.exposeInMainWorld("fluentify_nev", {
    updateStyle: (callback) => ipcRenderer.on(
        "betterQQNT.fluentify_nev.updateStyle",
        callback
    ),
    rendererReady: () => ipcRenderer.send(
        "betterQQNT.fluentify_nev.rendererReady"
    )
});