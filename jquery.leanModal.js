(function($){
    $.fn.extend({ 
        leanModal: function(options) {
            var defaults = {
                top: 100,
                overlay: 0.5,
                closeButton: null
            };

            var overlay = $("<div id='lean_overlay'></div>");
            $("body").append(overlay);
            options =  $.extend(defaults, options);

            return this.each(function() {
                var o = options;

                $(this).click($.proxy(function(e) {
                    e.preventDefault();
                    var modal_id = $(this).attr("href");

				    $("#lean_overlay").click($.proxy(function() {
                        $(this).closeModal();
                    }, this));

                    $(o.closeButton).click($.proxy(function() {
                        $(this).closeModal();
                    }, this));

                    var modal_height = $(modal_id).outerHeight();
                    var modal_width = $(modal_id).outerWidth();

                    $('#lean_overlay').css({'display' : 'block', opacity : 0});
                    $('#lean_overlay').fadeTo(200, o.overlay);

                    $(modal_id).css({
                        'display' : 'block',
                        'position' : 'fixed',
                        'opacity' : 0,
                        'z-index': 11000,
                        'left' : 50 + '%',
                        'margin-left' : -(modal_width / 2) + "px",
                        'top' : o.top + "px"
                    });

                    $(modal_id).fadeTo(200, 1);
                }, this));
            });
        },

        closeModal: function() {
            $("#lean_overlay").fadeOut(200);
            $($(this).attr("href")).css({'display' : 'none'});
		}
    });

})(jQuery);
