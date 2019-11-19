$(document).ready(function () {
    /* Portfolio */
    $('.button[filter]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off').removeClass('focused');
            $(this).attr('val', 'on').addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
            if ($(this).attr('filter') == 'all') {
                $('.button[filter]').attr('val', 'off').removeClass('focused');
                $(this).attr('val', 'on').addClass('focused');
                $('.filter > div').show(300);
            }
        }
    });



/*Slider*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
/* Menu */
    $('ul.menu a[href^="#"]').click(function()
    {
        var target=$(this).attr('href');
        $('html,body').animate({
            scrollTop:$(target).offset().top
        },500);
        return false
    })

    $(window).scroll(function () {
        if($(this).scrollTop()!=0)
            $('#toTop').fadeIn();
        else
            $('#toTop').fadeOut();
    });

    $('#toTop').click(function () {
$('body,html').animate({
    scrollTop:0
    },500);
    });
});

