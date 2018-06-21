
//ссылки в хедере и его анимация

$(document).ready(function(){
// var children = ".children";
// $(".header-link").click(function () {
//     $(children).addClass(' bounceOutDown').removeClass('active fadeInUp');
//     $(this).siblings(children).addClass('active fadeInUp').removeClass('bounceOutDown');
// });
// $(document).mouseup(function (e) { // событие клика по веб-документу
//     var div = $(children); // тут указываем ID элемента
//     if (!div.is(e.target) // если клик был не по нашему блоку
//         && div.has(e.target).length === 0) { // и не по его дочерним элементам
//         div.addClass(' bounceOutDown').removeClass('active bounceInDown');
//     }
// });
// $('.download-title').on('click', function () {
//     $('input').trigger('click');
// });

//активный хедер

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('header').addClass('black-menu');
    }
    else {
        $('header').removeClass('black-menu')
    }
});

// slider card-inside
//     $('.client-card').owlCarousel({
//         loop:true,
//         margin:10,
//         nav:true,
//         responsive:{
//             0:{
//                 items:3
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:4
//             }
//         }
//     });

// about us slide brand

    $('.brand-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    });

    $('.page-object-icon').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0: {
                items: 4
            }
        }
    });


// main animate spider
    window.onload = function() {
        Particles.init({
            selector: '.spider',
            sizeVariations: '10',
            color:'#037c64',
            connectParticles:true,
            minDistance:'120',
            responsive:true
        });
    };


    $(function($){
        var contents = $('.job-content');
        var titles = $('.job-title-name');
        titles.on('click',function(){
            var title = $(this);
            contents.filter(':visible').slideUp(function(){
                $(this).prev('.job-title-name').removeClass('is-opened');
            });

            var content = title.next('.job-content');

            if (!content.is(':visible')) {
                content.slideDown(function(){title.addClass('is-opened')});
            }
        });
    });

    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer'
        }
    });

// filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
    });

// map modal card

    $('path').click(function (e) {
        $(this).toggleClass('active');
        $('#openModal .modal-map-title').html($(this).attr('title'));
        $('#openModal .modal-description').html('');
        //get json data
        $.ajax({
            url: '/ajax/map.html',
            method: 'GET',
            dataType: 'html',
            async: false,
            success: function (data) {
                console.log(data);
                $('#openModal .modal-description').append(data);
            }
        });


        $('#openModal').toggle();
        e.stopPropagation();
    });

    $('.modal-map-close').click(function (event) {
        event.preventDefault();
        $('#openModal').hide();
    });

    $('#openModal').click(function (e) {
        e.stopPropagation();
    });
    $('body').click(function () {
        var link = $('path#US');
        if (link.hasClass('active')) {
            link.click();
        }
    });

//about us 2013 2014 2015 ........

    $('.tabs-helper a').click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('.h-date').hide();
        $('.h-date-tabs').fadeIn();
        $('.nav-pills a[href="'+href+'"]').tab('show');
    });
    $('.close-tabs').click(function (e) {
        e.preventDefault();
        $('.h-date-tabs').fadeOut();
        $('.h-date').fadeIn(600);
    });



    const menuOne = document.querySelector('.menuOne');

    function addClassFunOne() {
        this.classList.toggle("clickMenuOne");
    }
    menuOne.addEventListener('click', addClassFunOne);

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    new WOW().init();








});

// Particles.init({
//     selector: '.spider',
//     sizeVariations: '20',
//     color:'#fff',
//     responsive:true,
//     connectParticles:true,
//
// });