"use strict";
//Functions
let greet;
greet = () => {
    console.log('Hello world!');
};
//Third argumnet in the add fucntion is optional, can be used or can be omitted, marked by ? mark
// and should be used at the last place
//If default parameter is used c: number|string = 10 optional parameter should be omitted
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
greet();
add(7, 5, '55');
//Explicitly define return type
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
/* const logDetails = (uid: string|number, item: string) => {
    console.log(`${item} has uid of ${uid}`);
};
const greetNew = (user: {name: string, uid: string |number;}) => {
    console.log(`${user.name} says hello`);
}; */
// the same functions with aliases usage 
const logDetails = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
const greetNew = (user) => {
    console.log(`${user.name} says hello`);
};
//Function Signatures
//let greetSign: Function;
//example1
let gree;
gree = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numTwo - numOne;
    }
};
//example 3
let logDetailsNew;
logDetailsNew = (master) => {
    console.log(`${master.name} is ${master.age} years old`);
};
