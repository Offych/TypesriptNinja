//const anchor = document.querySelector('a')!;
/* if(anchor) {
    console.log(anchor.href);
}
 */
//console.log(anchor.href);
//Interfaces
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

/* let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Sashko', 'web dev', 250);
docTwo = new Payment('Leshka', 'some work', 770);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs) */

interface isPerson {
    name: string;
    age: number;
    speak (a: string): void;
    spend (a: number): number;
}

const me: isPerson = {
    name: 'Alex',
    age: 44,
    speak (text: string): void {
        console.log(text)
    },
    spend (amount: number): number {
        console.log('I spent ', amount);
        return amount;
    },
};

const greetPerson = (person: isPerson) => {
    console.log('Hello', person.name)
}
greetPerson(me);

/* console.log(me)

const invoiceOne = new Invoice('Sashiko', 'some work', 250);
const invoiceTwo = new Invoice('Dimiko', 'some additional work', 300);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

//invoiceOne.client = 'Leshka';
invoiceTwo.amount = 500;

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
 */

//console.log(invoices);

//console.log(invoiceOne, invoiceTwo);


//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children);
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//List templates Instances
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    
    let values: [string, string, number ];
    values = [tofrom.value, details.value,amount.valueAsNumber];
    
    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    console.log(
        /* type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber */
        doc
    );
    list.render(doc, type.value, 'end');
});

//GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'Blablabla', age: 32});
//let docTwo = addUID('hello')

console.log(docOne);

//Generics with Interfaces
//ENUMS
enum ResourceName { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };
console.log(ResourceName)

interface Resource<T> {
    uid: number;
    resourceName: ResourceName;
    data: T ;
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: ResourceName.BOOK,
    data: 'ssss'
}
const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: ResourceName.PERSON,
    data: ['tea', '...']
}

console.log(docThree);
console.log(docFour);

//Tuples

let arr = ['string', 25, true];

let tup: [string, number, boolean] = ['alex', 24, true];



