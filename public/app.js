"use strict";
//const anchor = document.querySelector('a')!;
/* if(anchor) {
    console.log(anchor.href);
}
 */
//console.log(anchor.href);
//Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoiceOne = new Invoice('Sashiko', 'some work', 250);
var invoiceTwo = new Invoice('Dimiko', 'some additional work', 300);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoiceOne.client = 'Leshka';
invoiceTwo.amount = 500;
console.log(invoiceOne, invoiceTwo);
console.log(invoices);
//console.log(invoiceOne, invoiceTwo);
//const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs
var type = document.querySelector('#type');
var toform = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
