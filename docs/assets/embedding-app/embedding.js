(() => {
    if (window.top === window) {
        return;
    }

    const iframe = document.getElementById('iframe');

    const update = () => {
        iframe.src = location.hash.replace('#', '');
    }
    update();
    window.onpopstate = update;
})()