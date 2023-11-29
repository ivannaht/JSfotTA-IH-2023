// task 6.7
document.body.onload = addElement;

function addElement() {
// create the new elements
  const newMain = document.createElement("main");
  newMain.className = "mainClass check item";
  const newDiv = document.createElement("div");
  newDiv.id = "myDiv";
  const newP = document.createElement("p");

// and give it content
  const newContent = document.createTextNode("First paragraph");

// add the child node to the newly created element
    newP.appendChild(newContent);
    newDiv.appendChild(newP);
    newMain.appendChild(newDiv);

// add the newly created element and its content into the DOM
    const currentMain = document.getElementById("main");
    document.body.insertBefore(newMain, currentMain);
}
