
          this.scroll = document.body.scrollTop;
          console.log(this.scroll)
          var top = document.body.scrollTop || document.documentElement.scrollTop;
          console.log(top)
          if (top > 100) {
            document.getElementsByClassName("backtop")[0].style.opacity = "1";
          } else {
            document.getElementsByClassName("backtop")[0].style.opacity = "0";
          }

          //    回到顶部
          document.getElementsByClassName("backtop")[0].onclick = function(){
            $('html,body').animate({scrollTop: 0}, 500);
          }














 // $(window).scroll(function () { 
 //     let top=$(".factory")[0].offsetHeight;
 //     console.log(top);
 //     var scrollTop = $(window).scrollTop(); 
 //     console.log(scrollTop);
 //     // 点击返回顶部
 //    $('.backtop').click(function (e) { 
 //         if(top>scrollTop){
 //            $(".qiandao").fadeIn();
 //        }else{
 //            $(".qiandao").fadeOut();
 //        }
 //    }); 
 
 // });
    



$("body").bind("touchmove",function(e){
	let top=$(".factory")[0].offsetHeight;
	e.preventDefault();
    console.log(top);
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if(top>scrollTop){
    	$(".qiandao").fadeIn();
    }
     // 点击返回顶部
    $('.backtop').click(function (e) { 
         if(top>scrollTop){
            $(".qiandao").fadeIn();
        }else{
            $(".qiandao").fadeOut();
        }
    }); 
});


//导航栏点击显示全部
$(".n-right").click(function(){
    $(".all").slideToggle();
});

// 点击导航栏中的li跳转到相应的swiper
$(".n-left li").click(function(event){
    indexSwiper.slideTo($(this).index(),1000,false);
    $(this).addClass("red").siblings().removeClass("red");
});
