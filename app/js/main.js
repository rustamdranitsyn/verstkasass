$(function(){

$('.header__slide').slick({
   infinite: true,
   fade: true,
   prevArrow: '<img class="slide-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
   nextArrow: '<img class="slide-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',  
   asNavFor: '.slider-dotshead'
});

$('.slider-dotshead').slick({
   slidesToShow: 4,
   slidesToScroll: 4,
   asNavFor: '.header__slide',
});

$('.serf-slider').slick ({
   slidesToShow: 4,
   slidesToScroll: 1,
   prevArrow: '<img class="slide-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
   nextArrow: '<img class="slide-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
   asNavFor: '.slider-map',
});  
$('.slider-map').slick ({
   slidesToShow: 8,
   slidesToScroll: 1,
   arrows: false,
   asNavFor: '.serf-slider',
   focusOnSelect: true,
});
});