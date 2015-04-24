
document.addEventListener('DOMContentLoaded', function() {
    console.log('bbb');

    chrome.tabs.query({'active': true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: 'chrome://settings/clearBrowserData'});
    });
    window.close();
    return;

    // Add "history" in manifest.json->permissions to enable history API
    // chrome.history.deleteAll(function (){});
}, false);

// chrome.browserAction.onClicked.addListener(function (tab) {
//     console.log('aaa');
//     console.log(tab.url);
// });
