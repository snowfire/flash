(function ($) {


    // Set the default selector
    var defaultSettings = {
        selector: '.sf-flash',
        delay: 50,
        displayTime: 5000
    };

    $.fn.sfflash = function( options ) {

        if (typeof options === 'string' || options instanceof String) {
            // If the user only passes in a string, we assume that will be the jQuery selector
            settings = {
                selector: option
            }
        } else {
            settings = $.extend(defaultSettings, options);
        }

        var flashMessage = $(settings.selector);

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