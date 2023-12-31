downloadButton = document.querySelector("#btn-download");
const books = [
{"title": "Java in a Nutshell", "author": "David Flanagan"},
{"title": "JavaScript and HTML5 Now", "author": "Kyle Simpson"},
{"title": "jQuery in Action", "author": "John Resig"},
{"title": "DOM Scripting", "author": "Jeremy Keith "}
]

async function downloadBooks(e) {
    const url = "http://127.0.0.1:5500/page11-2.html";
    let response = await fetch(url);
    if (!response.ok) 
        throw new Error(`HTTP error: ${response.status}`);          
    console.log(response);
    document.write(`<ul id="list"></ul`);
    const list = document.querySelector("#list");
    let newContent;
    let newLi;
    books.forEach(book => {    
        newContent = document.createTextNode(`${book.author}`);
        newLi = document.createElement("li");
        newLi.appendChild(newContent);
        list.appendChild(newLi);    
    });
}

downloadButton.addEventListener("mousedown", (e) => downloadBooks(e));
