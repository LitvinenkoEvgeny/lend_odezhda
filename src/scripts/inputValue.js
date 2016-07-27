import $ from "jquery";

export default function (selector) {
    const $form = $(selector);
    const $input = $form.children('input');

    let valueCache = '';

    $input.on('focus', () => {
        const actualValue = valueCache = $input.val();
        if(actualValue === 'введите ваш телефон' || actualValue === 'введите ваш email') {
            $input.val('');
        }
    });
    
    $input.on('blur', () => {
        const actualValue = $input.val();
        if(actualValue === '') {
            $input.val(valueCache);
        }
    });
};
