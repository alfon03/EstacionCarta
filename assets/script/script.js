document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#typical-dishes .grid-container img");
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
  