
document.addEventListener('DOMContentLoaded', function() {

    chrome.runtime.getBackgroundPage( function () {
        window.open('http://www.swagbucks.com/?cmd=home');
    });

}, false);