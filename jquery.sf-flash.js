(function ($) {

    $.fn.sfFlash = function( options ) {

        var flashMessage = $(this);

        if (flashMessage) {
            window.setTimeout(function(){
                flashMessage.show().addClass('fadeInUp animated');
            }, 50);

            window.setTimeout(function(){
                flashMessage.addClass('fadeOutDown animated');
            }, 5000);
        }
    }
} (jQuery));