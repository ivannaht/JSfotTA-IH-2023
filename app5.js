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
