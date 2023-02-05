$(document).ready(function () {
    "use strict";

    $(document).mouseup(function(e)  {
        var container = $(".about_map_block_right_modal");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".about_map_block_right_modal").removeClass("active");
        }
    });

    $(".nav_mobile_top_btn").click(function() {
        $(this).toggleClass("active");
        $(".nav_mobile_drop").toggleClass("active");
    });

    $(".blog_content_item_content_read_btn").click(function(){
        $(this).parent().parent().parent().parent().addClass("active");
    });

    $(".map_item").click(function() {
        var id = $(this).attr('id');
        $(".about_map_block_right_modal").removeClass("active");
        $(`.about_map_block_right_modal[data-target='${id}']`).addClass("active");
    });

    $('.main_slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        prevArrow: $('.main_prev'),
        nextArrow: $('.main_next')
    });

    $('.sublease_slider_block').slick({
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        prevArrow: $('.sublease_slider_prev'),
        nextArrow: $('.sublease_slider_next')
    });

    $('.first_slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        prevArrow: $('.first_top_right_prev'),
        nextArrow: $('.first_top_right_next')
    });

    $('.news_slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        variableWidth: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        prevArrow: $('.news_block_top_right_prev'),
        nextArrow: $('.news_block_top_right_next'),
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

    $('.about_history_block_slider').slick({
        dots: false,
        infinite: false,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        cssEase: 'linear',
        asNavFor: '.about_history_block_nav'
    });

    $('.about_history_block_nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        asNavFor: '.about_history_block_slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false
      });

    $('.supplier_range_slider_wrap').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplaySpeed: 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        cssEase: 'linear',
        variableWidth: true,
        prevArrow: $('.supplier_range_slider_left'),
        nextArrow: $('.supplier_range_slider_right')
    });

    $('.foreign_suppliers_ribbon_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 1000,
        centerMode: false,
        focusOnSelect:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        cssEase: 'linear',
        variableWidth: true,
        prevArrow: $('.foreign_suppliers_ribbon_prev'),
        nextArrow: $('.foreign_suppliers_ribbon_next'),
    });

    $('.supplier_logistics_feature_slider_wrap').slick({
        dots: false,
        infinite: true,
        arrows: true,
        variableWidth: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        cssEase: 'linear',
        prevArrow: $('.supplier_logistics_feature_slider_prev'),
        nextArrow: $('.supplier_logistics_feature_slider_next'),
        responsive: [
            {
              breakpoint: 991,
              settings: {
                rows: 2,
                dots: false,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('input[type="tel"]').inputmask("+7(999)999-99-99");


});