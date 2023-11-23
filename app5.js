// task 5.1
let fruit = {
    name: "Apple",
    color: "Red",
    taste: "Sweet"
}

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
}

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
        return currentYear - this.year;
    }
}

const stud1 = new Student("Anna", "Bojko", 2020);
console.log(stud1.showFullName("Ivanivna"));
console.log("Current course: " + stud1.showCourse());
