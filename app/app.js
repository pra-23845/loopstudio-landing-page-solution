"use strict";
const header = document.querySelector(".header");
const nav = document.querySelector(".header__nav");
const hero = document.querySelector(".header__hero");
const navHeight = nav.getBoundingClientRect().height;
const magic = document.querySelector(".about");
console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
observer.observe(hero);
const closebtn = document.querySelector(".close");
const openBtn = document.querySelector(".open");
const headLink = document.querySelector(".header__links");

openBtn.addEventListener("click", function () {
  headLink.classList.toggle("display-nav");
  openBtn.style.display = "none";
  closebtn.style.display = "block";
});
closebtn.addEventListener("click", function () {
  headLink.classList.toggle("display-nav");
  closebtn.style.display = "none";

  openBtn.style.display = "block";
});
const magicSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};
const magicObserver = new IntersectionObserver(magicSection, {
  root: null,
  threshold: 0.15,
});
magicObserver.observe(magic);
