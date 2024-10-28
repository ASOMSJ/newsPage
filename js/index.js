const mql = window.matchMedia("(max-width: 992px)");

const changeSlides = (slide) => {
  var swiper = new Swiper(".swiper", {
    slidesPerView: slide,
    spaceBetween: 30,
    freeMode: true,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const screenListen = (e) => {
  if (e.matches) {
    changeSlides(1);
  } else {
    changeSlides(3);
  }
}

screenListen(mql);
mql.addEventListener("change", screenListen);



document.getElementById("year").innerHTML = new Date().getFullYear();