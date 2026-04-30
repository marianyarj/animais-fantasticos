export default class ScrollAnimation {

    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.windowHalf = window.innerHeight * 0.5;
        this.scrollAnimation = this.scrollAnimation.bind(this);
    }

    scrollAnimation() {
        this.sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            const isSectionVisible = (sectionTop - this.windowHalf) < 0;
            if (isSectionVisible) {
                section.classList.add('active');
            }
            else if (section.classList.contains('active')) {
                section.classList.remove('active');
            }
        });
    }
    init() {
        this.scrollAnimation();
        window.addEventListener('scroll', this.scrollAnimation);
    }
    // if (sections) {
    //     scrollAnimation();

    // }
}
