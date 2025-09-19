(() => {
    if (window.top === window) {
        return;
    }

    if (document.referrer !== 'https://www.youtube.com/') {
        return;
    }

    const iframe = document.getElementById('iframe');

    const update = () => {
        iframe.src = location.hash.replace('#', '');
    }
    update();
    window.onpopstate = update;
})()