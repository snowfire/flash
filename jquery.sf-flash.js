(function ($) {

    var defaultOptions = {
        delay: 50,
        duration: 5000
    };

    $.fn.sfFlash = function(options) {

        var settings = $.extend(defaultOptions, options);

        var flashMessage = this;

        $(document).on("DOMSubtreeModified", function() {
            // We refresh the selector to include new elements. Unfortunately, there is no better way to do this today.
            flashMessage = $(flashMessage.selector);
            main();
        });

        var main = function() {
            if (flashMessage) {
                window.setTimeout(function(){
                    flashMessage.show().addClass('fadeInUp animated');
                }, settings.delay);

                window.setTimeout(function(){
                    flashMessage.addClass('fadeOutDown animated');
                }, settings.duration);
            }
        }

        main();
    }
} (jQuery));