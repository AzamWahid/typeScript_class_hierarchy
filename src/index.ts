abstract class Vehicle {
    private _Make!: string;
    private _Model!: string;
    private _Year!: number;
    private _Rented!: boolean;

    constructor(Make: string, Model: string, Year: number) {
        this._Make = Make;
        this._Model = Model;
        this._Year = Year;
        this._Rented = false;
    }

    get Make(): string {
        return this._Make;
    }

    set Make(make: string) {
        this._Make = make;
    }

    get Model(): string {
        return this._Model;
    }
    set Model(model: string) {
        this._Model = model;
    }

    get Year(): number {
        return this._Year;
    }
    set Year(year: number) {
        this._Year = year;
    }

    get Rented(): boolean {
        return this._Rented;
    }

    set Rented(rented: boolean) {
        this._Rented = rented;
    }

    abstract rentalRate(): number;

    rent(): string {
        if (this._Rented) {
            return "This vehicle is already rented.";
        } else {
            this._Rented = true;
            return "You have successfully rented this vehicle.";
        }
    }

    returnVehicle(): string {
        if (!this._Rented) {
            return "This vehicle has not been rented yet.";
        } else {
            this._Rented = false;
            return "You have successfully returned this vehicle.";
        }
    }

}
class Car extends Vehicle {
    personCapacity: number;

    constructor(make: string, model: string, year: number, personCapacity: number) {
        super(make, model, year);
        this.personCapacity = personCapacity;
    }

    rentalRate(): number {
        return 2500;
    }
}

class Truck extends Vehicle {
    cargoCapacity: number;

    constructor(make: string, model: string, year: number, cargoCapacity: number) {
        super(make, model, year);
        this.cargoCapacity = cargoCapacity;
    }

    rentalRate(): number {
        return 5000;
    }
}

class Motorcycle extends Vehicle {
    engineSize: number;

    constructor(make: string, model: string, year: number, engineSize: number) {
        super(make, model, year);
        this.engineSize = engineSize;
    }

    rentalRate(): number {
        return 500;
    }
}

// CAR LOG
console.log('Car Information');
const car = new Car("Toyota", "Corolla", 2022, 5);
console.log(car.rent());
console.log('Car Rented or not : ', car.Rented === true ? 'Rented' : 'Available');
console.log(car.returnVehicle());
console.log('Car Rented or not : ', car.Rented === true ? 'Rented' : 'Available');
console.log('Car Model', car.Year);
console.log('Car Rent Rate Per Day', car.rentalRate());

// Truck LOG
console.log('Truck Information');
const truck = new Truck("ISUZU", "NKR (4x2)", 2021, 5000);
console.log(truck.rent());
console.log('Truck Rented or not : ', truck.Rented === true ? 'Rented' : 'Available');
console.log(truck.returnVehicle());
console.log('Truck Rented or not : ', truck.Rented === true ? 'Rented' : 'Available');
console.log('Truck Model', truck.Year);
console.log('Truck Rent Rate Per Day', truck.rentalRate());

// MotorCycle LOG
console.log('MotorCycle Information');
const motorcycle = new Motorcycle("Honda", "CB150F", 2017, 150);
console.log(motorcycle.rent());
console.log('MotorCycle Rented or not : ', motorcycle.Rented === true ? 'Rented' : 'Available');
console.log(motorcycle.returnVehicle());
console.log('MotorCycle Rented or not : ', motorcycle.Rented === true ? 'Rented' : 'Available');
console.log('MotorCycle Model', motorcycle.Year);
console.log('MotorCycle Rent Rate Per Day', motorcycle.rentalRate());