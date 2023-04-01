"use strict";
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.rented) {
            return "This vehicle is already rented.";
        }
        else {
            this.setRented(true);
            return "You have successfully rented this vehicle.";
        }
    }
    returnVehicle() {
        if (!this.rented) {
            return "This vehicle has not been rented yet.";
        }
        else {
            this.setRented(false);
            return "You have successfully returned this vehicle.";
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, personCapacity) {
        super(make, model, year);
        this.personCapacity = personCapacity;
    }
    rentalRate() {
        return 2500;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, cargoCapacity) {
        super(make, model, year);
        this.cargoCapacity = cargoCapacity;
    }
    rentalRate() {
        return 5000;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, engineSize) {
        super(make, model, year);
        this.engineSize = engineSize;
    }
    rentalRate() {
        return 500;
    }
}
// CAR LOG
console.log('Car Information');
const car = new Car("Toyota", "Corolla", 2022, 5);
console.log(car.rent());
console.log('Car Rented or not : ', car.isRented() === true ? 'Rented' : 'Available');
console.log(car.returnVehicle());
console.log('Car Rented or not : ', car.isRented() === true ? 'Rented' : 'Available');
console.log('Car Model', car.getYear());
console.log('Car Rent Rate Per Day', car.rentalRate());
// Truck LOG
console.log('Truck Information');
const truck = new Truck("ISUZU", "NKR (4x2)", 2021, 5000);
console.log(truck.rent());
console.log('Truck Rented or not : ', truck.isRented() === true ? 'Rented' : 'Available');
console.log(truck.returnVehicle());
console.log('Truck Rented or not : ', truck.isRented() === true ? 'Rented' : 'Available');
console.log('Truck Model', truck.getYear());
console.log('Truck Rent Rate Per Day', truck.rentalRate());
// MotorCycle LOG
console.log('MotorCycle Information');
const motorcycle = new Motorcycle("Honda", "CB150F", 2017, 150);
console.log(motorcycle.rent());
console.log('MotorCycle Rented or not : ', motorcycle.isRented() === true ? 'Rented' : 'Available');
console.log(motorcycle.returnVehicle());
console.log('MotorCycle Rented or not : ', motorcycle.isRented() === true ? 'Rented' : 'Available');
console.log('MotorCycle Model', motorcycle.getYear());
console.log('MotorCycle Rent Rate Per Day', motorcycle.rentalRate());
//# sourceMappingURL=index.js.map