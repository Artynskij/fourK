import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // mousewheelControl: true,
  parallax: true,
  // mousewheel: { eventsTarget: "body" },
});
const swiperStaff = new Swiper(".swiper-staff", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,

  navigation: {
    nextEl: ".swiper-staff-button-next",
    prevEl: ".swiper-staff-button-prev",
  },
});
const swiperProjects = new Swiper(".swiper-projects", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,

  navigation: {
    nextEl: ".swiper-staff-button-next",
    prevEl: ".swiper-staff-button-prev",
  },
});
const swiperChildCompany = new Swiper(".swiper-child__company", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-staff-button-next",
    prevEl: ".swiper-staff-button-prev",
  },
});
const swiperPartners = new Swiper(".swiper-partners", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-staff-button-next",
    prevEl: ".swiper-staff-button-prev",
  },
});
const swiperProductOne = new Swiper(".swiper-product-first", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,

  navigation: {
    nextEl: ".swiper-product-first-button-next",
    prevEl: ".swiper-product-first-button-prev",
  },
});
const swiperProductTwo = new Swiper(".swiper-product-second", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,

  navigation: {
    nextEl: ".swiper-product-second-button-next",
    prevEl: ".swiper-product-second-button-prev",
  },
});
const swiperModal = new Swiper(".swiper-modal", {
  direction: "horizontal",

 
  loop: false,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-modal-pagination",
    clickable: true,
    bulletClass: 'swiper-modal-pagination-bullet',
    bulletActiveClass: 'swiper-modal-pagination-bullet-active',
  },
  navigation: {
    nextEl: ".swiper-staff-button-next",
    prevEl: ".swiper-staff-button-prev",
    
  },
  
});

// _______ modal

const butOpenModal = document.querySelectorAll(".open__modal");
const btns = document.querySelectorAll(".btn");
const modalOverlay = document.querySelector(".modal-overlay ");
const modals = document.querySelectorAll(".modal");

butOpenModal.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");
    console.log(e.currentTarget);
    console.log(path);

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    const actuallyModal = document.querySelector(`[data-target="${path}"]`);
    const butClose = actuallyModal.querySelector(".close-modal");
    butClose.addEventListener("click", () => {
      modalOverlay.classList.remove("modal-overlay--visible");
      actuallyModal.classList.remove("modal--visible");
    });

    actuallyModal.classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

modalOverlay.addEventListener("click", (e) => {
  // console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});

// ____________ gotTop
const goTop = document.querySelector(".button-gotop");
goTop.addEventListener("click", () => {
  swiper.slideTo(0, 3000);
});

// _______  checkboxex
const fileInput = document.querySelector(".custom-file input");

function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

fileInput?.addEventListener("change", (e) => {
  console.log(e.currentTarget.files);
  let filesLength = e.currentTarget.files.length;

  if (filesLength) {
    e.currentTarget
      .closest(".custom-file")
      .querySelector("span").textContent = `${filesLength} ${declOfNum(
      filesLength,
      ["файл", "файла", "файлов"]
    )}`;
  }
});
