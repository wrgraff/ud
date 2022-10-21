$('section.full-height:not(.teaser)').each(function(){
  var sectionHeight = $(this).innerHeight();
  var windowHeight = $(window).innerHeight();
  if (sectionHeight < windowHeight) {
    $(this).css('height', window.innerHeight - topbarHeight +'px');
  }
});