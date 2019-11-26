$(document).ready(function(){
    
//    메인메뉴_서브메뉴
    $("nav>ul>li>.sub_menu").hide();
    $("nav>ul>li").mouseenter(function(){
        var i = $(this).index();
        $("nav>ul>li>.sub_menu").eq(i).stop().slideDown(300);
    }).mouseleave(function(){
        $("nav>ul>li>.sub_menu").stop().slideUp();
    });
    
    $(".sub_menu>li>.pt_sub_menu").hide();
    $("nav>ul>li>.sub_menu>li").mouseenter(function(){
        var i = $(this).index();
        $(".sub_menu>li>.pt_sub_menu").eq(i).stop().slideDown(300);
    }).mouseleave(function(){
        $(".sub_menu>li>.pt_sub_menu").stop().slideUp();
    });
    
    $(".sub_menu>li>.pt_sub_menu>li>.pt_more_sub_menu").hide();
    $(".sub_menu>li>.pt_sub_menu>li").hover(function() { 
        $(this).find("ul").slideDown(300); 
    }, function() { 
        $(this).find("ul").slideUp(); 
    });

    
//    $(".sub_menu>li>.pt_sub_menu>li>.pt_more_sub_menu").hide();
//    $(".sub_menu>li>.pt_sub_menu>li").mouseenter(function(){
//        var i = $(this).index();
//        $(".sub_menu>li>.pt_sub_menu>li>.pt_more_sub_menu").eq(i).stop().slideDown(300);
//    }).mouseleave(function(){
//        $(".sub_menu>li>.pt_sub_menu>li>.pt_more_sub_menu").stop().slideUp();
//    });
    
    
    
//     슬라이드

    var slide = $("#slide>ul>li");
    var button = $("#slide_Btn>ul>li");
    var i = 0;
    var current = 0;
    var setIntervalId;
    timer();
    
    button.on({click:function(){
        var tg = $(this);
        var i = tg.index();
        button.removeClass('on');
        tg.addClass('on');
        move(i);
      }
    });
    
    function move(i){
        if(current == i) return;
        var current1 = slide.eq(current);
        var next1 = slide.eq(i);

        current1.css({left:0}).stop().animate({left:'-100%'});
        next1.css({left:'100%'}).stop().animate({left:0});

        current = i;
    }
    
    $("figure").on ({
       mouseover:function(){
          clearInterval(setIntervalId); 
       },
        mouseout:function(){
            timer();
        }
    });
    
    function timer() {
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if (n == slide.length){
                n = 0;
            }
            button.eq(n).trigger('click');
        },3000);
    }
    
    $(window).scroll(function(){
       if($(this).scrollTop() >=500) {
           $("#gotoTop").fadeIn();
       } else {
           $("#gotoTop").fadeOut();
       }
    });
        $("#gotoTop").click(function(){
           $("html,body").animate({scrollTop:0},700); 
        });
        
    
    $(window).scroll(function(){
        if($(this).scrollTop() >=100) {
           $("#gotoBottom").fadeIn();
       } else {
           $("#gotoBottom").fadeOut();
       }
    });
        $("#gotoBottom").click(function(){
           $("html,body").animate({scrollTop:10000}, 1500); 
        });
    
    //product.html - js
    
    $("#product > .pt_menu > ul > li").click(function(){
       var a = $(this).index();
        $(".pt_sub").eq(a).stop().slideToggle();
       });
    
//    $("#product > .pt_menu > ul > li").mouseenter(function(){
//        var a = $(this).index();
//    $(".pt_sub").eq(a).stop().slideDown();
//        }).mouseleave(function(){
//           $(".pt_sub").stop().slideUp(); 
//    });
        
    
    //product.html - 상품숫자페이지
    
    $(".pt_arr > .pt_arr_img").hide();
    $(".pt_arr > .pt_arr_btn > li.select").eq(0).addClass("on");
    $(".pt_arr > .pt_arr_img").eq(0).show();
    
    $(".pt_arr > .pt_arr_btn > li.select").click(function(){
       $(".pt_arr > .pt_arr_btn > li.select").removeClass("on");
        $(this).addClass("on");
        $(".pt_arr > .pt_arr_img").hide();
        var i = $(this).index()-1;
        $(".pt_arr > .pt_arr_img").eq(i).show();
    });
    
    
    //product.html - 상품숫자페이지 이전 이후 페이지 넘기기
    
    $(".pt_arr > .pt_arr_btn > li.pt_arr_leftBtn").click(function(){
        $(".pt_arr > ul.pt_arr_img:last").insertBefore(".pt_arr > ul.pt_arr_img:first"); 
    });
    $(".pt_arr > .pt_arr_btn > li.pt_arr_rightBtn").click(function(){
        $(".pt_arr > ul.pt_arr_img:first").insertAfter(".pt_arr > ul.pt_arr_img:last"); 
    });
    
    
    
    
    
    //모바일 메인메뉴 햄버거버튼 열고 닫기
    $("header .m_menu_bt").click(function(){
       $("header nav").animate({left:0},500); 
    });
    $("header nav > .nav_close").click(function(){
        $("header nav").animate({left:"-100%"},500);
    });
    
    //검색버튼 열고 닫기
    $("header .search").click(function(){
        $("header .m_search").slideToggle(300);
    })
    });

