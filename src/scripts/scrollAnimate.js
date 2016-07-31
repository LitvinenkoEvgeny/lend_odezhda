import $ from "jquery";

$(document).ready(function() {
  const $window = $(window);
  const $animateElems = $('.top-section');
  
  let offsetFromTop;
  $window.on('scroll resize', (e) => {
    offsetFromTop = window.pageYOffset;
    if(offsetFromTop === $animateElems.offset().top){
      console.log(`here`);
    }
  })
});
//   const $animation_elements = $('.top-section');
//   const $window = $(window);
//   $window.on('scroll resize', check_if_in_view);
//   $window.trigger('scroll');


//     function check_if_in_view() {
//       var window_height = $window.height();
//       var window_top_position = $window.scrollTop();
//       var window_bottom_position = (window_top_position + window_height);

//       $.each($animation_elements, function() {
//         var $element = $(this);
//         var element_height = $element.outerHeight();
//         var element_top_position = $element.offset().top;
//         var element_bottom_position = (element_top_position + element_height);
//         const $animatedItems = $('li', $element);

//         //check to see if this current container is within viewport
//         if (isScrolledIntoView($element)) {
//             let delay = 150;
//             setTimeout(() => {
//                 $animatedItems.each((index, item) => {
//                     delay += 100;
//                     setTimeout(() => {
//                         const $item = $(item);
//                         $item.addClass('animated zoomIn');
//                     }, delay);
//                 });
//             }, 150);
//             // $element.addClass('animated zoomIn');

//         } else {
//             $animatedItems.each((index, item) => {
//                 const $item = $(item);
//                 $item.removeClass('animated zoomIn');
//             });
//         }
//       });
//     }

// });
// function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }