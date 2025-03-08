document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(
    "#typical-dishes img, #para-comenzar img, #para-seguir-picando img, #bebidas img, #para-seguir-picando img, #para-comer img, #guisos img, #y-para-rematar img, .menu-grid .menu-item img"
  );
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.querySelector(".close-modal");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImage.src = img.src;
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((nav) => nav.removeAttribute("id"));

      link.setAttribute("id", "active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const goToTopButton = document.getElementById("goToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      goToTopButton.style.display = "flex";
    } else {
      goToTopButton.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

AOS.init();

const sidebar = document.getElementById("sidebar");
const closeSidebarButton = document.getElementById("closeSidebar");
const openSidebarButton = document.getElementById("hamburger");

openSidebarButton.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  document.getElementById("navbar").classList.toggle("active");
});

closeSidebarButton.addEventListener("click", function () {
  sidebar.classList.remove("active");
  document.getElementById("navbar").classList.remove("active");
});

document.addEventListener("click", function (event) {
  if (
    !sidebar.contains(event.target) &&
    !openSidebarButton.contains(event.target)
  ) {
    sidebar.classList.remove("active");
    document.getElementById("navbar").classList.remove("active");
  }
});
