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
