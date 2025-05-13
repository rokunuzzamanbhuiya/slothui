/* Theme Name: Slothui - SAAS Landing Page HTML Template
   Author: Rokunuzzaman Bhuiya
   Version: 1.0.0
   File Description: Main JS file of the template
*/

document.addEventListener("DOMContentLoaded", function () {
  ("use strict");

  /*
  1. Preloader
  2. Mobile Menu
  3. Client Tab
  4. Load More Testimonials
  5. FAQ Accordion
  */

  /*=============================================
	=    		1. Preloader			      =
=============================================*/
  window.addEventListener("load", function () {
    document.querySelector("body").classList.add("loaded");
  });

  /*=============================================
	=    		2. Mobile Menu			      =
=============================================*/
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

  const tsMenuWrap = document
    .querySelector(".header-mobile-menu-active > ul")
    ?.cloneNode(true);
  const tsSideMenu = document.querySelector(".header-offcanvas-menu nav");

  if (tsMenuWrap && tsSideMenu) {
    tsSideMenu.appendChild(tsMenuWrap);
  }

  /*=============================================
	=    		3. Client Tab			      =
=============================================*/
  function clientContentTab() {
    const whoContents = document.querySelectorAll(".client-content");
    const whoImages = document.querySelectorAll(".client-content-wrapper img");

    if (!whoContents.length || !whoImages.length) return;

    whoContents[0].classList.add("active");
    whoImages[0].classList.add("active");

    whoContents.forEach((content, index) => {
      content.addEventListener("click", function () {
        whoContents.forEach((item) => item.classList.remove("active"));
        whoImages.forEach((img) => img.classList.remove("active"));

        whoContents[index].classList.add("active");
        whoImages[index].classList.add("active");
      });
    });
  }

  clientContentTab();

  /*=============================================
	=    	4. Load More Testimonials			   =
=============================================*/
  const loadMoreBtn = document.querySelector(".loadMoreBtn");

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      const hiddenCards = document.querySelectorAll(
        ".testimonialCard[data-attr='hiddenS'], .testimonialCard.hiddenS"
      );

      hiddenCards.forEach((card) => {
        card.style.display = "block";
        card.removeAttribute("data-attr");
        card.classList.remove("hiddenS");
      });

      loadMoreBtn.parentElement.style.display = "none";
    });
  }

  /*=============================================
	=    		5. FAQ Accordion			      =
=============================================*/
  document.querySelectorAll(".accordion").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;

      if (!panel) return;

      const isActive = button.classList.contains("active");

      // Close all panels
      document.querySelectorAll(".accordion").forEach((btn) => {
        btn.classList.remove("active");
        const p = btn.nextElementSibling;
        if (p) p.style.display = "none";
      });

      // Open clicked panel
      if (!isActive) {
        button.classList.add("active");
        panel.style.display = "block";
      }
    });
  });
});
