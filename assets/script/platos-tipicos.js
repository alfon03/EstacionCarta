// Cargar los platos desde el archivo JSON
fetch("../db/platos-tipicos.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar el archivo JSON de platos");
    }
    return response.json();
  })
  .then((data) => {
    loadPlatos(data);
  })
  .catch((error) => {
    console.error("Error al cargar los platos:", error);
    alert("No se pudo cargar los platos. Intenta nuevamente más tarde.");
  });

// Función para cargar los platos en la página
function loadPlatos(data) {
  const sectionContainer = document.querySelector(
    "#typical-dishes .grid-container"
  );
  const platos = data.platos;

  platos.forEach((plato) => {
    // Crear la imagen de cada plato
    const imgElement = document.createElement("img");
    imgElement.src = plato.imagen;
    imgElement.alt = `Plato típico: ${plato.nombre}`;
    imgElement.classList.add("img-fluid"); // Aseguramos que las imágenes sean responsive

    // Añadir la imagen a la sección correspondiente
    sectionContainer.appendChild(imgElement);
  });
}
