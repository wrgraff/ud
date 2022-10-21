var insertElementBefore = function(element, caption, label) {
    var wrapper = document.createElement('div');
    wrapper.className = 'gallery-item-description';

    var captionContent = document.createElement('div');
    captionContent.className = 'gallery-item-title';
    captionContent.innerHTML = caption;
    wrapper.appendChild(captionContent);

    if (label) {
        var labelContent = document.createElement('div');
        labelContent.className = 'gallery-item-label';
        labelContent.innerHTML = label;
        wrapper.appendChild(labelContent);
    };

    element.appendChild(wrapper);
};

var galleryElements = function() {
    var elements = document.querySelectorAll('.gallery-item a');

    for (var i = 0; i < elements.length; i++) {
        var caption = elements[i].dataset.caption;
        var label = elements[i].dataset.label;
        insertElementBefore(elements[i], caption, label);
    };
};

galleryElements();
