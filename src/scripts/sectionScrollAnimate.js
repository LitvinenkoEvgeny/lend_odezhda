import $ from "jquery";

$(document).ready(function () {
  const $animation_elements = $('.scroll');
  const $window = $(window);

  function checkInView() {
    const windowHeight = $window.height();
    const windowInnerHeight = window.innerHeight;
    const windowTopPosition = $window.scrollTop();
    const windowBottomPosition = (windowTopPosition + windowInnerHeight);

    $.each($animation_elements, (index, elem) => {
      elem = $(elem);
      const elemHeight = elem.height();
      const elemTopPosition = elem.offset().top;
      const elemBottomPosition = (elemTopPosition + elemHeight);

      let delay = 100;
      if (elemTopPosition >= windowTopPosition + elemHeight &&
        elemBottomPosition <= windowBottomPosition + elemHeight) {
        if (elem.hasClass('animated zoomIn')) {
          return;
        }
        setTimeout(() => {
          elem.addClass('animated zoomIn');
        }, delay);
        delay += 400;
      } else {
        elem.removeClass('animated zoomIn');
      }
    });
  }

  $window.on('scroll resize', checkInView)
});
