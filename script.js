"use strict";

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const mobileLayout = window.matchMedia("(max-width: 1040px)");

const setMenuOpen = (open, restoreFocus = false) => {
  navLinks.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  navLinks.inert = mobileLayout.matches && !open;
  if (restoreFocus) menuBtn.focus();
};

menuBtn.addEventListener("click", () => {
  setMenuOpen(menuBtn.getAttribute("aria-expanded") !== "true");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    const destination = document.querySelector(link.getAttribute("href"));
    setMenuOpen(false);
    // Move keyboard focus with the in-page destination, without a second scroll.
    if (destination) {
      destination.setAttribute("tabindex", "-1");
      destination.focus({ preventScroll: true });
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false, true);
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".navbar")) setMenuOpen(false);
});
document.addEventListener("focusin", (event) => {
  if (!event.target.closest(".navbar")) setMenuOpen(false);
});
mobileLayout.addEventListener("change", () => setMenuOpen(false));
setMenuOpen(false);
document.documentElement.classList.add("js");
menuBtn.hidden = false;

// Current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Print / Save as PDF button
const printButton = document.getElementById("printCvBtn");
printButton.hidden = false;
printButton.addEventListener("click", () => window.print());

// Reveal cards as the user scrolls
const revealItems = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Content remains visible until an observer is available and registered.
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("reveal-pending");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealItems.forEach((item) => {
    revealObserver.observe(item);
    item.classList.add("reveal-pending");
  });
  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) {
      revealObserver.disconnect();
      revealItems.forEach((item) => item.classList.remove("reveal-pending"));
    }
  });
}

// Active navigation link while scrolling
const navItems = [...navLinks.querySelectorAll("a")];
const sections = navItems.map((link) => document.querySelector(link.getAttribute("href")));
let scrollQueued = false;

const setActiveLink = () => {
  let current = null;
  const headerBottom = document.querySelector(".site-header").getBoundingClientRect().bottom + 36;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= headerBottom) current = section.id;
  });
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
    current = "contact";
  }
  navItems.forEach((link) => {
    const active = link.getAttribute("href") === `#${current}`;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollQueued = false;
};

window.addEventListener("scroll", () => {
  if (!scrollQueued) {
    scrollQueued = true;
    window.requestAnimationFrame(setActiveLink);
  }
}, { passive: true });
window.addEventListener("resize", setActiveLink);
window.addEventListener("load", setActiveLink);
setActiveLink();

// Printing includes expanded project details even when the screen view is collapsed.
const projectDetails = [...document.querySelectorAll(".project-details")];
let detailsBeforePrint = [];
window.addEventListener("beforeprint", () => {
  detailsBeforePrint = projectDetails.map((details) => details.open);
  projectDetails.forEach((details) => { details.open = true; });
});
window.addEventListener("afterprint", () => {
  projectDetails.forEach((details, index) => { details.open = detailsBeforePrint[index] ?? false; });
});
