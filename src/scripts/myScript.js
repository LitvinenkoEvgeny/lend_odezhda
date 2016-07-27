import $ from "jquery";
let slider = require('jquery-ui/ui/widgets/slider');

$.fn.extend(
    slider
)

// new WOW().init();

$(document).ready(function() {
    $(".checkbox").on("click", "p", function() {
        $(this).toggleClass("checked");
    });
    $(".radiobtn").on("click", "p", function() {
        $(".radiobtn p").removeClass("checked");
        $(this).toggleClass("checked");
        calc();
    });
    $("#slider-1").slider({
        range: "min",
        step: 1000,
        min: 50000,
        max: 500000,
        value: 250000,
        animate: true,
        slide: function(event, ui) {
            $("#slider-val-1").html("&gt; " + space($("#slider-1").slider("option", "value")) + " р. ");
            $("#slider-result1").html(space($("#slider-1").slider("option", "value")));
            // console.log(event.offsetX);
            // console.log($(this).width())
            calc();
        }
    });
    $("#slider-2").slider({
        range: "min",
        step: 1000,
        min: 0,
        max: 150000,
        value: 20000,
        animate: true,
        slide: function(event, ui) {
            $("#slider-val-2").html("&gt; " + space($("#slider-2").slider("option", "value")) + " р.");
            calc();
        }
    });
    $("#slider-3").slider({
        range: "min",
        step: 1000,
        min: 10000,
        max: 2000000,
        value: 1134000,
        animate: true,
        slide: function(event, ui) {
            $("#slider-val-3").html(space($("#slider-3").slider("option", "value")));
        }
    });
});

function calc() {
    var x = $("#slider-1").slider("option", "value"),
        y = $("#slider-2").slider("option", "value");
    var p = $(".radiobtn p.checked").attr("data-val");
    var result1 = x;
    var result2 = Math.round((x + p * x) - y);
    var result3 = Math.round((x + p * x) * 12 - y * 12);
    var height_pr = (result1 * 100) / 500000;
    var height_px = ((height_pr * 206) / 100) * 0.5;
    if (height_px < 8) {
        height_px = 8
    };
    $("#coins-1").css("height", height_px);
    height_pr = (result2 * 100) / 1250000;
    height_px = ((height_pr * 206) / 100);
    if (height_px < 0) {
        height_px = 0
    };
    if (height_px > 206) {
        height_px = 206
    };
    $("#coins-2").css("height", height_px);
    $("#slider-result2").html(space(result2));
    $("#slider-result3").html(space(result3) + " руб.");
}

function space(num) {
    var numString = String(num),
        numLength = numString.length,
        tri = (numLength - (numLength % 3)) / 3,
        sym;
    for (var i = 1; i <= tri; i++) {
        sym = (3 * i) + (i - 1);
        numString = numString.slice(0, -sym) + " " + numString.slice(-sym);
    }
    return numString;
}
