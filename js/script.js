const swiper = new Swiper(".new-stickers__slider", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

if (matchMedia) {
  let matchMedia578px = window.matchMedia("(max-width: 578px)");
  matchMedia578px.addListener(changes);
  changes(matchMedia578px);
}

function changes(matchMedia578px) {
  if (matchMedia578px.matches) {
    var swiper = new Swiper(".another-auctions__swiper-wrapper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination-another",
        clickable: true,
      },
    });
  }
}
