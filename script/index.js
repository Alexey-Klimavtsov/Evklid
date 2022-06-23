console.log("Hellow, World3!");

// eslint-disable-next-line no-undef
window.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".header__dropdown")
    .addEventListener("click", function () {
      document.querySelector(".nav__list").classList.toggle("nav__list_active");
    });

  document.querySelector(".search__btn").addEventListener("click", function () {
    document.querySelector(".search").classList.add("search_active");
    document
      .querySelector(".search__field")
      .classList.add("search__field_active");
    document
      .querySelector(".search__btn-cls")
      .classList.add("search__btn-cls_active");
  });
  document
    .querySelector(".search__btn-cls")
    .addEventListener("click", function () {
      document.querySelector(".search").classList.remove("search_active");
      document
        .querySelector(".search__field")
        .classList.remove("search__field_active");
      document
        .querySelector(".search__btn-cls")
        .classList.remove("search__btn-cls_active");
    });
});
