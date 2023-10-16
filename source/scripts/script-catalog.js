const header = document.querySelector(".page-header");
const headerButton = header.querySelector(".navigation-button");
const modal = document.querySelector(".modal-container");
const modalButtonClose = modal.querySelector(".modal-button-close");

const openModal = () => {
  headerButton.addEventListener("click", (evt) => {
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
