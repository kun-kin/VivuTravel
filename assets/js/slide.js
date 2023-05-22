$('.slide-testi').owlCarousel({
    /*loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'*/

    loop: false,
    autoPlay: 100000,
    items: 1,
    itemsDesktop: [1199, 1],
    itemsTablet: [600, 1],
    itemsDesktopSmall: [900, 2],
    itemsMobile: [479, 1],
    slideSpeed: 500,
    pagination: true,
    transitionStyle: 'fade'
})

$('#slide_gallery').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    items: 7,
    lazyLoad: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        },
        1200: {
            items: 7
        }
    }
})