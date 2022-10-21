var $ = jQuery.noConflict();
jQuery(document).ready(function( $ ){
    scrollToTop.init( );
});

var scrollToTop =
{
    /**
     * When the user has scrolled more than 100 pixels then we display the scroll to top button using the fadeIn function
     * If the scroll position is less than 100 then hide the scroll up button
     *
     * On the click event of the scroll to top button scroll the window to the top
     */
    init: function(  ){

        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });

        // Click event to scroll to top
        $('.scroll-to-top').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    }
};