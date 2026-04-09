import initAnimanumber from "./number-animation.js";

const initFetchAnimais = () => {

    const fetchAnimais = async (url) => {
        try {
            const animaisResponse = await fetch(url);
            const animaisJson = await animaisResponse.json();
            const numberGrid = document.querySelector('.number-grid');

            animaisJson.forEach(animal => {
                const divNumeroAnimal = createAnimal(animal);
                numberGrid.appendChild(divNumeroAnimal);
            });

            initAnimanumber();
        } catch (error) {
            console.log("ERRO = " + error);
        }
    };

    const createAnimal = (animal) => {
        const divNumeroAnimal = document.createElement('div');
        divNumeroAnimal.classList.add('number-animal');
        divNumeroAnimal.innerHTML = `<h3>${animal.especie}</h3>
                                    <span data-number>${animal.total}</span>`;

        //console.log(divNumeroAnimal)
        return divNumeroAnimal;
    };
    fetchAnimais('./animaisapi.json');
};

export default initFetchAnimais;
