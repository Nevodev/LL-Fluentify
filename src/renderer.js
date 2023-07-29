export function onLoad() {
    const element = document.createElement("style");
    document.head.appendChild(element);

    fluentify_nev.updateStyle((event, message) => {
        element.textContent = message;
    });

    fluentify_nev.rendererReady();
}