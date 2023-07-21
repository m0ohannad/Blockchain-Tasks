class Vehicle {
    constructor(name, manufacturer, id) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.id = id;
    }
}

class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

class Plane extends Vehicle {
    constructor(name, manufacturer, id, type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

class Employee {
    constructor(name, id, dateOfBirth) {
        this.name = name;
        this.id = id;
        this.dateOfBirth = dateOfBirth;
    }
}

class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
        super(name, id, dateOfBirth);
        this.licenseID = licenseID;
    }
}

class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
        super(name, id, dateOfBirth);
        this.licenseID = licenseID;
    }
}

class Reservation {
    constructor(reservationDate, employeeID, vehicleID, reservationID) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeID;
        this.vehicleId = vehicleID;
        this.reservationID = reservationID;
    }
}


const driver1 = new Driver("Yazan Ebrahim", 10001, new Date("2012-01-01"), "123456");
const driver2 = new Driver("Nada Mohammad", 10002, new Date("2001-12-04"), "789012");
const pilot1 = new Pilot("Mohannad Alhatame", 10003, new Date("2000-04-14"), "345678");
const pilot2 = new Pilot("Yazed Awadh Maqbul", 10004, new Date("2018-05-05"), "901234");

const car1 = new Car("Toyota Camry", "Toyota", 1001, "gas");
const car2 = new Car("Honda Civic", "Honda", 1002, "electric");
const car3 = new Car("Ford Mustang", "Ford", 1003, "gas");

const plane1 = new Plane("Boeing 747", "Boeing", 2001, "passenger");
const plane2 = new Plane("Airbus A320", "Airbus", 2002, "cargo");


const employees = [driver1, driver2, pilot1, pilot2];
const vehicles = [car1, car2, car3, plane1, plane2];
const reservations = [];

function makeReservation(employeeID, vehicleID) {
    const employee = findEmployeeById(employeeID);
    const vehicle = findVehicleById(vehicleID);
    if (employee instanceof Pilot && vehicle instanceof Car) {
        console.log(`
        Error: Reservation cannot be made. ❎
        Pilot ${employee.name} cannot drive a ${vehicle.name} car.
        `);
    } else if (employee instanceof Driver && vehicle instanceof Plane) {
        console.log(`
        Error: Reservation cannot be made. ❎
        Driver "${employee.name}" cannot fly a "${vehicle.name}" plane.
        `);
    } else {
        const reservation = new Reservation(new Date(), employeeID, vehicleID, 3000 + reservations.length + 1);
        reservations.push(reservation);
        console.log(`
        Reservation ${reservation.reservationID} made successfully. ✅
        ${employee.constructor.name} "${employee.name}" reserved ${vehicle.constructor.name} "${vehicle.name}".
        `);
    }
}

function findEmployeeById(id) {
    return employees.find(employee => employee.id === id);
}

function findVehicleById(id) {
    return vehicles.find(vehicle => vehicle.id === id);
}


makeReservation(10001, 1001);
makeReservation(10002, 2001);
makeReservation(10003, 2002);
makeReservation(10004, 1003);

const reservationDetails = reservations.map(reservation => {
    const employee = findEmployeeById(reservation.employeeId);
    const vehicle = findVehicleById(reservation.vehicleId);
    return {
        "Reservation ID": reservation.reservationID,
        "Reservation Date": reservation.reservationDate,
        "Employee Name": employee.name,
        "Employee Type": employee.constructor.name,
        "Vehicle Name": vehicle.name,
        "Vehicle Type": vehicle.type,
    };
});

console.log("\x1b[1mAll successful reservations:\x1b[0m"); // bold text
console.table(reservationDetails);