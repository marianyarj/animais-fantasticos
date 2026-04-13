export default class Tooltip {

    constructor(tooltips) {
        this.tooltips = document.querySelectorAll(tooltips);

        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    onMouseMove(event) {
        this.tooltipBox.style.top = event.pageY + 20 + 'px';

        if (event.pageX + 220 > window.innerWidth) {
            this.tooltipBox.style.left = event.pageX + -200 + 'px';
        } else {
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

    onMouseLeave({ currentTarget }) {
        this.tooltipBox.remove();
        currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
        currentTarget.removeEventListener('mouseleave', this.onMouseMove);
    }

    criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        this.tooltipBox = tooltipBox;
    }

    onMouseOver({ currentTarget }) {
        this.criarTooltipBox(currentTarget);
        currentTarget.addEventListener('mouseleave', this.onMouseLeave);
        currentTarget.addEventListener('mousemove', this.onMouseMove);

    }

    addTooltipEvent() {
        this.tooltips.forEach(item => {
            item.addEventListener('mouseover', this.onMouseOver);
        });

    }

    init() {
        if (this.tooltips.length) {
            this.addTooltipEvent();
        }
        return this;
    }
};



/*
const initTooltip = () => {

    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach(item => {
        item.addEventListener('mouseover', onMouseOver);
    });

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this);
        tooltipBox.style.top = event.pageY + 'px';
        tooltipBox.style.left = event.pageX + 'px';
        //console.log(event);

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);

    }
    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mouseleave', onMouseMove);
        }
    };

    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    };

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        //console.log(tooltipBox);

        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }
};
export default initTooltip;
*/
