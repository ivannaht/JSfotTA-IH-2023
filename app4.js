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

//task 4.2
function checkAge() {
    let userAge = prompt("Please enter your age");
    console.log(`age = ${userAge}`);
    if (userAge === "" )  {
        throw new Error ("The field is empty! Please enter your age");
    } else if (isNaN(userAge)) {
        throw new Error ("Non-numeric value was entered! Please enter your age as a number"); 
    } else if (userAge < 14) {
        throw new Error ("You are not permitted to watch the movie due to insufficient age");      
    }
    alert("Your age is fine. You get access to watching the movie!");
}
try {
    checkAge();
    } catch (e) {
        console.error(`${e.name}: ${e.message}`);
        alert(e.message);
    } finally {
        console.log("Function checkAge was run");
    }
    