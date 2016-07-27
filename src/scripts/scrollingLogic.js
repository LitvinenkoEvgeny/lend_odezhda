import $ from "jquery";


export default function () {
    $(document).ready(function() {
        // вам перезвонить ?
        $('.header__phones a').click(() => {
            $('html, body').animate({
                scrollTop: $('.footer__container').offset().top
            }, 2000);
        });
        //  посмотреть цены
        $('.header__buttons a:first-child').click(() => {
            $('html, body').animate({
                scrollTop: $('.top-section').offset().top - 69
            }, 2000);
        });

        // майки
        $('.top-section__item:nth-child(1) a').click(() => {
            $('html, body').animate({
                scrollTop: $('.tshirt-section__container').offset().top - 69
            }, 2000);
        });

        // Футболки
        $('.top-section__item:nth-child(2) a').click(() => {
            $('html, body').animate({
                scrollTop: $('.footbalTshirt-section__container').offset().top - 69
            }, 2000);
        });


        // поло
        $('.top-section__item:nth-child(3) a').click(() => {
            $('html, body').animate({
                scrollTop: $('.polo-section__container').offset().top - 69
            }, 2000);
        });

        // свитшоты
        $('.top-section__item:nth-child(4) a').click(() => {
            $('html, body').animate({
                scrollTop: $('.switshots-section__container').offset().top - 69
            }, 2000);
        });


        // толстовки
        $('.top-section__item:nth-child(5) a').click(() => {
            $('html, body').animate({
                scrollTop: $('.wears-section__container').offset().top - 69
            }, 2000);
        });


        // трусы
        $('.top-section__item:nth-child(6) a').click(() => {
            $('html, body').animate({
                scrollTop: $('.shorts-section__container').offset().top - 69
            }, 2000);
        });

    });
}