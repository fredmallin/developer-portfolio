// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // -----------------------
  // Progress bar animation
  // -----------------------
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach((bar) => {
    const width = bar.style.width; // store final width
    bar.style.width = "0"; // start from 0
    setTimeout(() => {
      bar.style.width = width; // animate to original width
    }, 500);
  });

  // -----------------------
  // Smooth scrolling
  // -----------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      if (targetId === "#") {
        // Scroll to very top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // adjust for fixed header
          behavior: "smooth",
        });
      }
    });
  });

  // -----------------------
  // Fade-in animations (with stagger)
  // -----------------------
  const fadeElements = document.querySelectorAll(".project-card, .skill");
  const fadeOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target); // animate only once
    });
  }, fadeOptions);

  fadeElements.forEach((element, index) => {
    element.style.opacity = 0;
    element.style.transform = "translateY(20px)";
    element.style.transition = `opacity 0.6s ease ${(index * 0.1)}s, transform 0.6s ease ${(index * 0.1)}s`;
    fadeObserver.observe(element);
  });

  // -----------------------
  // Navbar shrink + shadow on scroll
  // -----------------------
  const navbar = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // -----------------------
  // Back to Top button
  // -----------------------
  const backToTopBtn = document.createElement("button");
  backToTopBtn.innerText = "↑";
  backToTopBtn.id = "backToTop";
  document.body.appendChild(backToTopBtn);

  // Style via JS (can also move to CSS)
  backToTopBtn.style.position = "fixed";
  backToTopBtn.style.bottom = "20px";
  backToTopBtn.style.right = "20px";
  backToTopBtn.style.padding = "10px 15px";
  backToTopBtn.style.border = "none";
  backToTopBtn.style.borderRadius = "50%";
  backToTopBtn.style.fontSize = "20px";
  backToTopBtn.style.cursor = "pointer";
  backToTopBtn.style.background = "#333";
  backToTopBtn.style.color = "#fff";
  backToTopBtn.style.opacity = "0";
  backToTopBtn.style.transition = "opacity 0.3s ease";

  // Show/hide on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.opacity = "1";
    } else {
      backToTopBtn.style.opacity = "0";
    }
  });

  // Scroll to top on click
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
