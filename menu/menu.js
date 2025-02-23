// Cargar el menú desde el archivo JSON
fetch("./menu.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar el archivo JSON");
    }
    return response.json();
  })
  .then((data) => {
    loadMenuItems(data);
  })
  .catch((error) => {
    console.error("Error al cargar el menú:", error);
    alert("No se pudo cargar el menú. Intenta nuevamente más tarde.");
  });

// Función para cargar los elementos del menú en la página
function loadMenuItems(data) {
  // Llamamos a las secciones del menú
  const sections = ["para-comenzar", "guisos", "y-para-rematar", "bebidas"];

  // Recorrer las secciones y crear las cards dinámicamente
  sections.forEach((section) => {
    const sectionContainer = document.querySelector(`#${section} .menu-items`);
    const items = data[section];

    items.forEach((item) => {
      // Crear el contenido de la card
      const card = document.createElement("div");
      card.classList.add("col-6", "col-md-6", "col-lg-4", "col-xl-3");

      card.innerHTML = `
        <div class="card shadow-sm" data-aos="fade-up">
          <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}" data-bs-toggle="modal" data-bs-target="#imageModal" onclick="openImageModal('${item.imagen}')">
          <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">${item.precio}</p>
          </div>
        </div>
      `;

      // Añadir la card a la sección correspondiente
      sectionContainer.appendChild(card);
    });
  });

  // Inicializar AOS (animaciones de scroll)
  AOS.init();
}

// Función para abrir la imagen en el modal
function openImageModal(imageUrl) {
  const modalImage = document.querySelector("#modalImage");
  modalImage.src = imageUrl;
}
