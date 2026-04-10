import initScrollAnimation from "./modules/scroll-animation.js";
import TabNav from "./modules/tabnav.js";
import AccordionFaq from "./modules/accordion-faq.js";
import Modal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initOperatingHours from "./modules/operating-hours.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import ScrollSmooth from "./modules/scroll-smooth.js";

//const options = { behavior: 'smooth', block: 'start' };
//const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]', options);
const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const accordionFaq = new AccordionFaq('[data-anime="accordion"] dt');
accordionFaq.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

initScrollAnimation();

initTooltip();
initDropDownMenu();
initMenuMobile();
initOperatingHours();
initFetchAnimais();
