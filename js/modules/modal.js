const initModal = () => {

    const abrirBtn = document.querySelector('[data-modal="abrir"]');
    const closeBtn = document.querySelector('[data-modal="close"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    if (abrirBtn && closeBtn && containerModal) {

        const toggleModal = (event) => {
            event.preventDefault();
            containerModal.classList.toggle("active");
        };

        // const abrirModal = (event) => {
        //     event.preventDefault();
        //     containerModal.classList.add("active");
        // }

        // const closeModal = (event) => {
        //     event.preventDefault();
        //     containerModal.classList.remove("active");
        // }

        // para ter o this e usar como no exempplo dever ser uma funcao, com arrow nao funciona:
        //     function clickModalOut(event) {
        //     if (event.target === this) {
        //         closeModal(event);
        //     }
        // }

        const clickModalOut = (event) => {
            if (event.target === containerModal) {
                toggleModal(event);
            }
        };
        abrirBtn.addEventListener('click', toggleModal);
        closeBtn.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', clickModalOut);
    }
};

export default initModal;
