var $ = require('jquery');
var pic = ["main_bg.png", "main_bg_1.png", "main_bg_2.png"];

function Slider(selectorStr) {
  this.slides = [];
  this.selector = selectorStr;
  this.slidesLen = null;
  this.sliderWidth = null;
  this.sliderImages = [];
  
  
  this.init();


  var startPoint = {};
  var nowPoint;

  
  $(".slide").on('touchstart', function (event) {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();

    startPoint.x = event.changedTouches[0].pageX;

  });

  $(".slide").on('touchmove', function (event) {
    event.preventDefault();
    event.stopPropagation();

    var otk = {};
    nowPoint = event.changedTouches[0];
    otk.x = nowPoint.pageX - startPoint.x;
    $(".slider").prop(marginLeft, otk.x)
  });

  $(".slide").on('touchend', function (event) {

    nowPoint = event.changedTouches[0];
    var xAbs = Math.abs(startPoint.x - nowPoint.pageX);
    if (xAbs > 200 ){
      if (nowPoint.pageX < startPoint.x) {
        $(".slider").animate({marginLeft: "-" + this.slideWidth + "px"}, 1000, callbackRight());
      }
    }
    else {
      $(".slider").animate({marginLeft: this.slideWidth + "px"}, 1000, callbackLeft());
    }

  });


  function callbackRight() {
    var srcIm = $(".slides").last().child("img").attr("src");
    index = pic.indexOf(srcIm);
    if (index == pic.length - 1) index = 0;
    $(".slides").first().prop({backgroundImage: "url(../image/" + pic[index + 1] + ")"});
    $(".slides").first().append(".slider");
  }

  function callbackLeft() {
    var srcIm = $(".slides").first().child("img").attr("src");
    index = pic.indexOf(srcIm);
    if (index == 0) index = pic.length - 1;
    $(".slides").last().prop({backgroundImage: "url(../image/" + pic[index - 1] + ")"});
    $(".slides").last().prepend(".slider");

  }
}


Slider.prototype.init = function () {
  var $slider = $(this.selector);
  
  this.slides = $slider.children('div');
  

  this.slidesLen = this.slides.length;
  this.sliderWidth = this.slides.length * $(".center").width();

  if (!$slider) throw new Error("не правильный селектор");
  $slider.width(this.sliderWidth);


  this.slides.prop("width", this.sliderWidth / this.slidesLen + "px");

  this.createButtons();

  this.slides.first().prop({backgroundImage: "url(../image/main_bg.png)"});
  this.slides.last().prop({backgroundImage: "url(../image/main_bg_2.png)"});
  this.slides.first().next().prop({backgroundImage: "url(../image/main_bg_1.png)"});


};
Slider.prototype.createButtons = function () {


  pic.forEach(function () {
    $(".slider-wrapper").append('<div class="slider__bullet"></div>');
  });

  $(".slider-wrapper").children('.slider__bullet')
    .wrapAll('<div class="slider__bullets"></div>');

  var $bullets = $(".slider__bullet");
  $bullets.click(function () {
    var prevIndex = 0;
    $bullets.each(function () {
      if ($(this).hasClass("slider__bullet--active")) return;
      prevIndex++;
    });

    removeActive("slider__bullet--active", ".slider__bullet");
    $(this).addClass('slider__bullet--active');
    var btnIndex = $(this).index();
    if (btnIndex > prevIndex) {
      $(".slides").last().prop({backgroundImage: "url(../image/" + pic[btnIndex] + ")"});
      $(".slider").animate({marginLeft: this.slideWidth + "px"}, 1000, buttonCallbackRight());
    }
    else {
      $(".slides").first().prop({backgroundImage: "url(../image/" + pic[btnIndex] + ")"});
      $(".slider").animate({marginLeft: "-" + this.slideWidth + "px"}, 1000, buttonCallbackLeft());
    }

    function removeActive(classForRemove, selector) {
      $(selector).removeClass(classForRemove);
    }

    function buttonCallbackRight() {
      if (btnIndex == pic.length - 1) {
        $(".slides").first().prop({backgroundImage: "url(../image/" + pic[0] + ")"});
      }
      else {
        $(".slides").first().prop({backgroundImage: "url(../image/" + pic[btnIndex + 1] + ")"});
      }
      $(".slides").first().append(".slider");
      $(".slides").first().prop({backgroundImage: "url(../image/" + pic[btnIndex - 1] + ")"});
    };

    function buttonCallbackLeft() {
      if (btnIndex == 0) {
        $(".slides").last().prop({backgroundImage: "url(../image/" + pic[pic.length - 1] + ")"});
      }
      else {
        $(".slides").last().prop({backgroundImage: "url(../image/" + pic[btnIndex - 1] + ")"});
      }
      $(".slides").last().prepend(".slider");
      $(".slides").last().prop({backgroundImage: "url(../image/" + pic[btnIndex + 1] + ")"});
    }

  });

  function removeActive(classForRemove, selector) {
    $(selector).removeClass(classForRemove);
  }


};


export default Slider;