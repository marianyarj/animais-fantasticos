export default class AnimationNumbers {
    constructor(numbers, observerTarget, observerClass) {
        this.numbers = document.querySelectorAll(numbers);
        this.observerTarget = document.querySelector(observerTarget);
        this.observerClass = observerClass;
        this.handleMutation = this.handleMutation.bind(this);
    }
    static increaseNumber(number) {
        const total = +number.innerText;
        const increase = Math.max(1, Math.floor(total / 100));;
        let start = 0;
        const timer = setInterval(() => {
            start += increase;
            number.innerText = start;
            if (start > total) {
                number.innerText = total;
                clearInterval(timer);
            }
        }, 25 * Math.random());
    }
    animationNumber() {
        this.numbers.forEach(number => {
            this.constructor.increaseNumber(number);
        });

    }
    handleMutation(mutation) {
        if (mutation[0].target.classList.contains(this.observerClass)) {
            this.animationNumber();
            this.observer.disconnect();
        }
    }
    addMutationObserver() {
        this.observer = new MutationObserver(this.handleMutation);
        this.observer.observe(this.observerTarget, { attributes: true });
    }

    init() {
        if (this.numbers.length && this.observerTarget) {
            this.addMutationObserver();
        }
        return this;
    }
}
