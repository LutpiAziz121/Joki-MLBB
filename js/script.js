// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika order menu di klik
document.querySelector("#order-menu");
onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik  di luar sidebar
const order = document.querySelector("#order-menu");

document.addEventListener("click", function (e) {
  if (!order.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
