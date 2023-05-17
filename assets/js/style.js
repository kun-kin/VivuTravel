$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('header-fixed');
    } else {
        $('.header').removeClass('header-fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {



    $(".optbtn").click(function() {
        $(this).parents().children('.paxCount-dropmain').toggleClass('active');
    });

    $(".close-done").click(function() {
        $('.paxCount-dropmain').removeClass('active');
    });


    // $('#check-in').datepicker();
    // $('#check-out').datepicker();
    $("#checkIn").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#checkOut").flatpickr({
        dateFormat: "d/m/Y"
    });

    $(".menu-toggle .hamButton").click(function() {
        $(this).parents('.menu-toggle').children('.block-menu-mobile').toggleClass('open');
        $('.hasSubmenu').removeClass('open');
        $('.hasSubmenu').children('.submenu').slideUp();

    });

    $(".hasSubmenu a").click(function() {
        $(this).parents('.hasSubmenu').toggleClass('open');
        $(this).parents('.hasSubmenu').children('.submenu').slideToggle();
    });

    // $(".bar_group").click(function() {
    //     if ($(window).width() < 1023) {
    //         $('.main_nav').slideToggle();
    //     }
    // });


    // $('.header_navhover').hover(function() {
    //     if ($(window).width() > 1024) {
    //         $('.navContent').stop().slideDown("600");
    //     }
    // }, function() {
    //     if ($(window).width() > 1024) {
    //         $('.navContent').stop().slideUp("600");
    //     }
    // })

    $('#tour_detail_tab .select_tab_brow_tour').change(function(e) {
        $('#tour_detail_tab .tab-content .tab-pane').removeClass('active');
        $('#tour_detail_tab .tab-content ' + $(this).val()).addClass('active');
    });






    //hover function
    // $(".menu-left .menu-left__link").mouseover(function() {
    //     $(this).addClass('open').removeClass('unhovered');
    //     $('.menu-left__link').not($(this)).addClass('unhovered');
    // });
    // $(".menu-left .menu-left__link").mouseout(function() {
    //     $(this).removeClass('open');
    // });



});