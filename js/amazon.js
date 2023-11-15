let btnClose = document.getElementById("btnClose"),
mainContent = document.getElementById("mainContent"),

// Obtén todas las imágenes dentro del contenedor box-modal-img
imagenes = document.querySelectorAll('.box-modal-img img'),

// Obtén el contenedor imgModal
imgModal = document.getElementById('imgModal');

// Agrega un evento de clic a cada imagen
imagenes.forEach((imagen) => {
  imagen.addEventListener('click', () => {
    // Cambia la imagen principal en el contenedor imgModal
    imgModal.querySelector('.main-img-modal').src = imagen.src;
  });
});

// Event Listener for the close button
btnClose.addEventListener('click', function(){
    mainContent.style.display = "none";
    });
