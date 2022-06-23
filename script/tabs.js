window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".working__btn-step").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;
      document
        .querySelectorAll(".working__content")
        .forEach(function (tabsElem) {
          tabsElem.classList.remove("working__content_active");
        });
      // console.log(document.querySelector('[data-target="${path}"]'));
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("working__content_active");
    });
  });

  //   console.log(document.querySelectorAll(".working__btn-step"));
});
