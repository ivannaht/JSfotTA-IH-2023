// Home Work 7
console.log("Home Work 7");

// task 7.1
let newWindow = window.open("", "", "width=300,height=300");

function windowManipulations(newWindow) {    
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

windowManipulations(newWindow);

// task 7.2
function changeCSS() {
    let styledText = document.querySelector("#text-7-2");
    styledText.style.color = "orange";
    styledText.style.fontSize = "20px";
    styledText.style.fontFamily = 'Comic Sans MS';
}
