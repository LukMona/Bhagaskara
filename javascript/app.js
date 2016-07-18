$(function(){

  function stickyMenu(){
    var wholeNav = $("nav");
    var nav = $(".nav-bar");
    var menuTop = $(nav).offset().top;

    $(window).scroll(function(){
      var windowScroll = $(document).scrollTop();

      if (windowScroll > menuTop){
        wholeNav.addClass("sticky");
      }else{
        wholeNav.removeClass("sticky");
      }

      $(window).resize(function(){
        console.log("weszło");
        if(wholeNav.hasClass("sticky")){
          menuTop = wholeNav.offset().top;
          console.log("pierwszy if " + menuTop);
        }else{
          menuTop = nav.offset().top;
          console.log("drugi else " + menuTop);
        }
      });

    });
  }

  stickyMenu();
});
