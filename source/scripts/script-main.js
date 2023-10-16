const header = document.querySelector(".page-header");
const main = document.querySelector(".main-page-index");
const headerButton = header.querySelector(".navigation-button");
const mainButton = main.querySelector(".search-button");
const modal = document.querySelector(".modal-container");
const modalButtonClose = modal.querySelector(".modal-button-close");

const openModal = () => {
  headerButton.addEventListener("click", (evt) => {
    evt.preventDefault();

    modal.classList.remove("modal-container-closed");
  });

  mainButton.addEventListener("click", (evt) => {
    evt.preventDefault();

    modal.classList.remove("modal-container-closed");
  });
};

openModal();

const closeModal = () => {
  modalButtonClose.addEventListener("click", (evt) => {
    evt.preventDefault();

    modal.classList.add("modal-container-closed");
  });
};

closeModal();
