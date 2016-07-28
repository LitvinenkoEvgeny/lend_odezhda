import $ from "jquery";
let artcticmodal = require("articmodal/jquery.arcticmodal-0.3.min.js");
import "articmodal/jquery.arcticmodal-0.3.css";


$.fn.extend(
    artcticmodal
);

const modalSettings = {
    overlay: {
        css: {
            backgroundColor: '#fff',
            opacity: .75
        }
    }
}

export default function (clickElemSelector, modalBoxSelector) {
    const $elem = $(clickElemSelector);
    const $modal = $(modalBoxSelector);
    const $closeBtn = $modal.children('.close');

    $elem.on('click', (e) => {
        $modal.arcticmodal(modalSettings);

        if(modalBoxSelector === '.modal-card'){
            let $target = $(e.currentTarget);
            let startImg = $('img', $target);
            let link = $target.data('link');
            let modalOptions = {
                $target,
                $modal,
                startImg,
                link
            };

            modalCardInit(modalOptions);
        }

        return false;
    });

    $closeBtn.on('click', () => {
        $modal.arcticmodal('close');
    });

}

function modalCardInit (modalOptions) {
    let {$target, startImg, link, $modal} = modalOptions;

    if(link){
        generateHtml(modalOptions);
    }
}

function generateHtml (modalOptions) {
    let {$target, startImg, link, $modal} = modalOptions,
    item;

    $.get(link, success => {
        let itemName = $('div p:nth-child(1)', $target).text().trim();
        item = findItem(itemName, success)[0];
        createHtml(item);
    });

    function findItem (name, items) {
        return items.items.filter(i => {
            return i.name === name;
        });
    };

    function createHtml (item) {
        let $modalImg = $('.modal-card__img', $modal);
        let $modalColors = $('.modal-card__image-colors ul', $modal);
        let $modalSizes = $('.modal-card__item-sizes ul', $modal);
        let $type = $('.modal-card__type span span', $modal);
        let $sostav = $('.modal-card__sostav span span', $modal);
        let $plotnost = $('.modal-card__plotnost span span', $modal);
        let $thead = $('.modal-card__table thead tr', $modal);
        let $tbody = $('.modal-card__table tbody tr', $modal);

        $modalColors.html('');
        $modalSizes.html('');
        $modalSizes.append(`<li class="modal-card__item-size modal-card__item-size--first"><span>Размеры:</span></li>`);
        $thead.html('');
        $tbody.html('');
              

        $modalImg.attr('src', $(startImg).attr('src'));
        $('.modal-card__item-name', $modal).text(item.name);


        for(let c of item.colors){
            let key = Object.keys(c)[0];
            let value = c[key];
            $modalColors.append(`<li class="modal-card__image-color modal-card__image-color--${key}" data-image="${value}"></li>`);
        };

        for(let size of item.sizes){
            $modalSizes.append(`<li class="modal-card__item-size">${size}</li>`);
        };

        $type.html(item.type);
        $sostav.html(item.sostav);
        $plotnost.html(item.plotnost);


        for(let key of Object.keys(item.price)){
            $thead.append(`<td>${key}</td>`);
            $tbody.append(`<td>${item.price[key]}</td>`);
        };


        $modalColors.children('li').on("click", e => {
            let li = $(e.currentTarget);
            $modalImg.attr('src', li.data('image'));
        });
    }
}
