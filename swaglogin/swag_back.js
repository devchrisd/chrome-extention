var login = false;

    if (login == false)
    {
        login = true;
        var loginform = document.getElementById('loginForm');
        if (loginform)
        {
            loginform.submit();
        }
        else
        {
            alert('cannot get login form');
        }
    }
    else
        alert('swag!');

    chrome.runtime.onSuspend.addListener( function (){
        alert('suspended');
    });