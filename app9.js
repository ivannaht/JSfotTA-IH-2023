// Home Work 9
console.log("Home Work 9");

// task 9.1
function getPromise(message, delay) {
    return new Promise(resolve => setTimeout(() => {resolve(message)}, delay));
}

getPromise("test promise", 2000).then((data) => console.log(data));
    