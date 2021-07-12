// client slider
var swiper = new Swiper('.swiper-container.clients-slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 14,
  centeredSlides: true,
    navigation: {
      nextEl: '.our-clients .swiper-button-next',
      prevEl: '.our-clients .swiper-button-prev',
    },

    breakpoints: {
        640: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 150,
        },
      }
});


// news slider
var swiperNews = new Swiper('.swiper-container.news-slider', {
  loop: false,
  slidesPerView: 1,
    navigation: {
      nextEl: '.our-news .swiper-button-next',
      prevEl: '.our-news .swiper-button-prev',
    },

    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }
});


// var swiperNews = new Swiper('.third-screen__wrapper', {
//   loop: false,
//   slidesPerView: 1,
//     navigation: {
//       nextEl: '.third-screen__wrapper .swiper-button-next',
//       prevEl: '.third-screen__wrapper .swiper-button-prev',
//     },

// });

var textArray = [
    '1',
    '2',
    '3',
    '4',
    '5'
];


var swiper = new Swiper('.third-screen__wrapper', {
  onlyExternal: true,
  grabCursor: false,
  preventInteractionOnTransition: true,
  allowTouchMove:false,
  loop: true,
  autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

  navigation: {
        nextEl: '.third-screen__arr.swiper-button-next',
        prevEl: '.third-screen__arr.swiper-button-prev',
      },
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + textArray[index] + '</span>';
        },
    },

});





// main slider
var swiperFirst = new Swiper('.first-screen__slider', {
  loop: false,
  slidesPerView: 1,
    pagination: {
        el: ' .first-screen .swiper-pagination',
        dynamicBullets: true,
    },

});



var swiperMod = new Swiper('.sub-menu-models.swiper-container', {
  loop: false,
  slidesPerView: 5,
  navigation: {
      nextEl: ' .sub-menu-models .swiper-button-next',
      prevEl: ' .sub-menu-models .swiper-button-prev',
    },
});


// video slider


var mySwiper = undefined;
function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth < 1200 && mySwiper == undefined) {            
        mySwiper = new Swiper('.video-review__slider', {            
          loop: false,
          slidesPerView: 1,
          navigation: {
              nextEl: '.video-review__wrapper .swiper-button-next',
              prevEl: '.video-review__wrapper .swiper-button-prev',
            },
    });
    } else if (screenWidth > 1199 && mySwiper != undefined) {
        mySwiper.destroy(true,false);
        mySwiper = undefined;           
    }        
}


var swiperFour = new Swiper('.video-review__slider-four', {
  loop: false,
  slidesPerView: 1,
  navigation: {
    nextEl: '.video-review__wrapper .swiper-button-next',
    prevEl: '.video-review__wrapper .swiper-button-prev',
  },
});

//Swiper plugin initialization
initSwiper();

//Swiper plugin initialization on window resize
$(window).on('resize', function(){
    initSwiper();        
});





// function initSwiper() { 
//   var screenWidth = $(window).outerWidth();
//   if(screenWidth < 1200) {
//     var swiperVideo = new Swiper('.video-review__slider', {
//       loop: false,
//       slidesPerView: 1,
//       navigation: {
//           nextEl: '.video-review__wrapper .swiper-button-next',
//           prevEl: '.video-review__wrapper .swiper-button-prev',
//         },
//     });
//   }

//   else {
//     swiperVideo.destroy();
//   }
// }

// initSwiper();


//  $(window).resize(function() {
//     initSwiper();
//   });


//3. Header functions. Menu, search block, mobile menu
jQuery(document).ready(function() {

  var headerFullHeight = jQuery('header.header').height();
  
  //Mobile menu
  jQuery(".menu-btn").click(function(evt) {
    if(jQuery(window).width() < 1200) {
      evt.preventDefault();

      jQuery(this).parent('.menu').toggleClass('menu--active');
      jQuery(this).siblings('.menu-container').toggleClass('menu-container--active');
      jQuery('body').toggleClass('shadowed-second');
    }
  });
  jQuery(".menu-item-has-children > a").click(function(evt) {
    if(jQuery(window).width() < 1200) {
      evt.preventDefault();

      jQuery(this).parent('.menu-item-has-children').toggleClass('menu-item--sub--active');
      jQuery(this).siblings('ul.sub-menu').slideToggle();
      $(this).toggleClass('active');
    }
  });
  jQuery(window).scroll(function(event) {

        var scrolled = jQuery(window).scrollTop();

    if(jQuery(window).width() >= 1200) {

        var headerTopHeight = jQuery('.header__top').height(),
          headerBottomHeight = jQuery('.header__bottom').height();

        if (scrolled >= headerTopHeight) {
          jQuery('header.header').addClass('header--scrolled');
          jQuery('main').attr('style', 'margin-top:'+headerFullHeight+'px');
        } else {
          jQuery('header.header').removeClass('header--scrolled');
          jQuery('main').attr('style', 'margin-top:0');
        }

    }

        if(scrolled >= 500) {
            jQuery('div.scroll-top').show();
        } else {
            jQuery('div.scroll-top').hide();
        }

        
  });

  });


$('.header__top-consult  span').click(function(e) {
  e.preventDefault();
  $('.header__top-consult  ul').toggleClass('active');

})

jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".header__top-consult"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.header__top-consult  ul').removeClass('active'); // скрываем его
    }
  });
});



$('.header__top-consult  ul li').click(function(e) {
  e.preventDefault();
  var text = $(this).text();
  var textFinish = text.substr(0, 2);
  $('.header__top-consult  ul').removeClass('active');
  $('.header__top-consult  span').text(textFinish);
  $('.header__top-consult  ul li').removeClass('active');
  $(this).addClass('active');

})


$('.center input').change(function() {
    if ($(this).is(':checked')){
      $('.news-container__item.promo-item').css('display', 'none');
      var swiperNews = new Swiper('.swiper-container.news-slider', {
  loop: false,
  slidesPerView: 1,
    navigation: {
      nextEl: '.our-news .swiper-button-next',
      prevEl: '.our-news .swiper-button-prev',
    },

    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }
});
  } else {
    $('.news-container__item.promo-item').css('display', 'flex');
    var swiperNews = new Swiper('.swiper-container.news-slider', {
  loop: false,
  slidesPerView: 1,
    navigation: {
      nextEl: '.our-news .swiper-button-next',
      prevEl: '.our-news .swiper-button-prev',
    },

    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }
});
  }
})


$('.map-mobile__description-item > span').click(function(e) {
  e.preventDefault();
  $(this).next('div').slideToggle();
  $(this).toggleClass('active');
})


var swiper = new Swiper('.first-screen__desktop', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },

        
      pagination: {
        el: ' .first-screen__desktop .swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass, index, total) {
      return '<span class="' + currentClass + '">  '+ index +' </span>' +
            '  ' +
            '<span class="' + totalClass + '"> ' + total +' </span>';
      },
      },
      navigation: {
        nextEl: '.first-screen__desktop .swiper-button-next',
        prevEl: '.first-screen__desktop .swiper-button-prev',
      },

    
    });





$(".map-wrapper").offset();
console.log($(".map-wrapper").offset());



$('.world-map__popup > button').click(function () {
  $(this).closest('.world-map__popup').css('display', 'none');
  $('.jvectormap-marker.jvectormap-element').css('opacity', '1');
  let boxes = document.querySelectorAll(".world-map__popup");
  boxes.forEach(elem => {
    elem.style.display = 'none';
});
});







// $(document).ready(function() {
//   $('.swiper-pagination-2 span.swiper-pagination-bullet-active').removeClass('swiper-pagination-bullet-active');
//   $('.swiper-pagination-2').find('span:first-of-type').addClass('swiper-pagination-bullet-active');
// })



    $('.possibilities-model__list ul li').click(function(evt){
    evt.preventDefault();
    $('.possibilities-model__list ul li').removeClass("active");
    $(this).addClass("active");
    $('.possibilities-model__item').hide();
    $("[data-role='" + $(this).attr('data-name') + "']").fadeIn();

});

// смена цвета модели
$('.model_color_krug').click(function(e) {
  $('.model_color_krug').removeClass('active');
  $(this).addClass('active');
  $('.poz_vezd').fadeOut();
  $( '#' + $(this).attr('data-color')).fadeIn();

})


$('.config__third-good--colour .model_color_krug').click(function(e) {
  let color = $(this).attr('data-color');
  console.log(color);
  $('.model_color_krug').removeClass('active');
  $(this).addClass('active');
  $('.config__third-good img').hide();
  $('.config__third-good img[data-value="'+color+'"]').fadeIn();

})


// переключение новости/акции
$('.news-main__menu ul li').click(function(e) {
  e.preventDefault();
  $('.news-main__menu ul li').removeClass('active');
  $(this).addClass('active');

  $('.news-main__content').hide();
  $("#" + $(this).attr('data-name')).fadeIn();
})



// мобильная кнопка на странице новости/акции
$('.news-main__menu button').click(function(e) {
  e.preventDefault();
  $('.news-main__menu ul').toggleClass('active');
  $(this).toggleClass('active');
})

// демо-фильтрация по тегу на странице новости
$('.tags-container > a').click(function(e) {
  e.preventDefault();
  var text = $(this).text();
  $(this).closest('.tags-container').hide();
  $('.tags-container__search').fadeIn();
  $('.tags-container__search').css('display','flex');
  $('.tags-container__search--tag').text(text);
})


$('.tags-container__search--close').click(function(e) {
  $('.tags-container__search').hide();
  $('.tags-container').fadeIn();
})

// animation third-screen

$('.third-screen__wrapper .swiper-slide button').click(function(e) {
    e.preventDefault();


    var step = 'step_';
    var count = Number( $(this).attr("data-count") );

    if ( count >= 4 ) {
        count = 0;
        console.log(count);
    }



    if ( count == 0 ) {
      console.log(count);

        $('.third-screen__slide-content button').attr("data-count", "2" );
        $('.pulse-button__rings').each(function(e) {
            $(this).attr("class", "pulse-button__rings step_2");
        });
        $('.third-screen__wrapper .swiper-slide button').each(function(e) {
            $(this).attr("class", "step_2");
        });

        $('.third-screen__slide-img').each(function(e) {
            $(this).attr("class", "third-screen__slide-img step_2");
        });

    } else {
        $('.third-screen__slide-content button').attr("data-count", String( count + 1 ) );
        step += String( count + 1 );

        $('.pulse-button__rings').each(function(e) {
            $(this).attr("class", "pulse-button__rings " + step);
        });
        $('.third-screen__wrapper .swiper-slide button').each(function(e) {
            $(this).attr("class", step);
        });

        $('.third-screen__slide-img').each(function(e) {
            $(this).addClass(step);
        });
        console.log(count);
    }


})



$(".sub-menu")
.mouseover(function() {
         $(this).prev('a').addClass('active');    
})
.mouseout(function(){           
        $(this).prev('a').removeClass('active');
});


// kviz

$('.kviz-click').click(function(e) {
  e.preventDefault();
  $('.kviz-wrapper').fadeIn();
  $('body').addClass('shad');
})

$('#btn-1').click(function(e) {
  e.preventDefault();
  $('.kviz-wrapper__step-first').hide();
  $('.kviz-wrapper__step-second').fadeIn();
  
})





$('#btn-2').click(function(e) {
  e.preventDefault();
  $('.kviz-wrapper__step-second').hide();
  $('.kviz-wrapper__step-first').fadeIn();
})


$('#btn-3').click(function(e) {
  e.preventDefault();
  $('.kviz-wrapper__step-second').hide();
  $('.kviz-wrapper__step-third').fadeIn();
})


$('#btn-4').click(function(e) {
  e.preventDefault();
  $('.kviz-wrapper__step-third').hide();
  $('.kviz-wrapper__step-second').fadeIn();
})


$('#btn-5').click(function(e) {
  e.preventDefault();
  $('.kviz-wrapper__step-third').hide();
  $('.kviz-wrapper__step-fourth').fadeIn();
})


$('.kviz-wrapper > button').click(function(e) {
  e.preventDefault();
  $('.kviz-wrapper').hide();
  $('body').removeClass('shad');

})

$('.kviz-wrapper__step-third-container input').change(function() {
  if($('#city4').prop("checked")) {
    $('#change1').hide();
    $('#change2').fadeIn();

  }
})

$('.kviz-wrapper form').submit(function(e) {
  e.preventDefault();
  if($('#pol1').prop("checked")) {
    alert('ок')
  }

  else {
    $('.kviz-wrapper form .private-policy').addClass('error');
  }
})

$('#pol1').change(function() {
   $('.kviz-wrapper form .private-policy').removeClass('error');
})


// configurator page
$(function() {
  $('.menu-conf__wrapper li').click(function(evt) {
    if($('.menu-conf__wrapper li[data-name="choose_model"]').hasClass('active')) {
      $('.menu-conf__wrapper li').removeClass('complete');
      return;
    }

    if( $('.menu-conf__wrapper li[data-name="choose_complete"]').hasClass('active') && $(this).attr('data-name') == 'choose_conditions') {

     
      return;

    }
  evt.preventDefault();
  $('.menu-conf__wrapper li').removeClass("active");
  $(this).addClass("active");
  $(this).removeClass('complete');
  $(this).prev('li').addClass('complete');
  $('.configurator-element').hide();
  $("[data-role='" + $(this).attr('data-name') + "']").fadeIn();
  });
});

$('.config__price-list .price-list__main-item').click(function(e) {
  e.preventDefault();
  $('.configurator-element').hide();
  $('section[data-role="choose_complete"]').fadeIn();
  $('.menu-conf__wrapper ul li').removeClass('inactive');
  $('.menu-conf__wrapper li[data-name="choose_conditions"]').addClass('inactive');

  $('.menu-conf__wrapper li').removeClass("active");
  $('.menu-conf__wrapper li[data-name="choose_complete"]').addClass('active');
  $('.menu-conf__wrapper li[data-name="choose_model"]').addClass('complete');

})

$('.menu-conf__wrapper li[data-name="choose_model"]').click(function(e) {
  e.preventDefault();
  $('.menu-conf__wrapper li').addClass('inactive');
  $(this).removeClass('inactive');
})

$('.menu-conf__wrapper li[data-name="choose_model"]').click(function(e) {
  e.preventDefault();
  $('.menu-conf__wrapper li').removeClass('complete');
})

$('.menu-conf__wrapper li[data-name="choose_equipment"]').click(function(e) {
  e.preventDefault();
  $('.menu-conf__wrapper ul li').removeClass('inactive');
})



$('.menu-conf__wrapper li[data-name="choose_complete"]').click(function(e) {
  e.preventDefault();
  $('.menu-conf__wrapper li[data-name="choose_conditions"]').addClass('inactive');
})


// Кнопки вперед/назад
$('#complete-back').click(function(e) {
  e.preventDefault();
  $('section[data-role="choose_complete"]').hide();
  $('section[data-role="choose_model"]').fadeIn();

  $('.menu-conf__wrapper li').removeClass('complete');

  $('.menu-conf__wrapper li').removeClass('active');

  $('.menu-conf__wrapper li[data-name="choose_model"]').addClass('active');
})

// Кнопки вперед/назад
$('#complete-next').click(function(e) {
  e.preventDefault();
  $('section[data-role="choose_complete"]').hide();
  $('section[data-role="choose_equipment"]').fadeIn();
  $('.menu-conf__wrapper ul li').removeClass('inactive');

  $('.menu-conf__wrapper li').removeClass('complete');

  $('.menu-conf__wrapper li').removeClass('active');

  $('.menu-conf__wrapper li[data-name="choose_model"]').addClass('complete');
  $('.menu-conf__wrapper li[data-name="choose_complete"]').addClass('complete');

  $('.menu-conf__wrapper li[data-name="choose_equipment"]').addClass('active');
})


// Кнопки вперед/назад
$('#price-back').click(function(e) {
  e.preventDefault();
  $('section[data-role="choose_equipment"]').hide();
  $('section[data-role="choose_complete"]').fadeIn();

  $('.menu-conf__wrapper li').removeClass('complete');

  $('.menu-conf__wrapper li').removeClass('active');

  $('.menu-conf__wrapper li[data-name="choose_complete"]').addClass('active');
  $('.menu-conf__wrapper li[data-name="choose_model"]').addClass('complete');
})

// Кнопки вперед/назад
$('#price-next').click(function(e) {
  e.preventDefault();
  $('section[data-role="choose_equipment"]').hide();
  $('section[data-role="choose_conditions"]').fadeIn();

  $('.menu-conf__wrapper li').removeClass('complete');

  $('.menu-conf__wrapper li').removeClass('active');
  $('.menu-conf__wrapper ul li').removeClass('inactive');

  $('.menu-conf__wrapper li[data-name="choose_model"]').addClass('complete');
  $('.menu-conf__wrapper li[data-name="choose_complete"]').addClass('complete');
  $('.menu-conf__wrapper li[data-name="choose_equipment"]').addClass('complete');

  $('.menu-conf__wrapper li[data-name="choose_conditions"]').addClass('active');
})

function prettify(num) {
  var n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}


var totalPriceModel = Number($('.equipment__total span').attr('data-initial'));
 $('.config__third--total span i').text(prettify(totalPriceModel));
 //console.log(prettify(totalPriceModel));

 var add1 = Number($('.config__third--benefit__additional-equipment i').attr('data-initial'));

// считаем цену
function countPriceModel () {
 // var totalPriceModel = Number($('.equipment__total span').attr('data-initial'));
 //console.log(totalPriceModel);

 var resultPrice = totalPriceModel;
 

 $('.config__table-item__name input').each(function() {

  if($(this).is(':checked')) {
    var plusCount = $(this).closest('.config__table-item').find('span').text();

  
    var numEl = parseInt(plusCount.replace(/[^\d]/g, ''));


    resultPrice += numEl;

    add1 += numEl;

  }

  $('.config__third--total span i').text(prettify(resultPrice));
  $('.config__third--benefit__additional-equipment i').text(prettify(add1));

  $('.add-total i').text(prettify(add1));

  $('.end-total i').text(prettify(resultPrice));

 })

}


// popups

$('.btn-click__popup').click(function(e) {
  e.preventDefault();
  var value = $(this).attr('data-value');
  $('#' + value).css('display', 'block');
  $('body').addClass('shad');

})

$('.popup-call > button').click(function(e) {
  e.preventDefault();
  $('.popup-call').hide();
  $('body').removeClass('shad');
})

$(function(){
  $(".parameter-btn").click(function(){
          var _href = '#' + $(this).attr("data-value");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
  });
});


// диаграмма показателей проходимости на странице конфигуратора


//считаем длину span
function configWidth() {
  $('.config__diagram-item').each(function() {
      var current = $(this).find('.config__diagram-count').attr('data-current'),
        min = $(this).find('.config__diagram-count').attr('data-min'),
        max = $(this).find('.config__diagram-count').attr('data-max'),
        widthItem = '';
        delta = min - 3;
    
    widthItem = ( ( current - delta ) / ( max - delta ) ) * 100 + '%';
      
      $(this).find('.config__diagram-count span').css('width', widthItem );
    })
}

configWidth();

$('.config__table-item').each(function () {
  $(this).find('input[type="checkbox"]').change(function () {


    
    var passability = Number($(this).attr('data-passability'));
    var reliability = Number($(this).attr('data-reliability'));
    var speed = Number($(this).attr('data-speed'));
    var autonomy = Number($(this).attr('data-autonomy'));
    var lifting = Number($(this).attr('data-autonomy'));

    if (!$(this).is(':checked')) {
      passability = -1 * Number($(this).attr('data-passability'));
      reliability = -1 * Number($(this).attr('data-reliability'));
      speed = -1 * Number($(this).attr('data-speed'));
      autonomy = -1 * Number($(this).attr('data-autonomy'));
      lifting = -1 * Number($(this).attr('data-lifting'));
    }

    var currentPassability = Number($('#passability').attr('data-current'));
    var maxPassability = $('#passability').attr('data-max');

    var currentReliability = Number($('#reliability').attr('data-current'));
    var maxReliability = $('#reliability').attr('data-max');


    var currentSpeed = Number($('#speed').attr('data-current'));
    var maxSpeed = $('#speed').attr('data-max');


    var currentAutonomy = Number($('#autonomy').attr('data-current'));
    var maxAutonomy = Number($('#autonomy').attr('data-max'));


    $('#passability').attr('data-current', currentPassability += passability);
    $('#reliability').attr('data-current', currentReliability += reliability);
    $('#speed').attr('data-current', currentSpeed += speed);
    $('#autonomy').attr('data-current', currentAutonomy += autonomy);
    countPriceModel();
    configWidth();

  })
});


  

  var header = $('.header'),
    scrollPrev = 0;
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50 && scrolled > scrollPrev) {
      header.addClass('out');
    } else {
      header.removeClass('out');
    }
    scrollPrev = scrolled;
  });

/* Закрытие меню бургер по клику вне документа */
$(document).click( function(e){
  if ( $(e.target).closest('.menu').length ) {
      // клик внутри элемента 
      return;
  }
  // клик снаружи элемента 
  $('.menu').removeClass('menu--active');
  $('.menu-container').removeClass('menu-container--active');
  $('body').removeClass('shadowed-second');

});

let boxes = document.querySelectorAll(".world-map__popup");
let openPopup = document.querySelectorAll('.jvectormap-marker.jvectormap-element');
console.log(openPopup);
boxes.forEach(elem => {
  let boxesClose = elem.querySelector('button');
  boxesClose.addEventListener('click', () => {

    boxes.forEach(elem => {
      elem.style.display = 'none';
    });

  })
});

openPopup.forEach(elem => {
  
  elem.addEventListener('click', () => {

    console.log('pig');

  })
});

