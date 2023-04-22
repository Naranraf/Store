document.addEventListener("DOMContentLoaded", function () {
  var botonModal = document.getElementById("boton-modal");
  var botonCerrar = document.getElementById("boton-cerrar");
  var modal = document.getElementById("miModal");

  botonModal.onclick = function () {
    modal.style.display = "block";
  }

  botonCerrar.onclick = function () {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let bookingBtn = document.getElementById("bookingBtn")
  let closeBooking = document.getElementById("closeBooking")

  bookingBtn.onclick = function () {
    bookingContainer.style.display = "block"
  }

  closeBooking.onclick = function () {
    bookingContainer.style.display = "none";
  }

});