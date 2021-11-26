setInterval(() => {
    let d = new Date();
    postMessage(d.toLocaleTimeString());
}, 1000);