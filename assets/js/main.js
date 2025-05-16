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
	=    		2. Menu sticky & Scroll			      =
=============================================*/
  window.addEventListener("scroll", function () {
    var scroll = window.scrollY;
    var header = document.getElementById("sticky-header");

    if (scroll < 245) {
      header.classList.remove("sticky-menu");
    } else {
      header.classList.add("sticky-menu");
    }
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
	=    		3. Statistics Counter			      =
=============================================*/

  function animateCounter(el, target, duration = 2000, decimals = 2) {
    let start = 0;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = start + (target - start) * progress;
      el.innerText = value.toFixed(decimals);
      if (progress < 1) requestAnimationFrame(step);
      else el.innerText = target.toFixed(decimals); // snap to exact target
    }

    requestAnimationFrame(step);
  }

  const counters = document.querySelectorAll(".counter");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          const decimals = (el.dataset.target.split(".")[1] || "").length;
          animateCounter(el, target, 2000, decimals);
          counterObserver.unobserve(el); // Run once
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));

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
	=    		Temporary Hover			 =
=============================================*/

  function animationOnHover() {
    let cards = document.querySelectorAll(".tmponhover, .tmponhover-two");
    cards.forEach((tmpOnHover) => {
      tmpOnHover.addEventListener("mousemove", (e) => {
        let rect = tmpOnHover.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        tmpOnHover.style.setProperty("--x", `${x}px`);
        tmpOnHover.style.setProperty("--y", `${y}px`);
        // console.log(`x: ${x}, y: ${y}`); // Debugging values
      });
    });
  }

  animationOnHover();

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

  /*=============================================
	=    		5. Split Text		      =
=============================================*/

  // Define the classes you want to animate on scroll
  const animationClasses = [
    "fadeInUp",
    "fadeInDown",
    "fadeInLeft",
    "fadeInRight",
    "skillInLeft",
    "slideinup",
    "slideinright",
    "slideindown",
    "slideinleft",
    "slidebottomright",
    "slidetopleft",
    "img-custom-anim-right",
    "img-custom-anim-left",
    "img-custom-anim-top",
  ];

  // Create an IntersectionObserver
  const animateOnScrollObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
          observer.unobserve(entry.target); // Remove this line if you want it to replay on scroll
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% visible
    }
  );

  // Apply observer to each animation element
  animationClasses.forEach((cls) => {
    document.querySelectorAll(`.${cls}`).forEach((el) => {
      el.classList.add("animate-init"); // Optional class to hide or prep before scroll
      animateOnScrollObserver.observe(el);
    });
  });
});
