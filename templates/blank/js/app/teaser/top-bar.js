var topbarHeight = $('.top-bar').outerHeight();
// Correct for navigation height
$('.top-bar .menu').data('threshold', topbarHeight * 2);
// Transparented Top-bar
window.onscroll = function() {
  var teaserHeight = $('.teaser').height() - topbarHeight;
  var topbarPosition = $('body').scrollTop();

  if (teaserHeight > topbarPosition) {
    $('.top-bar').addClass('transparented');
  } else {
    $('.top-bar').removeClass('transparented');
  }
};