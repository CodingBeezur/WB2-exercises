//Calculate gross pay given variables payRate and hoursWorked 

//if hoursWorked is < 40, payRate = 12.50;


let hoursWorked = 40;
 
if (hoursWorked < 40) { 
    payRate = 12.50;
} else if (hoursWorked > 40) {
    let otHours = hoursWorked - 40;
   // console.log(otHours);
    payRate = (37.30 * otHours) + (40 * 25.00);  

} else if (hoursWorked == 40) {
    payRate = 25.00
}

console.log("pay rate is : $" + payRate);
