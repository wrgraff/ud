// Scroll-down
$('.teaser-scroll-down').click(function() {
    var teaser = $('.teaser');
    var position = teaser.position();
    var teaserHeight = teaser.innerHeight();
    var teaserPull = 0;
    $('.teaser-scroll-down-pull').each(function() {
        teaserPull = teaserPull + $(this).innerHeight();
    });
    console.log(teaserPull);

    $('html, body').animate({
        scrollTop: teaserHeight + position.top - teaserPull
    }, 350);
});
