// task 2
console.log("Hontaryk");

// task 3
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

// task 4
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

// task 5
let isAdult = confirm("Do you reach the age of majority?");
console.log(isAdult);

// task 6
let firstName;
let lastName;
let studyGroup;
let yearOfBirth;
firstName = "Top"
lastName = 'Secret'
studyGroup = "JS for TA 2023"
yearOfBirth = 2000;
let maritalStatus = false;
typeOfFirstName = typeof firstName;
typeOfLastName = typeof lastName;
typeOfStudyGroup = typeof studyGroup;
typeOfYearOfBirth = typeof yearOfBirth;
typeOfMaritalStatus = typeof maritalStatus;
console.log(typeOfYearOfBirth, typeOfMaritalStatus, typeOfFirstName, typeOfLastName, typeOfStudyGroup);
badHabits = null;
drivingLicence = undefined;
console.log(typeof badHabits, typeof drivingLicence)

// task 7
username = prompt("Please enter your username", "username");
email = prompt("Please enter your email address", "email");
password = prompt("Please enter your password", "password");
welcomeMessage = `Dear ${username}, your email is ${email}, your password is ${password}.`;
document.write("<h1>welcome!</h1>");
document.write(welcomeMessage);

// task 8
let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInMonth = 30.5;
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
