document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
  
    const observerOptions = {
      root: null, // La raíz es la ventana del navegador
      rootMargin: "0px",
      threshold: 0.1, // El 10% del elemento debe estar visible para activarlo
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Deja de observar una vez visible
        }
      });
    }, observerOptions);
  
    menuItems.forEach((item) => {
      observer.observe(item);
    });
  });
  