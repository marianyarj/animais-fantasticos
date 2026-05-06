class OperatingHours {
    constructor(businessHours, activeClass) {
        this.businessHours = document.querySelector(businessHours);
        this.activeClass = activeClass;
    }
    operatingInformation() {
        this.weekdays = this.businessHours.dataset.semana.split(",").map(Number);
        this.weekdayHours = this.businessHours.dataset.horario.split(",").map(Number);
    }
    currentStatus() {
        this.currentDate = new Date();
        this.currentDayOfWeek = this.currentDate.getDay();
        this.currentHour = this.currentDate.getUTCHours() + 2;
    }
    isOpen() {
        const weekdaysOpen = this.weekdays.indexOf(this.currentDayOfWeek) !== -1;
        const openHours = (this.currentHour >= this.weekdayHours[0] && this.currentHour < this.weekdayHours[1]);

        return weekdaysOpen && openHours;
    }
    activeOpen() {
        if (this.isOpen()) {
            this.businessHours.classList.add(this.activeClass);
        }
    }
    init() {
        if (this.businessHours) {
            this.operatingInformation();
            this.currentStatus();
            this.activeOpen();
        }
        return this;
    }
};

export default OperatingHours;
