$(document).ready(function(){
    $('#btnTopMenu').click(function(){
        $('.main-menu').toggleClass('show');
        $('.header__mobile-close-btn').addClass('active-close-btn');
    });

    $('#btnClose').click(function(){
        $('.main-menu').removeClass('show');
        $('.header__mobile-close-btn').removeClass('active-close-btn');
    });
});