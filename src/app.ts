//const anchor = document.querySelector('a')!;
/* if(anchor) {
    console.log(anchor.href);
}
 */
//console.log(anchor.href);
//Interfaces
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

console.log(me)

import { Invoice } from './classes/Invoice.js';

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


//console.log(invoices);

//console.log(invoiceOne, invoiceTwo);


//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children);
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toform.value,
        details.value,
        amount.valueAsNumber
    );
});



