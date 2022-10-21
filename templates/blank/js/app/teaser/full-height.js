function teaserFullHeight(teaserStartHeight) {
    var teaser = $('.teaser-full-height');
    var teaserHeight = teaser.innerHeight();
    var windowHeight = $(window).innerHeight();
    var position = teaser.position();
    if (teaserStartHeight < (windowHeight - position.top)) {
        teaser.css('min-height', window.innerHeight - position.top + 'px');
    };
}

$(document).ready(function() {
    var teaserStartHeight = $('.teaser-full-height').innerHeight();
    teaserFullHeight(teaserStartHeight);

    $(window).resize(function() {
        teaserFullHeight(teaserStartHeight);
    });
});
