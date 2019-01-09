// changing analysis number on hover
$('.clickMore').hover(function(){
  $(this).find("span").toggleClass("analysisNumberHover");
});

// sticky navigation
$(window).scroll(function(){
  var height = $(window).scrollTop();
    if(height > 460) {
      $("#header > nav").addClass('fixed-top-background fixed-top');
    }
    else {
      $("#header > nav").removeClass('fixed-top-background fixed-top');
    }
});

// scrol to top button
$('.backToTop').click(function(){
  $('html').animate({scrollTop:0}, 1200);
    return false;
});
