"use strict";
//Functions
var greet;
greet = function () {
    console.log('Hello world!');
};
//Third argumnet in the add fucntion is optional, can be used or can be omitted, marked by ? mark
// and should be used at the last place
//If default parameter is used c: number|string = 10 optional parameter should be omitted
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
greet();
add(7, 5, '55');
//Explicitly define return type
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
/* const logDetails = (uid: string|number, item: string) => {
    console.log(`${item} has uid of ${uid}`);
};
const greetNew = (user: {name: string, uid: string |number;}) => {
    console.log(`${user.name} says hello`);
}; */
// the same functions with aliases usage 
var logDetails = function (uid, item) {
    console.log(item + " has uid of " + uid);
};
var greetNew = function (user) {
    console.log(user.name + " says hello");
};
//Function Signatures
//let greetSign: Function;
//example1
var gree;
gree = function (name, greeting) {
    console.log(name + " says " + greeting);
};
//example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numTwo - numOne;
    }
};
//example 3
var logDetailsNew;
logDetailsNew = function (master) {
    console.log(master.name + " is " + master.age + " years old");
};
