class GuessingGame {
    constructor() {
        this.l = null;
        this.r = null;
        this.previous = null;
        this.middle = null;
        this.range = [];
    }

    setRange(min, max) {
        for (let i = min; i <= max; i++) {
            this.range.push(i);
        }
        this.l = 0;
        this.r = this.range.length - 1;
    }

    guess() {
        this.middle = Math.ceil((this.l + this.r) / 2);
        return this.range[this.middle];
    }

    lower() {
        this.r = this.middle;
    }

    greater() {
        this.l = this.middle;
    }
}

module.exports = GuessingGame;
