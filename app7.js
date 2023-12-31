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

// task 7.4
function deleteSelectedOption() {
    let dropdownForm = document.querySelector("#dropdownForm");
    let dropdown = document.querySelector("#dropdown-7-4");   

    dropdownForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let options = document.querySelectorAll("#dropdown-7-4 > option");        
        console.log(`You had ${[...options].length - 1} friends`);        
        for (let option of options) {
            if (option.selected){                
                if (option.value !== "") {                    
                    option.remove();
                    dropdown.selectedIndex = 0;
                    console.log(`${option.textContent} is chosen and deleted`);                    
                }
            }
        }     
    });
}  

deleteSelectedOption();

// task 7.5
let buttonSection = document.querySelector("#task-7-5");
let buttonLive = document.querySelector("#btn-7-5");
let currentP = document.querySelector("#text-7-5");

const displayEvent = (e) => {
    var message;
    switch(e.type) {
        case "mousedown": 
            message = "I was pressed!";            
            break;
        case "mouseover":
            message = "Mouse on me!";
            break;
        case "mouseout":
            message = "Mouse is not on me!";
            break;
    } 
const newP = document.createElement("p");
const newContent = document.createTextNode(message);
newP.appendChild(newContent);
buttonSection.insertBefore(newP, currentP);
}

const events = ["mousedown", "mouseover", "mouseout"];
events.forEach(event => buttonLive.addEventListener(event, displayEvent));

// task 7.6
let windowInfo = document.querySelector("#text-7-6-2");
const windowEvent = (e) => {    
    if (e.type === "resize") 
        windowInfo.innerHTML = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
}

window.addEventListener("resize", windowEvent);

// task 7.7
const locations = {
Gernamy: ["Berlin", "Stuttgart", "Munich", "Hamburg", "Cologne", "Frankfurt"],
USA: ["New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Dallas"], 
Ukraine: ["Kyiv", "Kharkiv", "Dnipro", "Lviv", "Mykolaiv", "Vinnytsia"]
};

function selectCountryCity() {
    let locationForm = document.querySelector("#form-7-7");
    let countryDropdown = document.querySelector("#country");
    let cityDropdown = document.querySelector("#cities");
    let locationSection = document.querySelector("#task-7-7-row-2");

    const addCities =  (e) => {
        e.preventDefault();
        if (e.target === countryDropdown) {
            locationSection.innerHTML = "<p></p>";
            cityDropdown.innerHTML = `<option value="">Please select city</option>`;
            if (e.target.selectedIndex === 1 ) {
                citiesList = locations.Gernamy;
            }  else if (e.target.selectedIndex === 2 ) {
                citiesList = locations.USA;
            }  else if (e.target.selectedIndex === 3 ) {
                citiesList = locations.Ukraine;
            }    

            for (city of citiesList) {        
            let newOption = document.createElement("option");
            newOption.value = city.toLowerCase();
            newOption.textContent = city;
            cityDropdown.appendChild(newOption);
            }
        }
    }
    
    const addLocationText = (e) => {
        e.preventDefault();
        if (e.target === cityDropdown) {
            let selectedCountryIndex = countryDropdown.selectedIndex - 1;
            let selectedCountry = Object.keys(locations)[selectedCountryIndex];
            let selectedCityIndex = cityDropdown.selectedIndex - 1;
            let selectedCity =  Object.values(locations)[selectedCountryIndex][selectedCityIndex];
            let newText = document.createTextNode(`${selectedCountry}, ${selectedCity}`);
            let newP = document.createElement("p");
            newP.appendChild(newText);
            locationSection.appendChild(newP);  
        }    
    }
    locationForm.addEventListener("change", addCities);
    locationForm.addEventListener("change", addLocationText);
}

selectCountryCity();
