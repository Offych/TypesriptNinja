//Functions
let greet: Function;

greet = () => {
    console.log('Hello world!');
}
//Third argumnet in the add fucntion is optional, can be used or can be omitted, marked by ? mark
// and should be used at the last place
//If default parameter is used c: number|string = 10 optional parameter should be omitted

const add = (a: number, b: number, c: number|string = 10): void => {
    console.log(a+b);
    console.log(c);
};
greet();
add(7,5, '55');
//Explicitly define return type
const minus = (a: number, b: number): number => {
    return a + b;
};

let result = minus(10, 7);

//Type aliases
//create alias to usage 
type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum };

/* const logDetails = (uid: string|number, item: string) => {
    console.log(`${item} has uid of ${uid}`);
};
const greetNew = (user: {name: string, uid: string |number;}) => {
    console.log(`${user.name} says hello`);
}; */
// the same functions with aliases usage 
const logDetails = (uid:StringOrNum, item: string) => {
    console.log(`${item} has uid of ${uid}`);
};
const greetNew = (user: objWithName) => {
    console.log(`${user.name} says hello`);
};

//Function Signatures
//let greetSign: Function;

//example1
let gree: (a: string, b: string) => void;

gree = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
};

//example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add') {
        return numOne + numTwo;
    } else {
        return numTwo - numOne;
    }
}

//example 3
let logDetailsNew: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetailsNew = (master: person) => {
    console.log(`${master.name} is ${master.age} years old`);
}

