
//首页导航
var navLis=$(".n-left li");
var indexSwiper = new Swiper ('.swiper-index', {
    direction: 'horizontal',
    autoHeight: true,
	onSlideChangeStart:function(indexSwiper){
        var num=(indexSwiper.activeIndex);
        console.log(num);
        $(navLis[num]).addClass("red").siblings().removeClass("red");
    }
});


//首页轮播图
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:2000,
    pagination: '.swiper-pagination',
    paginationClickable: true

});

//列表页切换
var lis=$(".type-name li");
var sortSwiper = new Swiper ('.swiper-category', {
    direction: 'vertical',
    autoHeight: true,
    onSlideChangeStart:function(sortSwiper){
        var num=(sortSwiper.activeIndex);
        console.log(num);
        $(lis[num]).addClass("red").siblings().removeClass("red");
    }
});

