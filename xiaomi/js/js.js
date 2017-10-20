/**
 * Created by � on 2017/7/11.
 */
$(".topbar-cart").hover(function(){
    $(".xianshi").stop().slideToggle();
});
$(".nav-list").hover(function(){
    $(".header-nav-menu").stop().slideToggle();

});

$('#box ul').click(function(){
    $('#box ul').removeClass('active');
    $('#box div').removeClass('show');
    $(this).addClass('active');
    $('#box div').eq($(this).index()).addClass('show');
})



var index=0;
function show(){

    index++;
    if(index==5){
        index=0;
    }
    $('#ol1 li').removeClass('active');
    $('#ul1 li').stop().animate({opacity:0,zIndex:0});
    $('#ol1 li').eq(index).addClass('active');
    $('#ul1 li').eq(index).stop().animate({opacity:1,zIndex:1});
}
stop=setInterval(show,2000);

$(".box").hover(function(){
    clearInterval(stop)
},function(){
    stop=setInterval(show,2000)
});
$('#ol1 li').click(function(){
    $('#ol1 li').removeClass('active');
    $('#ul1 li').stop().animate({opacity:0,zIndex:0});
    $(this).addClass('active');
    $('#ul1 li').eq($(this).index()).stop().animate({opacity:1,zIndex:1});
})



