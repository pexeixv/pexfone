$(document).scroll(function () {
    var top1 = $('header').offset().top;
    var top2 = $('.landingArea').offset().top;
    var top3 = $('.gridShow').offset().top;
    var scrollPos = $(document).scrollTop();
    if (top1 <= scrollPos && scrollPos < top2){
        $('header').css('background', 'white');
    } else if (top2 <= scrollPos && scrollPos < top3){
        $('header').css('background', 'white');
    } else if (top3 <= scrollPos){
        $('header').css('background', 'rgb(199, 242, 255)');
    }
})