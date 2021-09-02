class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.cent = Math.round ((this.max - this.min) / 2) + this.min;
                return this.cent;
    }

    lower() {
        this.setRange (this.min, this.cent);
    }

    greater() {
        this.setRange (this.cent, this.max)
    }
}

module.exports = GuessingGame;
