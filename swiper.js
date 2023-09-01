let swiper = new Swiper(".mySwiper", {
  loop:true,
  navigation: {
    nextEl: ".fa-arrow-right",
    prevEl: ".fa-arrow-left",
  },
  slidesPerView: 4,
  spaceBetween: 0,
});


let swiper2 = new Swiper(".youSwiper", {
  loop:true,
  slidesPerView: 7,
  spaceBetween: 0,
  autoplay: {
    delay: 1500,
  },
});