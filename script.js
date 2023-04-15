var swiper = new Swiper(".feature-slider", {
    grabCursor: true,
    centeredSlides: true,  
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });

  var swiper = new Swiper(".product1-slider", {
    grabCursor: true,
    centeredSlides: true,  
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')

bar.addEventListener('click', ()=>{
  nav.classList.add('active');
})
close.addEventListener('click', ()=>{
  nav.classList.remove('active');
})