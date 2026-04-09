export default function initAccordionFaq() {
    const accordionFaqList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'active';

    function activeAccordion(event) {
        //event.currentTarget; mesmo que this
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
    }
    if (accordionFaqList.length) {
        accordionFaqList[0].classList.add(activeClass);
        accordionFaqList[0].nextElementSibling.classList.add(activeClass);

        accordionFaqList.forEach(item => {
            item.addEventListener('click', activeAccordion);
        });
    }

}
