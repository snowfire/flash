(function ($) {

    $.fn.sfFlash = function() {

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
                }, 50);

                window.setTimeout(function(){
                    flashMessage.addClass('fadeOutDown animated');
                }, 5000);
            }
        }

        main();
    }
} (jQuery));