var swiper = new Swiper('.swiper--thumbs', {
  //   spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper('.mySwiper2', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  thumbs: {
    swiper: swiper,
  },

  breakpoints: {
    800: {
      direction: 'vertical',
    },
    spaceBetween: 10,
  },
});

var swiper3 = new Swiper('.swiper3', {
  slidesPerView: 2,
  breakpoints: {
    800: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
});

var swiper4 = new Swiper('.swiper4', {
  slidesPerView: 2,
  breakpoints: {
    800: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
