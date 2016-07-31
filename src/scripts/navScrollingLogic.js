export default function () {
  $(document).ready(function () {
    
    
    // главная
    $('.nav__item:nth-child(1)').click(() => {
      $('html, body').animate({
        scrollTop: $('header').offset().top
      }, 2000);
      return false;
    });

    // каталог
    $('.nav__item:nth-child(2)').click(() => {
      $('html, body').animate({
        scrollTop: $('.top-section__container').offset().top - 69
      }, 2000);
      return false;
    });

    // под заказ
    $('.nav__item:nth-child(3)').click(() => {
      $('html, body').animate({
        scrollTop: $('.custom-section__container').offset().top - 69
      }, 2000);
      return false;
    });

    // ваш доход
    $('.nav__item:nth-child(4)').click(() => {
      $('html, body').animate({
        scrollTop: $('.page2__header').offset().top - 69
      }, 2000);
      return false;
    });

    // производство
    $('.nav__item:nth-child(5)').click(() => {
      $('html, body').animate({
        scrollTop: $('.create-process__header').offset().top - 69
      }, 2000);
      return false;
    });
    
    // производство
    $('.nav__item:nth-child(6)').click(() => {
      $('html, body').animate({
        scrollTop: $('.footer__container').offset().top - 69
      }, 2000);
      return false;
    });





  });
};
