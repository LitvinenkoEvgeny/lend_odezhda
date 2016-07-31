import $ from "jquery";
let visible = require('visible-element')($);

$(document).ready(function() {
  const $animation_elements = $('.tshirt-section__header, .footbalTshirt-section__header, .polo-section__header, .switshots-section__header, .shorts-section__header, .wears-section__header');
  const $window = $(window);
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');


    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        const $before = $('div:first-child', $element);
        const $after = $('div:last-child', $element);

        //check to see if this current container is within viewport
        if (isScrolledIntoView($before)) {
            $before.addClass('animated zoomIn');
            $after.addClass('animated zoomIn');

        } else {
            $before.removeClass('animated zoomIn');
            $after.removeClass('animated zoomIn');
        }
      });
    }

    function elementInViewport2(el) {
      var top = el.offsetTop;
      var left = el.offsetLeft;
      var width = el.offsetWidth;
      var height = el.offsetHeight;

      while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
      }

      console.log(
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
        );
      return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
      );
    }

});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}