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
