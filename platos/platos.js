fetch("platos.json")
  .then((response) => response.json())
  .then((data) => {
    const platos = data.platos; // Acceder al array dentro del objeto
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = platos
      .map(
        (plato) => `
      <img src="${plato.imagen}" alt="${plato.nombre}" />
    `
      )
      .join("");
  })
  .catch((error) => console.error("Error cargando el JSON:", error));
