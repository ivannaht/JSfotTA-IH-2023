// Home Work 9
console.log("Home Work 9");

// task 9.1
function getPromise(message, delay) {
    return new Promise(resolve => setTimeout(() => resolve(message), delay));
}

getPromise("test promise", 2000).then((data) => console.log(data));

// task 9.2
function calcArrProduct(arr) {
    return new Promise((resolve) => {
        let result = 1;
        for (let a of arr) {  
            if (typeof a !== "number") {
                result = "Error! Incorrect array!";
                break;                  
            }
            result *= a;            
        }
        resolve(result);
    });
}

calcArrProduct([3, 4, 5]).then(result => console.log(result));
calcArrProduct ([5, "user2", 7, 12]).then(result => console.log(result));

// task 9.3
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
const N = 5;

function showNumbers() {
    for (let i = 0, p = Promise.resolve(); i <= 10; i++) {
        let time = Math.floor(Math.random() * N * 1000);
        p = p.then(() => delay(i, time))
            .then(() => console.log(`time: ${time}, i: ${i}`));                  
    }        
}   

showNumbers();

// task 9.4
async function showNumbersAwait() {
	for (let i = 0; i <= 10; i++) {
        let time = Math.floor(Math.random() * N * 1000); 
        let result = await delay(i, time);
        console.log(`time: ${time}, i: ${result}`);                  
    }
}

showNumbersAwait();
