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
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    557: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    840: {
      slidesPerView: 3,
      spaceBetween: 40
    }
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
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    840: {
      slidesPerView: 4,
      spaceBetween: 20
    }

}});