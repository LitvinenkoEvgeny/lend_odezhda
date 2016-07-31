// import $ from "jquery";
//
//
// $(document).ready(function() {
//     var mobile = navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i);
//
//     if(mobile != null) {
//         $('html').css('width', window.innerWidth + 'px');
//     } else {
//         $(".scroll").each(function() {
//             var block = $(this);
//             $(window).scroll(function() {
//                 var top = block.offset().top;
//                 var bottom = block.height()+top;
//                 top = top - $(window).height();
//                 var scroll_top = $(this).scrollTop();
//                 var block_center = block.offset().top + (block.height() / 2);
//                 var screen_center = scroll_top + ($(window).height() / 2);
//                 if(block.height() < $(window).height()) {
//                     if ((scroll_top > (top-(block.height()/2))) && ((scroll_top < bottom+(block.height()/2))) && (scroll_top + $(window).height() > (bottom-(block.height()/2))) && (scroll_top < (block.offset().top+(block.height()/2)))) {
//                         if (!block.hasClass("zoomIn animated")) {
//                             block.addClass("zoomIn animated");
//                         }
//                     } else {
//                         if((block.offset().top + block.height() < scroll_top) || (block.offset().top > (scroll_top + $(window).height()))) {
//                             block.removeClass("zoomIn animated");
//                         }
//                     }
//                 } else {
//                     if ((scroll_top > top) && (scroll_top < bottom) && (Math.abs(screen_center - block_center) < (block.height() / 4))) {
//                         if (!block.hasClass("zoomIn animated")) {
//                             block.addClass("zoomIn animated");
//                         }
//                     } else {
//                         if((block.offset().top + block.height() < scroll_top) || (block.offset().top > (scroll_top + $(window).height()))) {
//                             block.removeClass("zoomIn animated");
//                         }
//                     }
//                 }
//             });
//         });
//     }
//
// });
//
// function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
//
//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }