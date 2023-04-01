abstract class Vehicle {
  private make!: string;
  private  model!: string;
  private  year!: number;
    rented!: boolean;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }

    getMake(): string {
        return this.make;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): number {
        return this.year;
    }

    isRented(): boolean {
        return this.rented;
    }

    setRented(rented: boolean): void {
        this.rented = rented;
    }

    abstract rentalRate(): number;

    rent(): string {
        if (this.rented) {
            return "This vehicle is already rented.";
        } else {
            this.setRented(true);
            return "You have successfully rented this vehicle.";
        }
    }

    returnVehicle(): string {
        if (!this.rented) {
            return "This vehicle has not been rented yet.";
        } else {
            this.setRented(false);
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
console.log('Car Rented or not : ',car.isRented() === true ? 'Rented' : 'Available'); 
console.log(car.returnVehicle());
console.log('Car Rented or not : ', car.isRented() === true ? 'Rented' : 'Available');
console.log('Car Model', car.getYear());
console.log('Car Rent Rate Per Day' ,car.rentalRate());

// Truck LOG
console.log('Truck Information');
const truck = new Truck("ISUZU", "NKR (4x2)", 2021, 5000);
console.log(truck.rent());
console.log('Truck Rented or not : ',truck.isRented() === true ? 'Rented' : 'Available'); 
console.log(truck.returnVehicle());
console.log('Truck Rented or not : ', truck.isRented() === true ? 'Rented' : 'Available');
console.log('Truck Model', truck.getYear());
console.log('Truck Rent Rate Per Day' ,truck.rentalRate());

// MotorCycle LOG
console.log('MotorCycle Information');
const motorcycle = new Motorcycle("Honda", "CB150F", 2017, 150);
console.log(motorcycle.rent());
console.log('MotorCycle Rented or not : ',motorcycle.isRented() === true ? 'Rented' : 'Available'); 
console.log(motorcycle.returnVehicle());
console.log('MotorCycle Rented or not : ', motorcycle.isRented() === true ? 'Rented' : 'Available');
console.log('MotorCycle Model', motorcycle.getYear());
console.log('MotorCycle Rent Rate Per Day' ,motorcycle.rentalRate());