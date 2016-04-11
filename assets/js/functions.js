   $('.nav').scrollToFixed();
        $('.bxslider').bxSlider({
                 auto: true
             });
           
           
            $('#toggle').click(function() {
       $(this).toggleClass('active');
       $('#overlay').toggleClass('open');
      });
           
           
           $(window).scroll(function(){
               
        var wScroll = $(this).scrollTop();
      $('.header-container').css({
        'transform' : 'translate(0px, '+ wScroll +'px)'
      });
      $('.topnav').css({
          'transform' : 'translate(0px, '+ wScroll +'px)'
      });
});
           
           
$(document).scroll(function() {
var y = $(this).scrollTop();
  if (y > 800) {
      $(".button_container").hide();
} else if($(window).width() < 1030) {
    $(".button_container").show();
    
}


});

   

