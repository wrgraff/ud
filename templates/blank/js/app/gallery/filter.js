var switcher = document.getElementById('gallery-switcher');
var switcherButtons = switcher.getElementsByTagName('button');
var switcherButtonsLabels = [];
for (var i = 0; i < switcherButtons.length; i++) {
    switcherButtonsLabels.push(switcherButtons[i].dataset.label);
};
var switcherButtonsIsActive = [];
for (var i = 0; i < switcherButtons.length; i++) {
    switcherButtonsIsActive.push(false);
}

var filterGalleryItems = function(label, galleryItems) {
    // Check each item
    for (var i = 0; i < galleryItems.length; i++) {
        // Get parent item
        var itemParent = galleryItems[i].parentNode;
        // Get item label
        var galleryItemLabel = galleryItems[i].dataset.label;
        // Hide element if selected label not similar to item label
        if (galleryItemLabel != label) {
            itemParent.classList.add('disabled');
        } else {
            itemParent.classList.remove('disabled');
        };
    };
};
var clearGalleryItems = function(galleryItems) {
    // Remove hide class from all items
    for (var i = 0; i < galleryItems.length; i++) {
        var itemParent = galleryItems[i].parentNode;
        itemParent.classList.remove('disabled');
    };
};
var filterGallery = function(button, label, isActive, i) {
    // Get gallery items
    var galleryItems = document.querySelectorAll('.gallery-list .gallery-item a');

    return function() {
        if (!isActive[i]) {
            // If pressed not active button
            // Removing active classes from all buttons
            for (var z = 0; z < switcherButtons.length; z++) {
                switcherButtons[z].classList.remove('active');
            }
            // Adding active class to pressed button
            button.classList.add('active');
            // Set all buttons to not active status
            for (var j = 0; j < isActive.length; j++) {
                isActive[j] = false;
            }
            // Set active status to pressed button
            isActive[i] = true;
            // Run filter for gallery items
            filterGalleryItems(label, galleryItems);
        } else {
            // If pressed active button
            // Removing active class from pressed button
            button.classList.remove('active');
            // Set pressed button to not active status
            isActive[i] = false;
            // Show all gallery items
            clearGalleryItems(galleryItems);
        };
    };
};

var galleryListener = function() {
    for (var i = 0; i < switcherButtons.length; i++) {
        switcherButtons[i].addEventListener('click', filterGallery(switcherButtons[i], switcherButtonsLabels[i], switcherButtonsIsActive, i));
    };
};

galleryListener();
