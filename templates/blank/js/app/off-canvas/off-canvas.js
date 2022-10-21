$(document).ready(function() {
  $('.show-canvas').click(function(){
    $('.off-canvas').toggleClass('opened');
    $('.mask').toggleClass('showed');
  });
  $('.mask').click(function(){
    $('.off-canvas').toggleClass('opened');
    $('.mask').toggleClass('showed');
  //  $('.mask .ripple').remove();
  });
});