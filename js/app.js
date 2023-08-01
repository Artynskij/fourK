import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    // type: 'bullets',
    clickable: true,
  },
  parallax: true,

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  mousewheel: { eventsTarget: "body" },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // //   draggable: true,
  // },
});
const swiperStaff = new Swiper(".swiper-staff", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-staff-button-next",
    prevEl: ".swiper-staff-button-prev",
  },
  // mousewheel: { eventsTarget: 'body', },
});
const swiperProduct = new Swiper(".swiper-product-first", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-product-first-button-next",
    prevEl: ".swiper-product-first-button-prev",
  },
  // mousewheel: { eventsTarget: 'body', },
});
