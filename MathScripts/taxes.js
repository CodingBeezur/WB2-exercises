// determine how much is witheld for taxes
// assume federal taxes are 23% month.

let federalTaxes = 0.23; //tax rate
let moneyMade = 2000; // money made a month 

let taxesOwed = (moneyMade * federalTaxes); 
console.log(taxesOwed); 