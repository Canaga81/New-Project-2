let swiper = new Swiper(".mySwiper", {
  loop:true,
  navigation: {
    nextEl: ".fa-arrow-right",
    prevEl: ".fa-arrow-left",
  },
  slidesPerView: 4,
  spaceBetween: 0,

  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    413: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 480px
    557: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 640px
    840: {
      slidesPerView: 4,
      spaceBetween: 40
    },
}});


let swiper2 = new Swiper(".youSwiper", {
  loop:true,
  slidesPerView: 7,
  spaceBetween: 0,
  autoplay: {
    delay: 1500,
  },

  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 640px
    840: {
      slidesPerView: 6,
      spaceBetween: 20
    }

}});