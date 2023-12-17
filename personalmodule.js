
const os = require("os"); 
const sysUser = os.userInfo().username;

function greeting() {
    const today = new Date();
    const currentTime = today.getHours();
    let greeting;
    if (currentTime > 5 && currentTime <= 11) {
        greeting = "Good morning"; 
    } else if (currentTime > 11 && currentTime <= 17) {
        greeting = "Good day"; 
    } else if (currentTime > 17 && currentTime <= 23) {
        greeting = "Good evening"; 
    } else {
        greeting = "Good night";
    }
    return `<p>${today}</p>
    <p>${greeting}, ${sysUser}</p>`;
}

module.exports = greeting();
