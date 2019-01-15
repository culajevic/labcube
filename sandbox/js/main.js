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

// sticky navigation for side menu
$(window).scroll(function(){
  var height = $(window).scrollTop();
  // var footer = $('#footer').offset().top;
  // var result = footer-height;
// if (result<490) {
    // console.log('height:'+height + ' ' + 'footer:'+footer);
    // alert("sada???");
  // }

    if(height > 270) {
      $(".odabraneAnalize").addClass('fixed-right');
    }
    else {
      $(".odabraneAnalize").removeClass('fixed-right');
    }
});

// scrol to top button
$('.backToTop').click(function(){
  $('html').animate({scrollTop:0}, 1200);
    return false;
});
