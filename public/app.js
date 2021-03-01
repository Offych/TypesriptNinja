const me = {
    name: 'Alex',
    age: 44,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log('Hello', person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from './classes/Invoice.js';
const invoiceOne = new Invoice('Sashiko', 'some work', 250);
const invoiceTwo = new Invoice('Dimiko', 'some additional work', 300);
let invoices = [];
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
const form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toform = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
