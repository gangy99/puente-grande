$(document).ready(function(){
    
    var fixedHeader = $('#fixedHeader')

   $(window).on('scroll',function(){

    var proyectosOffsetTop = $('#como-funciona').offset().top;

    if ($(window).scrollTop() >= proyectosOffsetTop){
        
        fixedHeader.css('margin-top',0);
    }

    else if ($(window).scrollTop() <= proyectosOffsetTop/2) {
        
        fixedHeader.css('margin-top','-80px');
    }

   })

})