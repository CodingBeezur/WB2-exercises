// displays both the smallest of three number sand then the largest of three numbers.

let a = 11;
let b = 14;
let c = 12;

// prints largest value
if (a > b && a > c) {
    console.log("a is the bigger than b ") 
} else 
        if (a > b && c > a) {
            console.log("C is bigger than a")
        }
        if (c > a && b > c) 
            console.log("B is bigger than all")


// prints smallest value
if (a < b && a < c) {
    console.log("A is the smaller than all ") 
} else 
        if (a >  b && c < a) {
            console.log("C is smaller than all")
        }
        if (c < a && b < c) 
            console.log("B is smaller than all")

         