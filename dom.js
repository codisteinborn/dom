var $ = function (sel) {
    var elem = document.querySelectorAll(sel);

    // will only be accessable through the text function because not being directly returned
    // var helperFunction = function () {
    //     console.log("More text");
    // }

    var text = function (str) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerText = str;
        }
        // helperFunction();
    }
    var addClass = function (className) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.add(className);
        }
    }
    var removeClass = function (className) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.remove(className);
        }
    }
    var on = function (action, cb) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].addEventListener(action, cb);
        }
    }
    var toggleClass = function (className) {
        for (var i = 0; i < elem.length; i++) {
            if (elem[i].className.includes(className)) {
                elem[i].classList.remove(className);
            }
            else {
                elem[i].classList.add(className);
            }
        }
    }
    var html = function (newHTML) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerHTML = newHTML;
        }
    }

    var publicAPI = {
        element: elem,
        text: text,
        addClass: addClass,
        removeClass: removeClass,
        on: on,
        toggleClass: toggleClass,
        html: html
    }
    return publicAPI;
}
