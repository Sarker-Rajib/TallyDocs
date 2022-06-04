{
  var swiper = new Swiper(".brandSwiper", {
    freeMode: true,
    autoplay: true,
    slidesPerView: 6,
    loop: true,
    speed: 1500,
    breakpoints: {
      // when window width is >= 320px
      320: {
      slidesPerView: 3,
      spaceBetween: 50,
      },
      // when window width is >= 992px
      992: {
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

// video-player start
function videoPlay(element){
  const videoPlayer = document.getElementById('video-player');
  const url = element.value;
  videoPlayer.src = url;
  // videoPlayer.src += "?autoplay=1";
  videoPlayer.play();
}
// video-player end