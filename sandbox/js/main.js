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
    if(height > 120) {
      $(".odabraneAnalize").addClass('fixed-right');
      $(".test").addClass('fixed-top fix');
      $(".test").removeClass('searchFieldContainerInner');

    }
    else {
      $(".odabraneAnalize").removeClass('fixed-right');
      $(".test").removeClass('fixed-top fix');
      $(".test").addClass('searchFieldContainerInner ');
    }
});

// scrol to top button
$('.backToTop').click(function(){
  $('html').animate({scrollTop:0}, 1200);
    return false;
});

// smooth scroll for sidebar menu
$('#sideMenu a').click(function(e) {
  e.preventDefault;
  target = this.hash;
  $('html').animate({scrollTop:$(target).offset().top-10},1200);
  });
