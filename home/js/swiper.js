const swiper = new Swiper('.swiper1', {
  loop: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 9000,
  },
  breakpoints: {
    800: {
      slidesPerView: 6,
    },
  },
});

const swiper2 = new Swiper('.swiper2', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    800: {
      slidesPerView: 3,
    },
  },
});

const swiper3 = new Swiper('.swiper3', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    800: {
      slidesPerView: 2,
    },
  },
});

const swiper4 = new Swiper('.swiper4', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    800: {
      slidesPerView: 1.5,
    },
  },
});

const swiper5 = new Swiper('.swiper5', {
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    800: {
      slidesPerView: 4,
    },
  },
});
