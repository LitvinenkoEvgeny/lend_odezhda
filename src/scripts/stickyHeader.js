import $ from "jquery";
// import sticky from "sticky";


// export default () => $(".nav__wrp").sticky({topSpacing: 0});

export default () => {
  const $window = $(window);
  const nav = document.querySelector('.nav__wrp');
  const $nav = $('.nav__wrp');
  const navOffset = nav.offsetTop;
  $window.on('scroll resize', () => {
    const windowOffset = window.pageYOffset;
    if(windowOffset > navOffset){
      $nav.css({position: 'fixed', top: 0, width: '100%'});
    } else {
      $nav.css({position: 'initial'});
    }
  });
  $window.trigger('scroll');
}