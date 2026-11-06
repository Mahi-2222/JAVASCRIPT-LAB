class Locker {
    constructor(pin) {
        this.pin = pin;
    }

    checkPin(number) {
        return this.pin === number;
    }
}

let locker = new Locker(1234);

console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));
