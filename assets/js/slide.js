$('.slide-testi').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
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