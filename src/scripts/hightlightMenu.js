import $ from 'jquery';

export default () => {
  const $forHighlight = $('.js-highlightNav');
  const $window = $(window);

  function checkInView() {
    const $navItems = $('li.nav__item');
    const navItems = [...document.querySelectorAll('li.nav__item')];

    const elemAtCenter = $(document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2));
    const parent = elemAtCenter.parents('.js-highlightNav');
    if (parent) {
      $navItems.removeClass('active');
      if(!parent.data()){
        return;
      }
      const elemIndexData = parent.data().highlightindex;
      navItems[elemIndexData].classList.add('active');
    }


    // console.log(window.innerWidth / 2, window.innerHeight /2);

    // $.each($forHighlight, (index, elem) => {
    // elem = $(elem);
    // const elemHeight = elem.height();
    // const elemTopPosition = elem.offset().top;
    // const elemBottomPosition = (elemTopPosition + elemHeight);
    //
    // if ((elemTopPosition >= windowTopPosition + elemHeight &&
    //   elemBottomPosition <= windowBottomPosition + elemHeight) ||
    //   (elemTopPosition <= windowTopPosition && 
    //   elemBottomPosition >= windowBottomPosition) ||
    //   (elemTopPosition <= windowTopPosition) && 
    //   (elemBottomPosition <= windowBottomPosition)
    // ) {
    //   const elemIndexData = elem.data().highlightindex;
    //   $navItems.removeClass('active');
    //   console.log(navItems);
    //   console.log(elemIndexData);
    //   console.log(navItems[elemIndexData]);
    //   navItems[elemIndexData].classList.add('active');
    //  
    // } else {
    // }
    // });
  }

  $window.on('scroll resize', checkInView)
};