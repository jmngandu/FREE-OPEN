const humberger = document.querySelector(".humberger-menu");
const navs = document.querySelector(".navs");
const crossBar = document.querySelector(".fa-xmark");
const lineBar = document.querySelector(".fa-bars");
const loadwithme = document.querySelector(".loading-center");

window.addEventListener("load", function () {
  loadwithme.style.display = "none";
});

lineBar.addEventListener("click", () => {
  navs.style.display = "block";
  lineBar.style.display = "none";
  crossBar.style.display = "block";
});
crossBar.addEventListener("click", () => {
  navs.style.display = "none";
  lineBar.style.display = "block";
  crossBar.style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
});
