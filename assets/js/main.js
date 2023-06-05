// new WOW().init();
// AOS.init();

$(function () {
  mainNav();
  dynamicBackground();
  slickInit();
  modalVideo();
});

$.exists = function (selector) {
  return $(selector).length > 0;
};

function mainNav() {
  $(".cs_nav").append('<span class="cs_menu_toggle"><span></span></span>');
  $(".menu_item_has_children").append(
    '<span class="cs_menu_dropdown_toggle"></span>'
  );
  $(".cs_menu_toggle").on("click", function () {
    $(this)
      .toggleClass("cs_toggle_active")
      .siblings(".cs_nav_list")
      .slideToggle();
  });
  $(".cs_menu_dropdown_toggle").on("click", function () {
    $(this).toggleClass("active").siblings("ul").slideToggle();
    $(this).parent().toggleClass("active");
  });
}

/*--------------------------------------------------------------
  #. Dynamic Background
--------------------------------------------------------------*/
function dynamicBackground() {
  $("[data-src]").each(function () {
    var src = $(this).attr("data-src");
    $(this).css({
      "background-image": "url(" + src + ")",
    });
  });
}

/*--------------------------------------------------------------
  #. Slick Slider
--------------------------------------------------------------*/

function slickInit() {
  $(".cs_slider").each(function () {
    // Slick Variable
    var $ts = $(this).find(".slick_container");
    var $slickActive = $(this).find(".slick_wrapper");

    // Auto Play
    var autoPlayVar = parseInt($ts.attr("data-autoplay"), 10);
    // Auto Play Time Out
    var autoplaySpdVar = 3000;
    if (autoPlayVar > 1) {
      autoplaySpdVar = autoPlayVar;
      autoPlayVar = 1;
    }
    // Slide Change Speed
    var speedVar = parseInt($ts.attr("data-speed"), 10);
    // Slider Loop
    var loopVar = Boolean(parseInt($ts.attr("data-loop"), 10));
    // Slider Center
    var centerVar = Boolean(parseInt($ts.attr("data-center"), 10));
    // Pagination
    var paginaiton = $(this).children().hasClass("pagination");
    // Slide Per View
    var slidesPerView = $ts.attr("data-slides-per-view");
    if (slidesPerView == 1) {
      slidesPerView = 1;
    }
    if (slidesPerView == "responsive") {
      var slidesPerView = parseInt($ts.attr("data-add-slides"), 10);
      var lgPoint = parseInt($ts.attr("data-lg-slides"), 10);
      var mdPoint = parseInt($ts.attr("data-md-slides"), 10);
      var smPoint = parseInt($ts.attr("data-sm-slides"), 10);
      var xsPoing = parseInt($ts.attr("data-xs-slides"), 10);
    }
    // Fade Slider
    var fadeVar = parseInt($($ts).attr("data-fade-slide"));
    fadeVar === 1 ? (fadeVar = true) : (fadeVar = false);

    // Slick Active Code
    $slickActive.slick({
      infinite: true,
      autoplay: autoPlayVar,
      dots: paginaiton,
      centerPadding: "0",
      speed: speedVar,
      infinite: loopVar,
      autoplaySpeed: autoplaySpdVar,
      centerMode: centerVar,
      // fade: fadeVar,
      prevArrow: $(this).find(".slick-arrow-left"),
      nextArrow: $(this).find(".slick-arrow-right"),
      appendDots: $(this).find(".pagination"),
      slidesToShow: slidesPerView,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: lgPoint,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: mdPoint,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: smPoint,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: xsPoing,
          },
        },
      ],
    });
  });
}

//video play pupup
function modalVideo() {
  $(document).on("click", ".cs_video_open", function (e) {
    e.preventDefault();
    var video = $(this).attr("href");
    $(".cs_video_popup_container iframe").attr("src", video);
    $(".cs_video_popup").addClass("active");
  });
  $(".cs_video_popup_close, .cs_video_popup_layer").on("click", function (e) {
    $(".cs_video_popup").removeClass("active");
    $("html").removeClass("overflow_hidden");
    $(".cs_video_popup_container iframe").attr("src", "about:blank");
    e.preventDefault();
  });
}
modalVideo();
