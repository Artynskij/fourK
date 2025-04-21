// const main = document.querySelector(".main");
// const mainSlider = document.querySelector(".main_sliderOneImg ");
// const navBar = document.querySelector(".navbar");
// const navBarItems = document.querySelectorAll(".navbar_item");

// const mockData = {
//   cinema: [
//     {
//       id: 1,
//       title: "Аватар: путь воды",
//       price: "15.00 - 25.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster1.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 2,
//       title:
//         "Аватар: путь воды и слоган нашео счастья в том что ты пранеь норм",
//       price: "15.00 - 25.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster1.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 3,
//       title: "Аватар: путь воды",
//       price: "15.00 - 25.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster1.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 4,
//       title: "Аватар: путь воды",
//       price: "15.00 - 25.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster1.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 5,
//       title: "Аватар: путь воды",
//       price: "15.00 - 25.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster1.png",
//       place: "Концертный зал Минск, Минск",
//     },
//   ],
//   fest: [
//     {
//       id: 1,
//       title: "Саша Савик",
//       price: "65.00 - 95.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster3.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 2,
//       title: "Саша Савик",
//       price: "65.00 - 95.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster3.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 3,
//       title: "Саша Савик",
//       price: "65.00 - 95.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster3.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 4,
//       title: "Саша Савик",
//       price: "65.00 - 95.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster3.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 5,
//       title: "Саша Савик",
//       price: "65.00 - 95.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster3.png",
//       place: "Концертный зал Минск, Минск",
//     },
//   ],
//   kids: [
//     {
//       id: 1,
//       title: "Мот",
//       price: "165.00 - 295.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster2.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 2,
//       title: "Мот",
//       price: "165.00 - 295.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster2.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 3,
//       title: "Мот",
//       price: "165.00 - 295.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster2.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 4,
//       title: "Мот",
//       price: "165.00 - 295.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster2.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 5,
//       title: "Мот",
//       price: "165.00 - 295.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "../img/Poster2.png",
//       place: "Концертный зал Минск, Минск",
//     },
//   ],
//   default: [
//     {
//       id: 1,
//       title: "Тут название чего-то Тут название чего-то Тут название чего-то Тут название чего-то",
//       price: "а тут цена",
//       date: "а тут дата",
//       time: "и время соответсвенно",
//       poster: "../img/Poster3.png",
//       place: "место",
//     },
//     {
//       id: 2,
//       title: "Тут название чего-то",
//       price: "а тут цена",
//       date: "а тут дата",
//       time: "и время соответсвенно",
//       poster: "../img/marketing.png",
//       place: "место",
//     },
//   ],
// };

// const breadCrumb = ({event}) => {

//     return (
//         `
//         <div class="breadCrumb">
//             <a href="/pages/mainPage.html" type="MIME-тип" class="breadCrumb__item">Главная</a>
//             <div class="breadCrumb__item__line">/</div>
//             <div class="breadCrumb__item">${event || "еще пока не знаю"}</div>
            
            
//         </div>

//         `
//     )
// }
// const typePage = ({ e, filters, find, data }) => {
//   const cardsContent = data[e.target.name] || data.default;
//   const section = `<div class="type_page__title">${e.target.innerHTML}</div>
//                         <div class="type_page__content">
//                        ${cardsContent
//                          .map((card) => {
//                            return `
//                         <div class="type_page__content__card">
//                         <img class="type_page__content__card__img" src="${card.poster}" alt="img card" />
//                         <div class="type_page__content__card__title">${card.title}</div>
//                         <div class="button light_button canBuyTicket type_page__content__card__price">
//                               ${card.price}
//                         </div>
//                         <div class="type_page__content__card__date">
//                             <img class="imgDate mr10" src="../img/icons/caledanr.png" alt="date"/>
//                             ${card.date}
//                             <span class="type_page__content__card__date__time">${card.time}</span>
//                         </div>
//                         <div class="type_page__content__card__place">
//                             <img class="imgLocation mr10" src="../img/icons/location.png" alt="location"/>
//                             ${card.place}
//                         </div>
//                     </div>`;
//                         })
//                         .join("")}
       

//                     </div>`;

//   return section;
// };

// mainSlider.innerHTML = breadCrumb({event:"еще пока не знаю"});
// let prevNav 
// navBar.addEventListener("click", (e) => {
//     if(e.target.classList[0]!=navBarItems[1].classList[0] ){
//        return
//     }
//    prevNav ? prevNav.classList.remove("navbar_item__active") : console.log("none");
// console.log(prevNav)
// // prevNav.classList("navbar_item__active")
//   const changeContent = () => {
//     // main.innerHTML = typePage({ e: e, data:mockData });
//     mainSlider.innerHTML = breadCrumb({event:e.target.innerHTML});
//   };
  
//   navBarItems.forEach((el) => (
//     // console.dir(el.classList.keys((key) => console.log(key))),
//         el === e.target ? el.classList.add("navbar_item__active") : "",
//         el === e.target ? changeContent() : '' ,
//         el === e.target ?  prevNav=el : ""
//     ));
// });


// adaptive for filters------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






































