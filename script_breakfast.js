window.addEventListener('load', (event) => {

  const breakfastBtn = document.querySelector("#breakfast-btn");

  breakfastBtn.addEventListener('click', breakfastMenuToggler);

  const leftBannerBtn = document.querySelector("#left-banner-btn");
  const RightBannerBtn = document.querySelector("#right-banner-btn");

  leftBannerBtn.addEventListener("click", breakfastBannerToggler);
  RightBannerBtn.addEventListener("click", breakfastBannerToggler);

})

function breakfastMenuToggler() {
  const breakfastMenu = document.querySelector("#breakfast-menu");
  breakfastMenu.hasAttribute("hidden")
  ? breakfastMenu.removeAttribute("hidden")
  : breakfastMenu.setAttribute("hidden", true);
};

function breakfastBannerToggler() {
  const breakfastBanner1 = document.querySelector("#breakfast-banner1");
  const breakfastBanner2 = document.querySelector("#breakfast-banner2");

  breakfastBanner1.hasAttribute("hidden")
  ? breakfastBanner1.removeAttribute("hidden")
  : breakfastBanner1.setAttribute("hidden", true);

  breakfastBanner2.hasAttribute("hidden")
  ? breakfastBanner2.removeAttribute("hidden")
  : breakfastBanner2.setAttribute("hidden", true);
};