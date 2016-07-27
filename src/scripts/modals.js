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
            // backgroundImage: 'url(images/overlay.png)',
            // backgroundRepeat: 'repeat',
            // backgroundPosition: '50% 0',
            opacity: .75
        }
    }
}

export default function (clickElemSelector, modalBoxSelector) {
    const $elem = $(clickElemSelector);
    const $modal = $(modalBoxSelector);
    const $closeBtn = $modal.children('.close');

    $elem.on('click', () => {
        $modal.arcticmodal(modalSettings);
        return false;
    });

    $closeBtn.on('click', () => {
        $modal.arcticmodal('close');
    });
}