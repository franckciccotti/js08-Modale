
const modal = document.querySelector(".modal"),
  modalContent = document.querySelector(".modal-content"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");

btn.addEventListener("click", ouvrir);
close.addEventListener("click", fermer);
modal.addEventListener("click", fermer);

// OUVERTURE
function ouvrir(e) {
  e.preventDefault();
  modal.style.display = "block";
}
// FERMETURE
function fermer() {
  modalContent.classList.add(".hide");
  modal.style.display = "none";
}
