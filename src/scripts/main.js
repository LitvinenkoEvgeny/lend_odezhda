import $ from "jquery";

import inputCursor from "./inputValue";
import scrollLogic from "./scrollingLogic";
import navScrollLogic from './navScrollingLogic';
import myScript from "./myScript";
import stickyHeader from "./stickyHeader";
import addModal from "./modals";
import scrollAnimate from "./scrollAnimate";
import sectionScrollAnimate from "./sectionScrollAnimate";




$(document).ready(function () {
  stickyHeader();
  scrollLogic();
  navScrollLogic();

  inputCursor('.director-connect form');
  inputCursor('.custom-section form');
  inputCursor('.footer form');

  addModal('.header__buttons a:last-child', 'div.modal-havent-time');
  inputCursor('.modal-havent-time__form');


  // карточка товара
  addModal('section ul li:not(.top-section__item)', '.modal-card');
  inputCursor('.modal-card__form');

  // оставить заявку
  addModal('.iwant', '.modal-contact');
  inputCursor('.modal-contact__form');

  addModal('.director-connect__btn', '.modal-thank-you');
  addModal('.custom-section__btn', '.modal-thank-you');
  addModal('.modal-contact__btn', '.modal-thank-you');
  addModal('.footer__btn', '.modal-thank-you');
  addModal('.modal-card__btn', '.modal-thank-you');
});
