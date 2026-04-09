export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabConteudo = document.querySelectorAll('[data-tab="content"] section');
    const activeClass = 'active';

    function activeTab(index) {
        tabConteudo.forEach(section => {
            section.classList.remove(activeClass);
        });
        //console.log(tabConteudo[index].dataset.anime);
        const direcao = tabConteudo[index].dataset.anime;

        tabConteudo[index].classList.add(activeClass, direcao);
    }

    if (tabMenu.length && tabConteudo.length) {
        tabConteudo[0].classList.add(activeClass);
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }

}
