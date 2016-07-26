exports.setFullHeight = function() {
    var fullHeight = getWindowHeight();
    var args = [].slice.call(arguments);

    args.forEach(function(selector) {
        var element = [].slice.call(document.querySelectorAll(selector));
        element.forEach(function(singleElement) {
            singleElement.style.height = fullHeight + "px";

        });



    });
}

function getWindowHeight() {
    return document.body.clientHeight;
}