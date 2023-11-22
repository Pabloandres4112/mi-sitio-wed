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

//////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////

    var ratingGroup = document.getElementById('half-stars-example');
    var ratingInputs = ratingGroup.querySelectorAll('input[type="radio"]');
    var ratingLabels = ratingGroup.querySelectorAll('.rating__label');
    var result = document.querySelector("#current-rating")

    let selectedRating = 2.5;

    ratingInputs.forEach((input) => {
        input.addEventListener('change', (event) => {
            selectedRating = parseFloat(event.target.value);
            updateRatingDisplay();
        });
    });

    ratingLabels.forEach((label) => {
        label.addEventListener('mouseover', (event) => {
            var labelValue = parseFloat(event.target.getAttribute('for').split('-')[1]);
            updateRatingDisplay(labelValue);
        });

        label.addEventListener('mouseout', () => {
            updateRatingDisplay();
        });
    });

    function updateRatingDisplay(ratingValue = selectedRating) {
        var ratingDisplay = document.getElementById('rating-display');
        if (!ratingDisplay) {
            ratingDisplay = document.createElement('p');
            ratingDisplay.id = 'rating-display';
            ratingGroup.parentNode.appendChild(ratingDisplay);
        }
        result.textContent = ratingValue
    }