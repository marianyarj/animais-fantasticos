import debounce from './debounce.js';

export default class Slide {
    constructor(slide, slideWrapper) {
        this.slide = document.querySelector(slide);
        this.slideWrapper = document.querySelector(slideWrapper);
        this.distance = { finalPosition: 0, startX: 0, movement: 0 };
        this.activeClass = 'active';
        this.changeEvent = new Event('changeEvent');
    }
    transition(active) {
        this.slide.style.transition = active ? 'transform .3s' : '';
    }
    moveSlide(distanceX) {
        this.distance.movePosition = distanceX;
        this.slide.style.transform = `translate3d(${distanceX}px, 0, 0)`;
    }
    updatePosition(clientX) {
        this.distance.movement = (this.distance.startX - clientX) * 1.6;
        return this.distance.finalPosition - this.distance.movement;
    }
    onStart(event) {
        event.preventDefault();
        this.distance.startX = event.clientX;
        this.slideWrapper.addEventListener('mousemove', this.onMove);
        this.transition(false);
    }
    onStartTouch(event) {
        event.preventDefault();
        this.distance.startX = event.changedTouches[0].clientX;
        this.slideWrapper.addEventListener('touchmove', this.onMove);
        this.transition(false);
    }
    onMove(event) {
        const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
        const finalPosition = this.updatePosition(pointerPosition);
        this.moveSlide(finalPosition);
    }
    onEnd(event) {
        this.slideWrapper.removeEventListener('mousemove', this.onMove);
        this.slideWrapper.removeEventListener('touchmove', this.onMove);
        this.distance.finalPosition = this.distance.movePosition;
        this.transition(true);
        this.changeSlideOnEnd();
    }
    changeSlideOnEnd() {
        if (this.distance.movement > 120 && this.index.next !== undefined) {
            this.activeNextSlide();
        } else if (this.distance.movement < -120 && this.index.prev !== undefined) {
            this.activePrevSlide();
        } else {
            this.changeSlide(this.index.active);
        }
    }
    addSlideEvents() {
        this.slideWrapper.addEventListener('mousedown', this.onStart);
        this.slideWrapper.addEventListener('mouseup', this.onEnd);

        this.slideWrapper.addEventListener('touchstart', this.onStartTouch);
        this.slideWrapper.addEventListener('touchend', this.onEnd);
    }

    bindEvents() {
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.onStartTouch = this.onStartTouch.bind(this);
        this.activePrevSlide = this.activePrevSlide.bind(this);
        this.activeNextSlide = this.activeNextSlide.bind(this);
        this.onResize = debounce(this.onResize.bind(this), 200);
    }

    slidePosition(slide) {
        const margin = (this.slideWrapper.offsetWidth - slide.offsetWidth) / 2;
        return -(slide.offsetLeft - margin);
    }

    slidesConfig() {
        this.slideArray = [...this.slide.children].map((slide) => {
            const position = this.slidePosition(slide);
            return {
                position,
                slide
            };
        });
    }
    slidesIndexNav(index) {
        const lastSlide = this.slideArray.length - 1;
        this.index = {
            prev: index ? index - 1 : undefined,
            active: index,
            next: index === lastSlide ? undefined : index + 1
        };
    }
    changeSlide(index) {
        const activeSlide = this.slideArray[index];
        this.moveSlide(activeSlide.position);
        this.slidesIndexNav(index);
        this.distance.finalPosition = activeSlide.position;
        this.changeActiveClass();
        this.slideWrapper.dispatchEvent(this.changeEvent);
    }

    changeActiveClass() {
        this.slideArray.forEach(item => item.slide.classList.remove(this.activeClass));
        this.slideArray[this.index.active].slide.classList.add(this.activeClass);
    }

    activePrevSlide() {
        if (this.index.prev !== undefined) {
            this.changeSlide(this.index.prev);
        }
    }

    activeNextSlide() {
        if (this.index.next !== undefined) {
            this.changeSlide(this.index.next);
        }
    }

    onResize() {
        setTimeout(() => {
            this.slidesConfig();
            this.changeSlide(this.index.active);
        }, 1000);
    }

    addResizeEvent() {
        window.addEventListener('resize', this.onResize);
    }
    init() {
        this.bindEvents();
        this.transition(true);
        this.slidesConfig();

        this.changeSlide(0);

        this.addSlideEvents();
        this.addResizeEvent();
        return this;
    }
}
