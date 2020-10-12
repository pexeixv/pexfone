$(document).scroll(function () {
    var top1 = $('header').offset().top;
    var top2 = $('.landingArea').offset().top;
    var top3 = $('.gridShow').offset().top;
    var scrollPos = $(document).scrollTop();

    // HEADER COLOUR CHANGER
    if (top1 <= scrollPos && scrollPos < top2){
        $('header').css('background', 'rgb(199, 242, 255)');
    } else if (top2 <= scrollPos && scrollPos < top3){
        $('header').css('background', 'white');
    } else if (top3 <= scrollPos){
        $('header').css('background', 'rgb(199, 242, 255)');
    }

    // HEADER SHADOW
    if (scrollPos > 50){
        $('header').css('box-shadow', '0 2px 10px 2px rgba(0,0,0,0.2)')
    } else if (scrollPos <= 50){
        $('header').css('box-shadow', 'none')
    }
})