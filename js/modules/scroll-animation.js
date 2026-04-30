import debounce from "./debounce.js";

export default class ScrollAnimation {

    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.windowHalf = window.innerHeight * 0.5;
        this.checkDistance = debounce(this.checkDistance.bind(this), 100);
    }

    getDistance() {
        this.distance = [...this.sections].map((section) => {
            const sectionTop = section.offsetTop;
            return {
                element: section,
                offset: Math.floor(sectionTop - this.windowHalf),
            };
        });
    }

    checkDistance() {
        this.distance.forEach((section) => {
            if (window.pageYOffset > section.offset) {
                section.element.classList.add('active');
            }
            else if (section.element.classList.contains('active')) {
                section.element.classList.remove('active');
            }
        });
    }

    init() {
        if (this.sections.length) {
            this.getDistance();
            this.checkDistance();
            window.addEventListener('scroll', this.checkDistance);
        }
        return this;
    }

    stop() {
        window.removeEventListener('scroll', this.checkDistance);
    }
}
