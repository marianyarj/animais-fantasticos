import outsideClick from "./outsideclick.js";


export default class MenuMobile {
    constructor(menuBtn, menuList, events) {
        if (events === undefined) {
            this.events = ['touchstart', 'click'];
        } else {
            this.events = events;
        }
        this.activeClass = 'active';
        this.menuBtn = document.querySelector(menuBtn);
        this.menuList = document.querySelector(menuList);
        this.openMenu = this.openMenu.bind(this);

    }
    openMenu() {
        this.menuList.classList.add(this.activeClass);
        this.menuBtn.classList.add(this.activeClass);
        outsideClick(this.menuList, this.events, () => {
            this.menuList.classList.remove(this.activeClass);
            this.menuBtn.classList.remove(this.activeClass);
        });
    };
    addMenuMobileEvents() {
        this.events.forEach(userEvent => {
            this.menuBtn.addEventListener(userEvent, this.openMenu);
        });
    }
    init() {
        if (this.menuBtn && this.menuList) {
            this.addMenuMobileEvents();
        }
        return this;
    }
}
