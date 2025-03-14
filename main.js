$(document).ready(function (){
    $('.follow-me-btn').click(function (){
        $('.card-follow').toggleClass('active');
    });

    $('.branch').click(function (){
        $('.branch-name').toggleClass('active');
    });

    $('.btn-close').click(function (){
        $('body').removeClass('overflow-hidden active');
        $('.modals').removeClass('active');
    });

    $('.gallery').click(function (){
        $('body').addClass('overflow-hidden active');
        $('#gallery').addClass('active');
    });

    $('.about').click(function (){
        $('.about-wrapper').addClass('active');
    });

    $('.about-wrapper .btn-close').click(function (){
        $('.about-wrapper').removeClass('active');
    });
   
    $('.modal-slider').slick({
        arrows: false,
        autoplay: true
    });
});