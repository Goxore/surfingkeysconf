// Awesome vim-like keybindings for my browser and most visited websites.

if(window.location.hostname.includes("youtu")){

    api.mapkey('h', 'h', function() {
    var video = document.querySelector('video');
        video.currentTime -= 5;
    }, {domain: /youtube.com/});
    
    api.mapkey('l', 'l', function() {
    var video = document.querySelector('video');
        video.currentTime += 5;
    }, {domain: /youtube.com/});
    
    api.mapkey('<Ctrl-j>', 'j', function() {
    var video = document.querySelector('video');
        video.volume -= 0.02;
    }, {domain: /youtube.com/});
    
    api.mapkey('<Ctrl-k>', 'k', function() {
    var video = document.querySelector('video');
        video.volume += 0.02;
    }, {domain: /youtube.com/});
    
    
    api.mapkey("p", "pause/resume on youtube", function() {
        var btn = document.querySelector("button.ytp-ad-overlay-close-button") || document.querySelector("button.ytp-ad-skip-button") || document.querySelector('ytd-watch-flexy button.ytp-play-button');
        btn.click();
    }, {domain: /youtube.com/i});
}


api.mapkey('F', 'Fullscreen', function() {
    if (window.fullScreen) {
        document.exitFullscreen();
    }
    else {
        document.documentElement.requestFullscreen();
    }
});

api.unmap('H');
api.map('H', 'S');

api.unmap('L');
api.map('L', 'D');

api.unmap('J');
api.map('J','E');
api.unmap('K');
api.map('K','R');

api.map('<Ctrl-d>', 'd');
api.map('<Ctrl-u>', 'u');

api.map('`','\'')


// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
// click `Save` button to make above settings to take effect.</ctrl-i></ctrl-y>
