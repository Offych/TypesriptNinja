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

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    
    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(
        /* type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber */
        doc
    );
    
});



