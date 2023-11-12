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

if (isNaN(inputNumber)) {
    console.log(`You entered ${inputNumber}. It is not a number`);
} else if (inputNumber % 2 == 0 && inputNumber > 0) {
    console.log(`You entered ${inputNumber}. This number is even and positive`);
} else if (inputNumber % 7 == 0) {
    console.log(`You entered ${inputNumber}. This number is a multiple of 7`);
} else {
    console.log(`You entered ${inputNumber}. This number is incorrect`);
}
