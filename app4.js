// Home Work 4
console.log("Home Work 4");

// task 4.1
let width = +prompt("Please enter the width of rectangle");
let height = +prompt("please enter the height of rectangle");
console.log(`width = ${width} , height = ${height}`);

function calcRectangleArea(width, height) {
    let rectangleArea = width * height;
    if (isNaN(width) || isNaN(height)) {
        throw new Error("Non-numeric values were entered");      
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
        throw new Error("The field is empty! Please enter your age");
    } else if (isNaN(userAge)) {
        throw new Error("Non-numeric value was entered! Please enter your age as a number"); 
    } else if (userAge < 14) {
        throw new Error("You are not permitted to watch the movie due to insufficient age");      
    }
    alert("Your age is fine. You get access to watch the movie!");
}
try {
    checkAge();
    } catch (e) {
        console.error(`${e.name}: ${e.message}`);
        alert(e.message);
    } finally {
        console.log("Function checkAge was run");
    }

//task 4.3
class MonthException extends Error {
    constructor(message) {
      super(message);
      this.name = "MonthException";
    }
  }

let month = +prompt("Please enter the month as a number");
console.log(`month: ${month}`);
 
function showMonthName(month) {
    var months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];  
    try {    
    if (month > 0 && month <= 12 && Number.isInteger(month)) {
            return months[month - 1];         
    } else {
            throw new MonthException("Incorrect month number");
    }
    } catch (e) {
    if (e instanceof MonthException) {
    console.error(`${e.name}: ${e.message}`);
    return `${e.name}: ${e.message}, month: ${month}`;
    }
    } finally {
    console.log("Function showMonthName was run");
    }
}

console.log(showMonthName(month));

//task 4.4
const ids = [];
let negativeId;

class User {
    constructor(id) {
    this.id = id;
    }
}

function showUser(id) {
    if (id < 0) {
        negativeId = id;
        throw new Error("ID must not be negative");                 
    } else {
        let newUser = new User(id);
        return newUser;  
    }
}

function showUsers(ids) {
    var result = [];
        ids.forEach((id) => { 
            try {
                currentUser = showUser(id);
                result.push(currentUser);
            } catch (e) {
                console.error(`${e.name}: ${e.message}`);
                console.log(`${e.name}: ${e.message}: ${negativeId}`);
            } finally {
                console.log("Function showUsers was run");
            }                
        });
        return result;     
}

console.log(showUsers([7,-12,44,22]));
