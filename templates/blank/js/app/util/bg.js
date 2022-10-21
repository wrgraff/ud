var bgElements = function() {
    var elements = document.querySelectorAll('[data-bg]');
    for (var i = 0; i < elements.length; i++) {
        var src = elements[i].dataset.bg;
        elements[i].style.backgroundImage = 'url("' + src + '")';
    }
    return elements;
};

bgElements();
