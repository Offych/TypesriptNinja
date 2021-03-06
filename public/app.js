//const anchor = document.querySelector('a')!;
/* if(anchor) {
    console.log(anchor.href);
}
 */
//console.log(anchor.href);
//Interfaces
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
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
const form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//List templates Instances
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(
    /* type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber */
    doc);
    list.render(doc, type.value, 'end');
});
//GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Blablabla', age: 32 });
//let docTwo = addUID('hello')
console.log(docOne);
//Generics with Interfaces
//ENUMS
var ResourceName;
(function (ResourceName) {
    ResourceName[ResourceName["BOOK"] = 0] = "BOOK";
    ResourceName[ResourceName["AUTHOR"] = 1] = "AUTHOR";
    ResourceName[ResourceName["FILM"] = 2] = "FILM";
    ResourceName[ResourceName["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceName[ResourceName["PERSON"] = 4] = "PERSON";
})(ResourceName || (ResourceName = {}));
;
console.log(ResourceName);
const docThree = {
    uid: 1,
    resourceName: ResourceName.BOOK,
    data: 'ssss'
};
const docFour = {
    uid: 2,
    resourceName: ResourceName.PERSON,
    data: ['tea', '...']
};
console.log(docThree);
console.log(docFour);
//Tuples
let arr = ['string', 25, true];
let tup = ['alex', 24, true];
