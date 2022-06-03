{
   var swiper = new Swiper(".brandSwiper", {
      freeMode: true,
      autoplay: true,
      spaceBetween: 30,
      slidesPerView: 6,
      centeredSlides: false,
      loop: true,
      speed: 1500,
   });
}

{
   var swiper = new Swiper(".testimonialSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      autoplay: true,
      speed: 1500,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
   });
}