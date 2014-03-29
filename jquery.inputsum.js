/*!
 * jQuery Input Sum Plugin
 * version: 0.1.a (30-mar-2014)
 * @requires jQuery v1.10 or later
 * Licensed under the MIT licenses: http://malsup.github.com/mit-license.txt
 */

(function( $ ) {
    $.fn.inputsum = function(options) {
        
        var settings = $.extend({
            result: '#result'
        }, options );
        
       $(':checkbox').on('click', function() {
        
         if ($(this).is(':checked')) {
            
              var $result = $(settings.result);
              var newsum = $(this).attr('value');
              var sumtotal = parseFloat($result.html()) + parseFloat(newsum);
              $result.html(sumtotal);
              
         } else {
         
              var $result = $(settings.result);
              var newsum = $(this).attr('value');
              var sumtotal = parseFloat($result.html()) - parseFloat(newsum);
              $result.html(sumtotal);
         
         }
       
       }); 
    }
    
}( jQuery ));
