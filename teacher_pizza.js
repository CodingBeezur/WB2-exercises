// youre a teacher with a blank amount of students
// you bought ? amount of pizzas, each containing 8 slices of pizza .

let students = 25; // allowed to be changed
let pizzas = 4 ; //allowed to be changed

const teacher = 1; // standard 1 teacher per class
const slicesPerPizza = 8; // standard 8 slices per pizza/

let totalPizzaSlices = pizzas * slicesPerPizza; // formula for total amount of slices per pizzas bought
let totalClass = (teacher + students);  // formula for total people in class.

let remainderOfSlices = totalClass / slicesPerPizza; //formula for finding the remainder slices of pizza.

console.log("Your left over pizza is: " + remainderOfSlices); 

