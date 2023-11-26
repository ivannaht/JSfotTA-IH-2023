// Home Work 5
console.log("Home Work 5");

// task 5.1
let fruit = {
    name: "Apple",
    color: "Red",
    taste: "Sweet"
};

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

console.log(propsCount(fruit));

fruit.name = "Lemon";
fruit.color = "Yellow";
fruit.taste = "Sour";
fruit.usage = "For tea";

console.log(propsCount(fruit));

// task 5.2
let ukrainianNationalHolidays = {
    name: "Christmas",
    month: "December",
    day: 25,
    isReligious: true,
    traditions: ["Kutia", "Koliadky", "Vertep"]
};

function showProps(obj) {
    Object.keys(obj).forEach((key, index) => console.log(`${index}: ${key}`));
    Object.values(obj).forEach((value, index) => console.log(`${index}: ${value}`));
}

showProps(ukrainianNationalHolidays);

// task 5.3
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    showFullName() {
        return `${this.firstNmae} ${this.lastName}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, year) {
        super(firstName, lastName);
        this.year = year;
    }
    
    showFullName(middleName) {
        this.middleName = middleName;
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }

    showCourse() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        try {
            if (this.year >= currentYear - 6) {
            return currentYear - this.year;
            } else {
            throw new RangeError("The year is not valid");
            }
        } catch(e) {
            console.error(`${e.name}: ${e.message}`);
        }
    }
}

const stud1 = new Student("Anna", "Bojko", 2020);
console.log(stud1.showFullName("Ivanivna"));
console.log("Current course: " + stud1.showCourse());

// task 5.4
class Worker {
    #experience = 1.2;

    set experience(value) {
        try {
            if (value <= 1) {
                throw new RangeError("Experience must be greater than 1");
            } 
            this.#experience = value;                   
        } catch(e) {
            console.error(`${e.name}: ${e.message}`);
        }
    }

    get experience() {
        return this.#experience;
    }
      
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience() {
        return this.#experience * this.showSalary();
    }

    showExp() {
        return this.#experience;
    }

    toString() {
        let info = `Full Name: ${this.fullName}\n 
        Day Rate: ${this.dayRate}\n 
        Working Days: ${this.workingDays}\n 
        Salary: ${this.showSalary().toFixed(2)}\n
        New Experience: ${this.showExp()}\n 
        Salary With Experience: ${this.showSalaryWithExperience().toFixed(2)}`;
        return info;
    }
}

class Workers {
    constructor(workers) {
        this.workers = workers;
    }

    showAllWorkers() {
        for (const worker of this.workers) {
            console.log(worker.toString());
        }
    }

    sort() {
        this.workers.sort((a, b) => 
        a.showSalaryWithExperience() - b.showSalaryWithExperience());
        return this.workers;
    }

    showSortedWorkers(){
        const sortedList = this.sort();
        console.log("Sorted salary:");
        sortedList.forEach(worker => console.log(`${worker.fullName}: ${worker.showSalaryWithExperience().toFixed(2)}`));
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New Experience: " + worker1.showExp());
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log("New Experience: " + worker1.showExp());
worker1.showSalaryWithExperience();

let worker2 = new Worker("Jane Johnson", 25, 22);
worker2.experience = 1.7;
let worker3 = new Worker("Kendall Becker", 25, 24);
worker3.experience = 1.8;
let worker4 = new Worker("Sally Hadson", 23, 20);
worker4.experience = 1.9;
let worker5 = new Worker("Emir Murphy", 20, 23);
worker5.experience = 2.0;
let worker6 = new Worker("Andy Carson", 27, 19);
worker6.experience = 1.1;
let worker7 = new Worker("Jenna Palmer", 20, 20);
worker7.experience = 1.3;

const allWorkers = [worker1, worker2, worker3, worker4, worker5, worker6, worker7];
const listOfWorkers = new Workers(allWorkers);
listOfWorkers.showAllWorkers();
listOfWorkers.showSortedWorkers();

// task 5.5
class GeometricFigure {
    getArea() {
        return 0;
    }
    
    toString() {
        return Object.getPrototypeOf (this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea() {
        let s = 0.5 * (this.a + this.b + this.c);
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }
    
    getArea() {
        return Math.pow(this.a, 2);
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }

    getArea() {
        return Math.PI * Math.pow(this.r, 2);
    }
}

function handleFigures(figures) {
    const eachFigure = figures.map((figure, index) => 
    `Geometric figure ${index + 1}: ${figure.toString()} - area: ${figure.getArea().toFixed(2)}`);

    let areas = figures.map(figure => figure.getArea());
    let totalArea = areas.reduce((total, area) => total += area);
    return eachFigure.join("\n ") + `\n${totalArea.toFixed(2)} // total area`;    
}

const figures = [new Triangle(4, 5, 6), new Square(7), new Circle(5)]; 
console.log(handleFigures(figures));
