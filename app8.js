// Home Work 8
console.log("Home Work 8");

// task 8.1
const arr = ["Tom", "Sam", "Ray", "Bob"];
const [x, y, , ...z] = arr;
console.log(x);
console.log(y);
console.log(z);

// task 8.2
let data = {
names: ["Sam", "Tom", "Ray", "Bob"],
ages: [20, 24, 22, 26]
};

let {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);
