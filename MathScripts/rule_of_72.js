//Calculate how long will it take ur savings acccount worth X to double given an interest of IR
// Formula for rule of 72 is: 72/interest rate = t (time periods required to double an investment value)

let interestRate = 5 //percentage written as whole, allowed to be changed
let accountBalance = 500 // Account balance 
const t = (72/interestRate.toFixed(2)); // Formula for rule 72, divided by 100 to switch decimal places. 

const accountBalanceUpdated = accountBalance * 2; //Account balance after the estimated years in t


console.log("At a " + interestRate + "% interest rate, your savings account will be worth " + accountBalanceUpdated + " in " + t + " years.");
