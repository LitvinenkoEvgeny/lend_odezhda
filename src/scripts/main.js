import $ from "jquery";

import inputCursor from "./inputValue";
import scrollLogic from "./scrollingLogic";
import myScript from "./myScript";
import stickyHeader from "./stickyHeader";
import addModal from "./modals";

$(document).ready(function() {
    scrollLogic();
    
    inputCursor('.director-connect form');
    inputCursor('.custom-section form');
    inputCursor('.footer form');

    addModal('.header__buttons a:last-child', 'div.modal-havent-time');
    inputCursor('.modal-havent-time__form');


    // карточка товара
    addModal('section ul li:not(.top-section__item)', '.modal-card');
    inputCursor('.modal-card__form');
});
