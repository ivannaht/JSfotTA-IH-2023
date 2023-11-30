// Home Work 7
console.log("Home Work 7");

// task 7.1
let newWindow = window.open("", "", "width=300,height=300");

setTimeout(() => newWindow.resizeTo(500, 500), 2000);

setTimeout(() => newWindow.moveTo(200, 200), 2000);

setTimeout(() => newWindow.close(), 2000);

