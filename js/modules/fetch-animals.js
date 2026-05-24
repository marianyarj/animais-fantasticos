import AnimationNumbers from "./number-animation.js";


const fetchAnimals = (url, target) => {
    const numberGrid = document.querySelector(target);
    function addAnimals(animal) {
        const divNumeroAnimal = createAnimal(animal);
        numberGrid.appendChild(divNumeroAnimal);
    }

    const createAnimals = async () => {
        try {
            const animaisResponse = await fetch(url);
            const animaisJson = await animaisResponse.json();
            animaisJson.forEach(animal => {
                addAnimals(animal);
            });
            animateAnimalNumbers();
        } catch (error) {
            console.log("ERRO = " + error);
        }
    };

    function animateAnimalNumbers(params) {
        const animationNumbers = new AnimationNumbers('[data-number]', '.numbers', 'active');
        animationNumbers.init();
    }

    const createAnimal = (animal) => {
        const divNumeroAnimal = document.createElement('div');
        divNumeroAnimal.classList.add('number-animal');
        divNumeroAnimal.innerHTML = `<h2>${animal.especie}</h2>
                                    <span data-number>${animal.total}</span>`;
        return divNumeroAnimal;
    };
    return createAnimals();
};

export default fetchAnimals;
