import outsideClick from "./outsideclick.js";


export default function initMenuMobile() {
    const menuBtn = document.querySelector('[data-menu="btnMobile"]');
    const menuList = document.querySelector('[data-menu="list"]');

    function openMenu() {
        menuList.classList.add('active');
        menuBtn.classList.add('active');
        outsideClick(menuList, ['touchstart', 'click'], () => {
            menuList.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    };

    if (menuBtn) {
        ['touchstart', 'click'].forEach(userEvent => {
            menuBtn.addEventListener(userEvent, openMenu);
        });
    }
}
