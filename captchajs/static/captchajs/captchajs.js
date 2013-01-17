/*
* jQuery captchajs
* http://carlosrberto.github.com/jquery-captchajs/
*
* Copyright (c) 2012 Carlos Roberto Gomes Junior
* http://carlosroberto.name/
* 
* Licensed under a Creative Commons Attribution 3.0 License
* http://creativecommons.org/licenses/by-sa/3.0/
*
* Version: 0.1
*/

(function($) {
    var defaults = {
        captchaUrl : '/captchajs/update-captcha/',
        updateButton: '.captcha-update',
        autoUpdate: true,
        autoAppend: false,
    };
    
    function CaptchaJs (container, options) {
        if ( options ) {
            this.settings = $.extend({}, defaults, options);            
        } else {
            this.settings = defaults;
        }
        this.container = $(container);
        $('body').on('click', this.settings.updateButton, $.proxy(function( event ) {
            event.preventDefault();
            this.load();
        }, this));
    }
    
    CaptchaJs.prototype = {
        load: function() {
            var that = this;

            $(that.container).trigger('captchajs.load');
            $.ajax({
                cache: false,
                url: this.settings.captchaUrl,
                success: function( data ) {
                    var fragment = $('<div>');
                    fragment.append(data);
                    if ( that.settings.autoAppend ) {
                        that.container.empty().append( fragment );
                    }
                    if (  that.settings.autoUpdate ) {
                        var imgUrl = fragment.find('img').attr('src');
                        var captchaHash = fragment.find('input[name="captcha_0"]').val();

                        that.container.find('input[name="captcha_0"]').val( captchaHash );
                        that.container.find('img').attr('src', imgUrl);
                    }
                    $(that.container).trigger('captchajs.complete', [fragment]);
                },

                error: function(xhr, err) {
                    $(that.container).trigger('captchajs.error', [xhr, err]);
                }
            })
        }
    };
    
    $.fn.captchajs = function( method ) {
        return this.each(function() {
            // TODO: find a way to do this better
            if ( !$(this).data('CaptchaJs') ) {
                $(this).data('CaptchaJs', new CaptchaJs(this, method));
                return;
            }
            
            var api = $(this).data('CaptchaJs');
            
            if ( method ) {
                if ( api[ method ] ) {
                    api[ method ].apply( api, Array.prototype.slice.call( arguments, 1 ) );
                } else {
                    $.error( 'Method ' +  method + ' does not exist on jQuery.CaptchaJs' );
                }                
            }
        });
    };
})(jQuery);

$(function(){
    $('#id_captcha_1').parent().captchajs();
});
