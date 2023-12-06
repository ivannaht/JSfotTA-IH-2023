// Home Work 8
console.log("Home Work 8");

// task 8.1
const arr = ["Tom", "Sam", "Ray", "Bob"];
const [x, y, , ...z] = arr;
console.log(x);
console.log(y);
console.log(z);

// task 8.2
let data = {
names: ["Sam", "Tom", "Ray", "Bob"],
ages: [20, 24, 22, 26]
};

let {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

// task 8.3
function mul(...data) {
    let numbers = 0;
        let result = data.reduce((prod, arg) => {         
        if (typeof arg === "number") {
            numbers++;
            return prod * arg;
        } else
            return prod;
    }, 1);
    if (numbers === 0) result = 0;
return result;
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null , "str", false , true));

// task 8.4
let server = {
    data: 0,
    convertToString: function(callback) {
        callback(() => `${this.data}`);
    }    
};
    
let client = {
    server: server,
    result: "",
    calc: function(data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function() {
        return callback => {this.result = callback()};    
    }
}

    
client.calc(123);
console.log(client.result);
console.log(typeof client.result);
