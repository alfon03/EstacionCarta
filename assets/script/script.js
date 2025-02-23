document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar todas las imágenes dentro de las secciones del menú
  const images = document.querySelectorAll(
    "#typical-dishes img, #para-comenzar img, #bebidas img, #para-seguir-picando img, #para-comer img, #guisos img, #y-para-rematar img, .menu-grid .menu-item img"
  );
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.querySelector(".close-modal");

  // Agregar evento de clic a cada imagen
  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImage.src = img.src; // Mostrar la imagen seleccionada
    });
  });

  // Cerrar el modal al hacer clic en el botón de cerrar
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar el modal al hacer clic fuera de la imagen
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  // Evento de clic para actualizar el estado activo
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Eliminar el id="active" de todos los enlaces
      navLinks.forEach((nav) => nav.removeAttribute("id"));

      link.setAttribute("id", "active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const goToTopButton = document.getElementById("goToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      goToTopButton.style.display = "flex"; // Muestra el botón
    } else {
      goToTopButton.style.display = "none"; // Oculta el botón
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Inicializar tooltips de Bootstrap
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

AOS.init(); // Inicializar AOS para animaciones de scroll

// Obtener elementos
const sidebar = document.getElementById("sidebar");
const closeSidebarButton = document.getElementById("closeSidebar"); // Botón de la 'X'
const openSidebarButton = document.getElementById("hamburger"); // Botón de hamburguesa para abrir el sidebar

// Toggle sidebar visibility on hamburger click (ya lo tienes)
openSidebarButton.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  document.getElementById("navbar").classList.toggle("active");
});

// Cerrar el sidebar cuando se haga clic en la 'X'
closeSidebarButton.addEventListener("click", function () {
  sidebar.classList.remove("active");
  document.getElementById("navbar").classList.remove("active");
});

// Cerrar el sidebar al hacer clic fuera de él
document.addEventListener("click", function (event) {
  if (
    !sidebar.contains(event.target) &&
    !openSidebarButton.contains(event.target)
  ) {
    sidebar.classList.remove("active");
    document.getElementById("navbar").classList.remove("active");
  }
});
