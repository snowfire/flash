(function ($) {

    $.fn.sfFlash = function( selector ) {

        var flashMessage = $(selector);

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