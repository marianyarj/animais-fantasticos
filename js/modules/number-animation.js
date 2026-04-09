export default function initAnimanumber() {
    function animanumber() {
        const number = document.querySelectorAll('[data-number]');
        console.log(number);

        number.forEach(numero => {
            const total = +numero.innerText;
            //console.log(total);
            const incremento = Math.max(1, Math.floor(total / 100));;
            let start = 0;
            const timer = setInterval(() => {
                start += incremento;
                numero.innerText = start;
                if (start > total) {
                    numero.innerText = total;
                    clearInterval(timer);
                }
            }, 25 * Math.random());
        });

    }

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('active')) {
            animanumber();
            observador.disconnect();
        }
    }

    const observerTarget = document.querySelector('.numbers');
    const observador = new MutationObserver(handleMutation);
    observador.observe(observerTarget, { attributes: true });
}
