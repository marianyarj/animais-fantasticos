import Slide from "./slide.js";

export default class SlideNav extends Slide {
    constructor(slide, slideWrapper) {
        super(slide, slideWrapper);
        this.bindControlEvents();
    }
    addArrow(prev, next) {
        this.prevSlide = document.querySelector(prev);
        this.nextSlide = document.querySelector(next);
        this.addArrowEvent();
    }
    addArrowEvent() {
        this.prevSlide.addEventListener('click', this.activePrevSlide);
        this.nextSlide.addEventListener('click', this.activeNextSlide);
    }

    createControl() {
        const control = document.createElement('ul');
        control.dataset.control = 'slide';
        this.slideArray.forEach((item, index) => {
            control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`;
        });
        this.slideWrapper.appendChild(control);
        return control;
    }

    eventControl(item, index) {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            this.changeSlide(index);
        });
        this.slideWrapper.addEventListener('changeEvent', this.activeControlItem);
    }

    activeControlItem() {
        this.controlArray.forEach(item => item.classList.remove(this.activeClass));
        this.controlArray[this.index.active].classList.add(this.activeClass);
    }
    addControl(customControl) {
        this.control = document.querySelector(customControl) || this.createControl();
        this.controlArray = [...this.control.children];
        this.activeControlItem();
        this.controlArray.forEach((item, index) => {
            this.eventControl(item, index);
        });
    }

    bindControlEvents() {
        this.activeControlItem = this.activeControlItem.bind(this);
    }
}
