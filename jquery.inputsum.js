/*
 jQuery Input Sum Plugin
 Version: 1.0.2 (30-mar-2014)
 Author: Nikita Listratov
 URL: https://github.com/inixon/InputSum
 Requires jQuery v1.10 or later
 Licensed under the MIT licenses
 
 HowTo
 Plugin is very simple to use.
 
 1. HTML MarkUp
 Just add some checkbox with value and same class. Don't forget "result" area in code.
 
   <input type="checkbox" class="myclass" value="100" />
   <input type="checkbox" class="myclass" value="150" />
   <input type="checkbox" class="myclass" value="210" />
     ....
   <input type="checkbox" class="myclass" value="5500" />
 
   Price: <span id="result">0</span>
 
 2.jQuery
 Call function as usual
 
   $('.myclass').inputsum();
 
 And after click on chekbox you will see change sum in "result" area on page.
 
 3.Settings
 Plugin have two settings. 
   
   3.1 Result container
   By default result container must have ID 'is-result'.
   If you want change name for result container just call function with option 'result'.
 
   $('.myclass').inputsum({
     result: '#another-id'
   });
   
   3.2 Specify reset button
   By default reset button must have ID 'is-reset'. 
   If you have another name just call function with option 'reset'.
 
   $('.myclass').inputsum({
     reset: '#another-id'
   });
 
 
*/

(function( $ ) {
    $.fn.inputsum = function(options) {
        
        var settings = $.extend({
            result: '#is-result',
            reset: '#is-reset'
        }, options );
       
       var $this = $(this); 
        
       $( 'input.'+$this.attr('class')+':checkbox' ).on('click', function() {
        
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
       
       $(settings.reset).on('click', function() {
           $(settings.result).html('0');
           $('input.'+$this.attr('class')+':checkbox').attr("checked", false);
       });
    }
}( jQuery ));
