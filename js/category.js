
//点击li让相对应的li边框变红
$(".type-name li").click(function(event){
    sortSwiper.slideTo($(this).index(),1000,false);
    $(this).addClass("red").siblings().removeClass("red");
});