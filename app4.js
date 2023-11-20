// Home Work 4
console.log("Home Work 4");

// task 4.1
let width = +prompt("Please enter the width of rectangle");
let height = +prompt("please enter the height of rectangle");
console.log(`width = ${width} , height = ${height}`);

function calcRectangleArea(width, height) {
    let rectangleArea = width * height;
    if (isNaN(width) || isNaN(height)) {
        throw new Error ("Non-numeric values were entered");      
    }
    return rectangleArea;
}
try {
let result = calcRectangleArea(width, height);
console.log(result);
} catch (e) {
    console.error(`${e.name}: ${e.message}`);
} finally {
    console.log("Function calcRectangleArea was run");
}

