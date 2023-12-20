// Home Work 12
console.log("Home Work 12");
let regExp;

// task 12.1
function upperCase(phrase) {
    regExp = /^[A-Z]/;
    if (regExp.test(phrase)) {
        return `String "${phrase}" starts with uppercase character`
    } else {
        return `String "${phrase}" does not start with uppercase character`
    }
}

console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));

// task 12.2
/* in this task valid email address is considered as
Acceptable email prefix formats:
- the first character should be a letter in lowercase or uppercase
- one or more characters are allowed as an email prefix
- the second character can be a letter, a digit, an underscore, a period, or a dash.
@ should be used once in the middle
Acceptable email domain formats:
- two or more alphanumeric or underscore followed by a dot
- the last portion of the domain must be for example, com, org, net, gov, cc
*/

function checkEmail(email) {
    regExp = /^[a-zA-Z]+([-.]|\w)*@\w{2,}\.(com|org|net|gov|cc)$/;
    return regExp.test(email)
}

console.log(checkEmail("Qmail2@gmail.com")); // true
console.log(checkEmail("Qm@gmail.com")); // true
console.log(checkEmail("Qm@2_lll.com")); // true
console.log(checkEmail("Q-hjh.j@gmail.com")); // true
console.log(checkEmail("Q2@g8.gov")); // true
console.log(checkEmail("q_@2f.cc")); // true
console.log(checkEmail("q-@2f.cc")); // true
console.log(checkEmail("q.@2f.cc")); // true
console.log(checkEmail("@2@g.com")); // false
console.log(checkEmail("Qmail2gmail.com")); // false
console.log(checkEmail("Qmail2@gmailcom")); // false
console.log(checkEmail("Qmail2@gmail.c")); // false
console.log(checkEmail("_q@2.cc")); // false
console.log(checkEmail("q@-.cc")); // false
