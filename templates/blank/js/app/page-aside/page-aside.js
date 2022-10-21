$(document).ready(function() {
    $('body').prepend('<div class="mask"></div>');
    $('.page-aside-show').click(function() {
        $('.page-aside').toggleClass('active');
        $('.mask').toggleClass('active');
    });
    $('.mask').click(function() {
        $('.page-aside').toggleClass('active');
        $('.mask').toggleClass('active');
    });
});
