import $ from "jquery";

export default function () {
    const $directorConnectForm = $('.director-connect form');
    const $directorConnectInput = $directorConnectForm.children('input');

    $directorConnectInput.on('focus', () => {
        const actualValue = $directorConnectInput.val();
        if(actualValue === 'введите ваш телефон') {
            $directorConnectInput.val('');
        }
    });
    
    $directorConnectInput.on('blur', () => {
        const actualValue = $directorConnectInput.val();
        if(actualValue === '') {
            $directorConnectInput.val('введите ваш телефон');
        }
    });
};