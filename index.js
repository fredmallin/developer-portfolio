"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Progress bar animation
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });

    // Fade-in animations
    const fadeElements = document.querySelectorAll(".project-card, .skill");
    const fadeOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
    const fadeObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      });
    }, fadeOptions);

    fadeElements.forEach((element) => {
      element.style.opacity = 0;
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      fadeObserver.observe(element);
    });
  }, []);

  return (
    <section className="hero">
      <h2>Hi, I’m <span>Fredrick</span> 👋</h2>
      <p>A passionate <strong>Software Developer</strong>.</p>
    </section>
  );
}
