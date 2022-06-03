{
  var swiper = new Swiper(".brandSwiper", {
    freeMode: true,
    autoplay: true,
    slidesPerView: 6,
    centeredSlides: true,
    loop: true,
    speed: 1500,
    breakpoints: {
      // when window width is >= 320px
      320: {
      slidesPerView: 2,
      spaceBetween: 50,
      },

      // when window width is >= 640px
      640: {
      slidesPerView: 3,
      spaceBetween: 50
      },
      // when window width is >= 991px
      991: {
      slidesPerView: 4,
      spaceBetween: 50
      },
      // when window width is >= 1400px
      1400: {
      slidesPerView: 6,
      spaceBetween: 60
      }
    }
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

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      // when window width is >= 480px
      680: {
        slidesPerView: "auto",
        spaceBetween: 15,
      }
    }
  });
}