//const anchor = document.querySelector('a')!;
/* if(anchor) {
    console.log(anchor.href);
}
 */
//console.log(anchor.href);

//Classes

class Invoice {
    /* readonly client: string;
    private details: string;
    amount: number; */

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) {};
    
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

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



