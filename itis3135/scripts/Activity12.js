$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        speed: 3000,
        randomStart: true,
        captions: true,
        pager: true,
        pagerType: 'short',
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20
    });
});