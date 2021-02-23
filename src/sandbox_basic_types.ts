//Types Basics
let character = 'Sashko';
let age = 30;
let isLogged = false;

// character = 20; 
character = "Alex";
//age = 'Bla'
age = 43;

//isLogged = 'Yes';
isLogged = true;

const circle = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circle(7.5));

//Arrays
let names = ['Sashko', 'Alex', 'Dimka'];

//names.push('Polina');
//names.push(20);
console.log(names);

let numbers = [10, 15, 20];
//numbers.push('ten');

//Mixed arrays
let mixedArray = ['Alex', 22, "Lesha", 6];
mixedArray.push('Dimka')
mixedArray[0] = 44;
console.log(mixedArray);

//Objects
let master = {
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
let character1: string;
let age1: number;
let isAdmin: boolean;

//age1 = '111';
age1 = 40;
isAdmin = true;
character1 = 'Cat';

//arrays
let masters: string[] = [];
//master = [10,23]
masters.push('Bla');
console.log(masters);
//mixed arrays /union types
let mixedArray1: (string|number|boolean)[] = [];
mixedArray1.push('Hello');
mixedArray1.push(20);
mixedArray1.push(true)
console.log(mixedArray1);

// union type variables
let uid: string|number;
//uid = true;

//explicit on objects
let experts: object;
experts = {name: 'Alex', age: 44};
console.log(experts);

let experts1: {
    name: string,
    age: number,
    isExpert: boolean
}
experts1 = {name: 'Lesha', age: 6, isExpert: false}
console.log(experts1);

//Dynamic types /Any Type
let newAge: any = 25;

newAge = true;
console.log(newAge);
newAge = 'Hello';
console.log(newAge);

let mixedArrayNew: any[] = [];
// can push any type into array
let mixedObject: {name: any, age: any};
//can add any type of properties

