/*
 jQuery Input Sum Plugin
 Version: 0.1.a (30-mar-2014)
 Author: Nikita Listratov
 URL: https://github.com/inixon/InputSum
 Requires jQuery v1.10 or later
 Licensed under the MIT licenses
 
 HowTo
 1. HTML MarkUp
 Very simple. Just add checbox with value and same class. Don't forget "result" div
 
 <div type="checkbox" class="myclass" value="100" />
 <div type="checkbox" class="myclass" value="100" />
 <div type="checkbox" class="myclass" value="100" />
 
 <div id="result"></div>
 
 2.jQuery
 Just call function as usual
 
 $('.myclass').inputsum();
 
 And after clicking on chekbox you will see summ in "result" div.
 
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
