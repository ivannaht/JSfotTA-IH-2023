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
    regExp = /^[a-zA-Z]+\w*[.-]?\w+@\w{2,}\.(com|org|net|gov|cc)$/;
    return regExp.test(email)
}

console.log(checkEmail("Qmail2@gmail.com")); // true
console.log(checkEmail("Qm@gmail.com")); // true
console.log(checkEmail("Qm@2_lll.com")); // true
console.log(checkEmail("Qh2jh.7j@gmail.com")); // true
console.log(checkEmail("Q2@g8.gov")); // true
console.log(checkEmail("q_j2@2f.cc")); // true
console.log(checkEmail("q-j2@2f.cc")); // true
console.log(checkEmail("q.j2@2f.cc")); // true
console.log(checkEmail("@2@g.com")); // false
console.log(checkEmail("Qmail2gmail.com")); // false
console.log(checkEmail("Qmail2@gmailcom")); // false
console.log(checkEmail("Qmail2@gmail.c")); // false
console.log(checkEmail("_jq@2.cc")); // false
console.log(checkEmail("q@-.cc")); // false
console.log(checkEmail("q.-j@ddd.com")); // false

// task 12.3
/* in this task the regular expression finds:
- one letter d or D at the begginig (required)
- none or any letters b or B after first d or D (optional)
- none or one d or D after b or B at the end (optional) */
function findLetter(phrase) {
    regExp = /^db*(bd)?$/ig;
    const result = new Set();
    let word;
    let i = 0;
    while (i < phrase.length) {
        for (let k=0; k <= phrase.length; k++) {
        word = phrase.slice(i, i + k).match(regExp);
            if (word !== null) 
                result.add(word.toString());            
        }
        i++;
    }
    return [...result];
}

console.log(findLetter("cdbBdbsbz")); // ['d', 'db', 'dbB', 'dbBd']
console.log(findLetter("dddiiiidbdbdBBdbDjjjjdBbddbbDbBbd")); // ['d', 'db', 'dbd', 'dB', 'dBB', 'dBBd', 'dbD', 'D', 'dBb', 'dBbd', 'dbb', 'dbbD', 'Db', 'DbB', 'DbBb', 'DbBbd']
console.log(findLetter("bbbDbbBbbbDDdbBid")); // ['D', 'Db', 'Dbb', 'DbbB', 'DbbBb', 'DbbBbb', 'DbbBbbb', 'DbbBbbbD', 'd', 'db', 'dbB']

// task 12.4
function swapPlaces(phrase) {
    regExp = /(\S+)\s+(\S+)/;
    return phrase.replace(regExp, `$2, $1`);
}

console.log(swapPlaces("Java Script"));
console.log(swapPlaces("   Java    Script  "));
console.log(swapPlaces("JS! 100%"));

// task 12.5
function validateCard(cardNumber) {
    regExp = /(\d{4})-(\d{4})-(\d{4})-(\d{4})/;
    if (regExp.test(cardNumber)) {
        return `${cardNumber} is correct`;
    } else {
        return `${cardNumber} is not correct`;
    } 
}

console.log(validateCard("9999-9999-9999-9999"));
console.log(validateCard("9-9-9-9"));
console.log(validateCard("9999-"));
console.log(validateCard("9999"));
console.log(validateCard("---"));

// task 12.6
/* Requirements :
- Numbers (0-9).
- Only Latin letters in uppercase (A-Z) and lowercase (a-z) cases.
- Only “_” and “-” symbols are allowed in the email body . But they cannot be the 1st character of an email.
- The symbol “-” cannot be repeated. */

function validateEmail(email) {
regExp = /^\w[^_]\w*[-]?\w+@\w{2,}\.com$/;
    if (regExp.test(email)) {
        return `${email} Email is correct`;
    } else {
        return `${email} Email is not correct`;
    } 
}

console.log(validateEmail("my_mail@gmail.com")); // Email is correct
console.log(validateEmail("#my_mail@gmail.com")); // Email is correct
console.log(validateEmail("my_ma--il@gmail.com")); // Email is correct
console.log(validateEmail("my_ma-il@gmail.com")); // Email is correct
console.log(validateEmail("8n-_@gmail.com")); // Email is correct
console.log(validateEmail("8n__@gmail.com")); // Email is correct
console.log(validateEmail("-8n-_@gmail.com")); // Email is not correct
console.log(validateEmail("_8n-_@gmail.com")); // Email is not correct
console.log(validateEmail("8n--@gmail.com")); // Email is not correct
console.log(validateEmail("8n-*@gmail.com")); // Email is not correct
