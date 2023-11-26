// Home Work 6
console.log("Home Work 6");

// task 6.1
document.getElementById("test").innerHTML = "Last";
document.getElementsByTagName("div")[0].innerHTML  = "Last";
document.querySelector("#test").innerHTML  = "Last";

// task 6.2
let petImage = document.getElementsByClassName("image")[0];
petImage.src = "cat.jpg";
alert(petImage.outerHTML);  

// task 6.3
const allElements = document.querySelectorAll("#text > p");
allElements.forEach((element, index) => console.log(`Selector text ${index}: ${element.innerHTML}`));

// task 6.4
// way 1
let list = document.querySelector("#list");
let first = list.firstElementChild;
let fifth = list.lastElementChild;
let second = first.nextElementSibling;
let fourth = fifth.previousElementSibling;
let third = list.children[2];
alert(`Output result: ${first.innerHTML}, ${fifth.innerHTML}, ${second.innerHTML}, ${fourth.innerHTML}, ${third.innerHTML}`);

// way 2
const list2 = document.querySelectorAll("#list > li");
alert(`Output result: ${list2[0].innerHTML}, ${list2[4].innerHTML}, ${list2[1].innerHTML}, ${list2[3].innerHTML}, ${list2[2].innerHTML}`);

