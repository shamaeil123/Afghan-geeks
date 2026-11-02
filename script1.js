// JavaScript Extended Tip Calculator (Week 10)

let rawBillInput = "  120.50   ";
let billAmount = parseFloat(rawBillInput.trim());
let tipPercentage = 15;
let numberOfFriends = 4;

let tipAmount = billAmount * (tipPercentage / 100);
let totalBill = billAmount + tipAmount;

let amountPerPerson = totalBill / numberOfFriends;

let finalAmountPerPerson = amountPerPerson.toFixed(2);
let finalTotalBill = totalBill.toFixed(2);

let line1 = `initial bill: $${billAmount}`;
let line2 = `tip rate: ${tipPercentage}%`;
let line3 = `total bill with tip: $${finalTotalBill}`;
let line4 = `each person pays (4 friends): $${finalAmountPerPerson}`;

console.log(" RECEIPT ");
console.log(line1.toUpperCase());
console.log(line2.toUpperCase());
console.log(line3.toUpperCase());
console.log(line4.toUpperCase());
