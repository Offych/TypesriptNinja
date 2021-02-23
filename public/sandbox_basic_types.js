"use strict";
//Types Basics
var character = 'Sashko';
var age = 30;
var isLogged = false;
// character = 20; 
character = "Alex";
//age = 'Bla'
age = 43;
//isLogged = 'Yes';
isLogged = true;
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(7.5));
//Arrays
var names = ['Sashko', 'Alex', 'Dimka'];
//names.push('Polina');
//names.push(20);
console.log(names);
var numbers = [10, 15, 20];
//numbers.push('ten');
//Mixed arrays
var mixedArray = ['Alex', 22, "Lesha", 6];
mixedArray.push('Dimka');
mixedArray[0] = 44;
console.log(mixedArray);
//Objects
var master = {
    name: 'Alex',
    age: 30,
    skill: 'Master'
};
//master.name = true;
//master.skills = ['JavaScript', 'HTML'];
//master = {
//    name: 'Dimka',
//    age: 17,
//skills: ['JavaScript', 'HTML'];
//}
console.log(master);
// Explicit types
var character1;
var age1;
var isAdmin;
//age1 = '111';
age1 = 40;
isAdmin = true;
character1 = 'Cat';
//arrays
var masters = [];
//master = [10,23]
masters.push('Bla');
console.log(masters);
//mixed arrays /union types
var mixedArray1 = [];
mixedArray1.push('Hello');
mixedArray1.push(20);
mixedArray1.push(true);
console.log(mixedArray1);
// union type variables
var uid;
//uid = true;
//explicit on objects
var experts;
experts = { name: 'Alex', age: 44 };
console.log(experts);
var experts1;
experts1 = { name: 'Lesha', age: 6, isExpert: false };
console.log(experts1);
//Dynamic types /Any Type
var newAge = 25;
newAge = true;
console.log(newAge);
newAge = 'Hello';
console.log(newAge);
var mixedArrayNew = [];
// can push any type into array
var mixedObject;
//can add any type of properties
