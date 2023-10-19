//Calculate gross pay given variables payRate and hoursWorked 
//if hoursWorked is < 40, payRate = 12.50;


let hoursWorked = 40; // allowed to be changed

const normalWorkHours = 40; // Normal 40 hour work week
const otHours = hoursWorked - normalWorkHours; //formula for seperating otHours from normalWorkHours

const partTimePay = 12.59; // payRate for part-time work 
const normalWorkPay = 25.00;
const otPay = 37.30; //payRate for otHours 

 
if (hoursWorked < normalWorkHours) { 
    payRate = partTimePay;
} else if (hoursWorked > normalWorkHours) {
    console.log(otHours); // prints the OT hours
    payRate = ("25.00 for 40 hours + $37.30 per every OT Hour"); //payRate for only OT Hours
    grossPay = (otPay * otHours) + (normalWorkHours * 25.00); //grossPay for normalWorkHours + otHours to mkae it 

} else if (hoursWorked == 40) {
    payRate = normalWorkPay; 
    grossPay = (payRate * normalWorkHours);
}

// printing the let hoursWorked variable 
console.log("pay rate is : $" + payRate);
console.log("Your gross pay is : $" + grossPay);
