$(document).foundation()
$(document).ready(function(){
  $('.nav li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});
$("a[href='#home']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 750);
  return false;
});
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});


!function($){
  
  var defaults = {
    btnContent: "=",
    position: "left",
    customSelector: "li",
    hideButton: false
  };
  
  
  
  $.fn.fly_sidemenu = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this),
        animationClass = "flyInLeft";  
    
    $("body").addClass("fsm-body")
    switch (settings.position) { 
      case 'left': 
        animationClass = "flyInLeft"
      break;
      case 'right': 
        animationClass = "flyInRight"
      break;
      case 'top': 
        animationClass = "flyInTop"
      break;
      case 'bottom': 
         animationClass = "flyInBottom"
       break;
    }
    el.addClass("fsm-list").hide().find(settings.customSelector).addClass("animate "+ animationClass +" fsm-item")
    $( "body").wrapInner( "<div class='fsm-container fsm-" + settings.position + "'></div>");
    $("<nav id='fsm-sidebar' class='fsm-sidebar fsm-" + settings.position + "'>" + $('<div>').append(el.clone()).html() + "</nav>").prependTo("body");
    $( "body").wrapInner( "<div class='fsm-wrapper fsm-" + settings.position + "'></div>");
    if (settings.hideButton == false ) $("<a class='fsm-button fsm-" + settings.position + "' href='#'>" + settings.btnContent + "</a>").prependTo("#fsm-sidebar");
    
    $.fn.toggleMenu = function () {
      if ( $(".fsm-wrapper").is( ".open" ) ) {
        $(".fsm-container").unbind("click")
        $(".fsm-wrapper").removeClass("open");
        $(".fsm-wrapper").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          if ( !$(".fsm-wrapper").is( ".open" ) ) $(".fsm-container").attr("style", "")
        });

        $(".fsm-wrapper").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          if ( !$(".fsm-wrapper").is( ".open" ) ) $(".fsm-sidebar .fsm-list").hide();
           if (settings.position == "top" && settings.position == "bottom") $(".fsm-wrapper .fsm-sidebar").width("99%").width("100%") 
        });

      } else {
        $(".fsm-container").css({
          "cursor": "pointer",
          "overflow": "hidden",
          "max-height": $(window).height()
        }).bind("click", function(){
          $(this).unbind("click")
          $(".fsm-wrapper").removeClass("open");
          $(".fsm-wrapper").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
            if ( !$(".fsm-wrapper").is( ".open" ) ) {
              $(".fsm-sidebar .fsm-list").hide()
              $(".fsm-container").attr("style", "")
            }
          });  
        })
        if (settings.position == "top" || settings.position == "bottom") {
          $(".fsm-wrapper").css({
            "-webkit-transform": "translate3d(0, " + ($(window).height() * -1) + "px, 0) !important",
            "-moz-transform": "translate3d(0, " + ($(window).height() * -1) + "px, 0) !important",
            "-o-transform": "translate3d(0, " + ($(window).height() * -1) + "px, 0) !important",
            "transform": "translate3d(0, " + ($(window).height() * -1) + "px, 0) !important"
          }).addClass("open");
        } else {
          $(".fsm-wrapper").addClass("open");
        }

        $(".fsm-wrapper").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          if ( $(".fsm-wrapper").is( ".open" ) ) $(".fsm-sidebar .fsm-list").show();
        });
      }
    }
    
    $(".fsm-button").click(function() {
      el.toggleMenu();
      return false;
    });
    
    
    
    
    
  }
}(window.jQuery);


!function(e){var t={btnContent:"=",position:"left",customSelector:"li",hideButton:false};e.fn.fly_sidemenu=function(n){var r=e.extend({},t,n),i=e(this),s="flyInLeft";e("body").addClass("fsm-body");switch(r.position){case"left":s="flyInLeft";break;case"right":s="flyInRight";break;case"top":s="flyInTop";break;case"bottom":s="flyInBottom";break}i.addClass("fsm-list").hide().find(r.customSelector).addClass("animate "+s+" fsm-item");e("body").wrapInner("<div class='fsm-container fsm-"+r.position+"'></div>");e("<nav id='fsm-sidebar' class='fsm-sidebar fsm-"+r.position+"'>"+e("<div>").append(i.clone()).html()+"</nav>").prependTo("body");e("body").wrapInner("<div class='fsm-wrapper fsm-"+r.position+"'></div>");if(r.hideButton==false)e("<a class='fsm-button fsm-"+r.position+"' href='#'>"+r.btnContent+"</a>").prependTo("#fsm-sidebar");e.fn.toggleMenu=function(){if(e(".fsm-wrapper").is(".open")){e(".fsm-container").unbind("click");e(".fsm-wrapper").removeClass("open");e(".fsm-wrapper").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){if(!e(".fsm-wrapper").is(".open"))e(".fsm-container").attr("style","")});e(".fsm-wrapper").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){if(!e(".fsm-wrapper").is(".open"))e(".fsm-sidebar .fsm-list").hide();if(r.position=="top"&&r.position=="bottom")e(".fsm-wrapper .fsm-sidebar").width("99%").width("100%")})}else{e(".fsm-container").css({cursor:"pointer",overflow:"hidden","max-height":e(window).height()}).bind("click",function(){e(this).unbind("click");e(".fsm-wrapper").removeClass("open");e(".fsm-wrapper").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){if(!e(".fsm-wrapper").is(".open")){e(".fsm-sidebar .fsm-list").hide();e(".fsm-container").attr("style","")}})});if(r.position=="top"||r.position=="bottom"){e(".fsm-wrapper").css({"-webkit-transform":"translate3d(0, "+e(window).height()*-1+"px, 0) !important","-moz-transform":"translate3d(0, "+e(window).height()*-1+"px, 0) !important","-o-transform":"translate3d(0, "+e(window).height()*-1+"px, 0) !important",transform:"translate3d(0, "+e(window).height()*-1+"px, 0) !important"}).addClass("open")}else{e(".fsm-wrapper").addClass("open")}e(".fsm-wrapper").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){if(e(".fsm-wrapper").is(".open"))e(".fsm-sidebar .fsm-list").show()})}};e(".fsm-button").click(function(){i.toggleMenu();return false})}}(window.jQuery)