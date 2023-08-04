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
    bulletClass: "swiper-modal-pagination-bullet",
    bulletActiveClass: "swiper-modal-pagination-bullet-active",
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
// _____ navBar
document.querySelector(".navbar-flot").addEventListener("click", () => {
  swiper.slideTo(4, 3000);
});
document.querySelector(".navbar-services").addEventListener("click", () => {
  swiper.slideTo(3, 3000);
});
document.querySelector(".navbar-projects").addEventListener("click", () => {
  swiper.slideTo(5, 3000);
});
document.querySelector(".navbar-partners").addEventListener("click", () => {
  swiper.slideTo(7, 3000);
});
// document.querySelector('.navbar-contacts').addEventListener('click', () => {swiper.slideTo(0, 3000);})

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

// ______ hiddenMainScreen

const mainScreen = document.querySelector(".main-screen");
const content = document.querySelector(".wrapper");
let myTimer = null;

mainScreen.addEventListener("click", function () {
  mainScreen.classList.add("main-screen--unvisible");
  if (myTimer !== null) {
    clearTimeout(myTimer);
    myTimer = null;
  }

  myTimer = setTimeout(someWork, 500000);
});

content.addEventListener("click", () => {
  if (myTimer !== null) {
    clearTimeout(myTimer);
    myTimer = null;
  }

  myTimer = setTimeout(someWork, 500000);
});
function someWork() {
  mainScreen.classList.remove("main-screen--unvisible");
}
// animation ___________
// const canvas = document.querySelector("#canvas");
// const context = canvas.getContext("2d");
// canvas.width = 250;
// canvas.height = 250;
// console.log(Math.PI);

// let angle = 0;

// animation({
//   clear() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//   },
//   update() {
//     angle += Math.PI * 0.01;
//   },
//   render() {
//     context.beginPath();
//     context.arc(
//       canvas.width / 2 + 100 * Math.cos(angle),
//       canvas.height / 2 + 100 * Math.sin(angle),
//       50,
//       0,
//       Math.PI * 2
//     );
//     context.fillStyle = "green";
//     context.fill();
//   },
// });

// function animation(obj) {
//   const { clear, update, render } = obj;
//   let pTimestamp = 0;

//   requestAnimationFrame(tick);

//   function tick(timestamp) {
//     requestAnimationFrame(tick);

//     const diff = timestamp - pTimestamp;
//     pTimestamp = timestamp;
//     const fps = 1000/ diff
//     const secondPart = fps / 1000

//     const params = {
//       timestamp,
//       pTimestamp,
//       diff,
//       fps,
//       secondPart
//     }
//     update(params)
//     clear()
//     render(params)
//   }
// }
