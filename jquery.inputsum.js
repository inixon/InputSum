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
