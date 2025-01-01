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
