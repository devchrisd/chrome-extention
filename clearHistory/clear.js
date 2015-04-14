document.addEventListener('DOMContentLoaded', function() {

    var clearButton = document.getElementById('clear');

    clearButton.addEventListener('click', function() {

        // window.open("http://google.com/");
        // window.location.replace='chrome://settings/clearBrowserData';
        chrome.tabs.getSelected(null, function(tab) {
            d = document;

            var f = d.createElement('form');
            f.action = 'chrome://settings/clearBrowserData';
            f.method = 'post';
            d.body.appendChild(f);
            f.submit();
        });
    }, false);
}, false);