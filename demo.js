/*   
.responsive navbar

*/

let menu=document.querySelector("#menu-btn");
let navbar=document.querySelector('.header .flex .navbar');

menu.onclick=() =>{
    menu.classList.toggle('fa-times');   // button close menu
    navbar.classList.toggle('active');
    console.log("gehad");
}

/*
   swiper
*/

var swiper = new Swiper(".review_slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 0,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        
      },
      loop:true,
      grabCursor:true,

  });