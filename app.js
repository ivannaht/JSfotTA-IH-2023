// Home Work 1
console.log("Home Work 1");

// task 1.2
console.log("Hontaryk");

// task 1.3
let quality;
let quantity;
quality = "high";
quantity = 5;
option1 = `quality: ${quality} and quantity: ${quantity}`;
document.write("<h1>option1</h1>");
document.write(option1);
quality = quantity;
option2 = `quality: ${quality} and quantity: ${quantity}`;
document.write("<h1>option2</h1>");
document.write(option2);

// task 1.4
let film = {
    name: "Finding Nemo",
    releaseYear: 2003,
    isInteresting: true,
    actors: undefined,
    budjet: null
}

console.log(typeof film.name);
console.log(typeof film.releaseYear);
console.log(typeof film.isInteresting);
console.log(typeof film.actors);
console.log(typeof film.budjet);

// task 1.5
let isAdult = confirm("Do you reach the age of majority?");
console.log(isAdult);

// task 1.6
let firstName;
let lastName;
let studyGroup;
let yearOfBirth;

firstName = "Top";
lastName = 'Secret';
studyGroup = "JS for TA 2023";
yearOfBirth = 2000;

let maritalStatus;
maritalStatus = false;

typeOfFirstName = typeof firstName;
typeOfLastName = typeof lastName;
typeOfStudyGroup = typeof studyGroup;
typeOfYearOfBirth = typeof yearOfBirth;
typeOfMaritalStatus = typeof maritalStatus;
console.log(typeOfYearOfBirth, typeOfMaritalStatus, typeOfFirstName, typeOfLastName, typeOfStudyGroup);

let badHabits;
badHabits = null;
let drivingLicence;

console.log(typeof badHabits, typeof drivingLicence);

// task 1.7
let username = prompt("Please enter your username");
let email = prompt("Please enter your email address");
let password = prompt("Please enter your password");
let welcomeMessage = `Dear ${username}, your email is ${email}, your password is ${password}.`;
document.write("<h1>welcome!</h1>");
document.write(welcomeMessage);

// task 1.8
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInMonth = 30.5;
let secondsInHour;
let secondsInDay;
let secondsInMonth;
secondsInHour = secondsInMinute * minutesInHour;
secondsInDay = secondsInHour * hoursInDay;
secondsInMonth = secondsInDay * daysInMonth;
document.write("<h1>seconds calculation</h1>");
document.write("<p>",`An hour equals ${secondsInHour} seconds`, "</p>");
document.write("<p>",`A day equals ${secondsInDay} seconds`, "</p>");
document.write("<p>",`A month equals ${secondsInMonth} seconds`, "</p>");

// Home Work 2
console.log("Home Work 2");

// task 2.1
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x + y);
console.log(res3);
console.log(typeof res3);

let res4 = parseInt(x === y);
console.log(res4);
console.log(typeof res4);

// task 2.2
let inputNumber;

inputNumber = prompt("Please enter a number");

if (inputNumber === null || inputNumber === true || inputNumber === false || inputNumber === "" || isNaN(inputNumber)) {
    console.log(`You entered ${inputNumber}. It is not a number. It is ${typeof inputNumber}`);
} else if (inputNumber % 2 === 0 && inputNumber % 7 === 0 && inputNumber > 0) {
    console.log(`You entered ${inputNumber}. This number is even and a multiple of 7 and positive`);
} else if (inputNumber % 2 === 0 && inputNumber > 0) {
    console.log(`You entered ${inputNumber}. This number is even and positive.`);
} else if (inputNumber % 7 === 0) {
    console.log(`You entered ${inputNumber}. This number is a multiple of 7.`);
} else {
    console.log(`You entered ${inputNumber}. This number is incorrect`);
}

// task 2.3
const arrayFirst = [];
arrayFirst[0] = 12345;
arrayFirst[1] = "Any line";
arrayFirst[2] = true;
arrayFirst[3] = null;

document.write("<h1>arrays</h1>");
document.write("<p>",`The newly created array has ${arrayFirst.length} elements`,"</p>");

let inputElement;
inputElement = prompt("Please enter any value");

arrayFirst.push(inputElement);
document.write("<p>",`The fifth element is ${arrayFirst[4]}`,"</p>");

arrayFirst.shift();
document.write("<p>",`Updated array is [ ${arrayFirst} ]`,"</p>");

// task 2.4
const cities = [" Rome ", " Lviv ", " Warsaw "];
let cities_str;
cities_str = cities.join("*");
console.log(cities_str);

// task 2.5 used variable is Adult from task 1.5
if (isAdult) {
    alert("You have reached the age of majority");
} else {
    alert("You are still too young");
}

// task 2.6
const arrayTriangle = [];
let inputSide;
let s = 0;

for (let i = 0; i < 3; i++) {
inputSide = prompt(`Please enter the length of the ${i + 1} side of the triangle`);
    if (inputSide === null || inputSide === true || inputSide === false || inputSide === "" || isNaN(inputNumber)) {
         console.log(`You entered ${inputSide}. Incorrect data`);
    } else {
        arrayTriangle.push(inputSide);
        s += arrayTriangle[i] * 0.5;        
    }
}

// Heron's formula
let a = parseFloat(arrayTriangle[0]);
let b = parseFloat(arrayTriangle[1]);
let c = parseFloat(arrayTriangle[2]);
let triangleArea;

if (arrayTriangle.length === 3) {
triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(`The area of triagle is ${triangleArea.toFixed(3)}`);
} else {
    console.log(`You entered ${arrayTriangle}. Incorrect data`);
}

if (arrayTriangle.length === 3) {
    if (triangleArea === 0.5 * a * b){
    console.log("This is right-angled triangle");
        } else if (triangleArea === 0.5 * a * c){
    console.log("This is right-angled triangle");
        } else if (triangleArea === 0.5 * b * c){
    console.log("This is right-angled triangle");
        } else {
    console.log("This triangle is not right-angled");
     }
} else {
    console.log(`You entered ${arrayTriangle}. Incorrect data`);
}

// task 2.7
const today = new Date();
const currentTime = today.getHours();

// Switch statement
switch(true) {
    case (currentTime > 5 && currentTime <= 11):
        alert("Good morning!"); 
        break;
    case (currentTime > 11 && currentTime <= 17):
        alert("Good day!"); 
        break;
    case (currentTime > 17 && currentTime <= 23):
        alert("Good evening!"); 
        break;
    default:
        alert("Good night!");
}

// if statement
if (currentTime > 5 && currentTime <= 11) {
    alert("Good morning!"); 
} else if (currentTime > 11 && currentTime <= 17) {
    alert("Good day!"); 
} else if (currentTime > 17 && currentTime <= 23) {
    alert("Good evening!"); 
} else {
    alert("Good night!");
}



// task 3.4 is in a separate file app34.js

// task 3.5

let inputValues = prompt("Please enter several integer number delimited by comma");
const inputArray = inputValues.split(',');
function findMin(...inputArray) {
    return Math.min(...arguments);
}
console.log(inputValues);
console.log(inputArray);
console.log(findMin(...inputArray));