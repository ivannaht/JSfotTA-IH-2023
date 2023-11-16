// Home Work 3
console.log("Home Work 3");

// task 3.1
const arrayOfNumbers = [2, 3, 4, 5];

function calcProductFor(arrayOfNumbers) {
    let product = 1;
    for (let num of arrayOfNumbers) {
        product *= num;    
    }
    return product;
}

console.log(`The product of the elements of this array is ${calcProductFor(arrayOfNumbers)}. Here was used "for" loop`);

function calcProductWhile(arrayOfNumbers) {
    let i = 0;
    let product = 1 ;
    while (i < arrayOfNumbers.length) {
        product *= arrayOfNumbers[i];
        i++;    
    }
    return product;
}

console.log(`The product of the elements of this array is ${calcProductWhile(arrayOfNumbers)}. Here was used "while" loop`);

// task 3.2
document.write("<h1>check whether the number is even or odd</h1>");

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        document.write("<p>",`${i} is even`,"</p>");
    } else {
        document.write("<p>",`${i} is odd`,"</p>");
    }
}

// task 3.3
function createRandArray(k) {
let randArray = [];
    for (let i = 0; i <= k; i++) {
    randomInteger = Math.floor(Math.random() * 500) + 1;
    randArray.push(randomInteger);
    }
    return randArray;
}

console.log(createRandArray(5));

// task 3.4
raiseToDegree();

function raiseToDegree() {
    let inputNumber;
    let inputPower;
    let a;
    let b;
    let result;
    let message;
    let inputForm = document.getElementById("inputForm");
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault();
        inputNumber = document.getElementById("number");
        inputPower = document.getElementById("power");
        a = inputNumber.value;
        b = inputPower.value;
        result = a ** b;
        message = `${a} in power ${b} is equal to ${result}`;
        console.log(message);
        return message
    });
}

// task 3.5
let inputValues1 = prompt("Please enter several integer numbers delimited by comma");
const inputArray1 = inputValues1.split(',');
function findMin(...inputArray1) {
    return Math.min(...arguments);
}
console.log(`The minimal number in array [${inputArray1}] is ${findMin(...inputArray1)}`);

// task 3.6
let inputValues2 = prompt("Please enter several integer numbers delimited by comma");
const inputArray2 = inputValues2.split(',');
function findUnique(...inputArray2) {
    const uniqueArray =  [...new Set(inputArray2)];
    return JSON.stringify(uniqueArray) === JSON.stringify(inputArray2);
}
console.log(`All numbers in array [${inputArray2}] are unique? ${findUnique(...inputArray2)}`);

// task 3.7
let inputValues3 = prompt("Please enter several integer numbers delimited by comma");
let xx = prompt("Please enter the number of last elements to extract");
const inputArray3 = inputValues3.split(',');
function returnLastElements(inputArray3, xx = 1) {
    return inputArray3.slice(-xx, inputArray3.length);
};
console.log(`The last ${xx} elements in [${inputArray3}] are ${returnLastElements(inputArray3, xx)}`);

// task 3.8
let inputString = prompt("Please enter any sentence");
function convertFirstLetter(inputString) {
    const arrayOfString = inputString.split(" ");
    let newString = arrayOfString.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    return newString;    
}
console.log(`Old sentence: ${inputString}, New sentence: ${convertFirstLetter(inputString)}`)
