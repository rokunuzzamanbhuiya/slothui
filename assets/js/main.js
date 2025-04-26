/* Theme Name: Slothui - SAAS Landing Page HTML Template
   Author: Rokunuzzaman Bhuiya
   Version: 1.0.0
   File Description: Main JS file of the template
*/

"use strict";
/*=============================================
	=    		1. Preloader			      =
=============================================*/
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

/*=============================================
	=    		2. Mobile Menu			      =
=============================================*/
// Offcanvas toggle
document.querySelectorAll(".header-offcanvas-toogle").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelector(".header-offcanvas")
      ?.classList.add("header-offcanvas-open");
    document
      .querySelector(".header-offcanvas-overlay")
      ?.classList.add("header-offcanvas-overlay-open");
  });
});

document
  .querySelectorAll(
    ".header-offcanvas-close-toggle, .header-offcanvas-overlay, .header-click-close"
  )
  .forEach((item) => {
    item.addEventListener("click", () => {
      document
        .querySelector(".header-offcanvas")
        ?.classList.remove("header-offcanvas-open");
      document
        .querySelector(".header-offcanvas-overlay")
        ?.classList.remove("header-offcanvas-overlay-open");
    });
  });

// Mobile menu
const tsMenuWrap = document
  .querySelector(".header-mobile-menu-active > ul")
  ?.cloneNode(true);
const tsSideMenu = document.querySelector(".header-offcanvas-menu nav");

if (tsMenuWrap && tsSideMenu) {
  tsSideMenu.appendChild(tsMenuWrap);
}
