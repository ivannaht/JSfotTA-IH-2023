// Home Work 7
console.log("Home Work 7");

// task 7.1
let newWindow = window.open("", "", "width=300,height=300");

function windowManipulations() {    
    setTimeout(() => {
        setTimeout (() => {
            setTimeout (() => {
                newWindow.close();
                console.log("close"); 
            }, 2000);     
            newWindow.moveTo(200, 200); 
            console.log("move"); 
        }, 2000);
        newWindow.resizeTo(500, 500);
        console.log("resize");   
    }, 2000);
}

windowManipulations();

// task 7.2
function changeCSS() {
    let styledText = document.querySelector("#text-7-2");
    styledText.style.color = "orange";
    styledText.style.fontSize = "20px";
    styledText.style.fontFamily = 'Comic Sans MS';
}


// task 7.3
let button1 = document.querySelector("#task-7-3-1");
let button2 = document.querySelector("#task-7-3-2");
let button3 = document.querySelector("#task-7-3-3");
let link = document.querySelector("a[href='url-7-3']");

function changeBackgroundColor(color) {
    return () => {document.body.style.setProperty("background-color", color)};   
}

button1.onclick =  changeBackgroundColor("blue");
button2.ondblclick = changeBackgroundColor("pink");
button3.onmousedown = changeBackgroundColor("brown");
button3.onmouseup = changeBackgroundColor("white");
link.onmouseover = changeBackgroundColor("yellow");
link.onmouseout = changeBackgroundColor("white");
