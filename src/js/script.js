// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',

//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     arrows: false,
//                     dots: true,

//                 }
//             }
//         ]
//     });
//     $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
//         $(this).addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active').closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
//     });


//     function toggleSlide(item) {
//         $(item).each(function (i) {
//             $(this).on('click', function (e) {
//                 e.preventDefault();
//                 $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//                 $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//             });
//         });
//     };

//     toggleSlide('.catalog-item__link');
//     toggleSlide('.catalog-item__back');
// });
$(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });

    // Переключение вкладок
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active')
            .siblings().removeClass('catalog__tab_active')
            .closest('div.container')
            .find('div.catalog__content')
            .removeClass('catalog__content_active')
            .eq($(this).index()).addClass('catalog__content_active');
    });

    // Оптимизированное переключение контента карточки товара
    $('.catalog-item__link, .catalog-item__back').on('click', function (e) {
        e.preventDefault();
        let index = $(this).closest('.catalog-item').index();
        $('.catalog-item__content').eq(index).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(index).toggleClass('catalog-item__list_active');
    });
});
