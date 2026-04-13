export default class TabNav {
    constructor(menu, content) {
        this.menu = document.querySelectorAll(menu);
        this.tabContent = document.querySelectorAll(content);
        this.activeClass = 'active';
    }

    activeTab(index) {
        this.tabContent.forEach(section => {
            section.classList.remove(this.activeClass);
        });
        const direction = this.tabContent[index].dataset.anime;
        this.tabContent[index].classList.add(this.activeClass, direction);
    }

    addTabnavEvent() {
        this.menu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                this.activeTab(index);
            });
        });
    }

    init() {
        if (this.menu.length && this.tabContent.length) {
            this.activeTab(0);
            this.addTabnavEvent();
        }
        return this;
    }
}
