export default class Modal {
    constructor(btnOpen, btnClose, containerModal) {
        this.btnOpen = document.querySelector(btnOpen);
        this.btnClose = document.querySelector(btnClose);
        this.containerModal = document.querySelector(containerModal);

        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.clickModalOut = this.clickModalOut.bind(this);
    }

    toggleModal() {
        this.containerModal.classList.toggle("active");
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    clickModalOut(event) {
        if (event.target === this.containerModal) {
            this.toggleModal(event);
        }
    }

    addModalListener() {
        this.btnOpen.addEventListener('click', this.eventToggleModal);
        this.btnClose.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.clickModalOut);
    }

    init() {
        if (this.btnOpen && this.btnClose && this.containerModal) {
            this.addModalListener();
        }
        return this;
    }
}
