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

// task4
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