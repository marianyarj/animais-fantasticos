export default class AccordionFaq {

    constructor(list) {
        //const accordionFaqList = document.querySelectorAll('[data-anime="accordion"] dt');
        this.accordionFaqList = document.querySelectorAll(list);
        this.activeClass = 'active';
    }

    toggleAccordion(item) {
        //event.currentTarget; mesmo que this
        item.classList.toggle(this.activeClass);
        item.nextElementSibling.classList.toggle(this.activeClass);
    }

    addAccordionEvent() {
        this.accordionFaqList.forEach(item => {
            item.addEventListener('click', () => this.toggleAccordion(item));
        });
    }

    init() {
        if (this.accordionFaqList.length) {
            this.toggleAccordion(this.accordionFaqList[0]);
            this.addAccordionEvent();
        }
        return this;
    }
}
