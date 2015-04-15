document.addEventListener('DOMContentLoaded', function() {

    chrome.history.deleteAll(function (){});
    return;
    // window.location.replace='chrome://settings/clearBrowserData';

}, false);