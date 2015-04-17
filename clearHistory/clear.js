document.addEventListener('DOMContentLoaded', function() {

    chrome.tabs.query({'active': true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: 'chrome://settings/clearBrowserData'});
    });

    return;
    // chrome.history.deleteAll(function (){});
}, false);