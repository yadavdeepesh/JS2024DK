// create a function in js

// function sum(){
//     var a = 10, b=20;
//     var total = a + b;
//     console.log(total);
// }

// // callig a function 

// sum();

// function parameter and  function arguments

// function sum(a,b){// that is the function parameter 
//     var total = a + b;
//     console.log(total);
// }
// sum();//NaN
// sum(29,23);// output :52 // that is the function arguments
// sum(33,45);// output :78



// function sum(a,b){// that is the function parameter 
//     var total = a + b;
//     console.log(total);
// }


// var funExp = sum(5,15);

// return keyword in js

// function sum(a,b){// that is the function parameter 
//     return  a + b;
// }


// var funExp = sum(50,15);

// console.log("sum of two number is : "+funExp);


// Anonymous function 
/*
var funExp = function(a,b){
    return total = a + b;
}

console.log(funExp(5,15));

var sum = funExp(15,15);
var sum1 = funExp(25,15);

console.log("the sum of two number " +sum );

console.log("the sum of two number     " +sum );

console.log(sum>sum1);

console.log(sum1>sum);
*/

// Default parameters

// default function parameters allow named parameters
// to be initialized with default values if no values 
// or underfiend is passed.

function mult(a , b){
    return (a*b);
}
// console.log(mult(5,5));
console.log(mult(4));// error :: NaN (Not a Number) 

function mult(a = 3, b = 3){
    return (a*b);
}
// console.log(mult(5,5));
console.log(mult(4));// error :: NaN (Not a Number) 
// to short the this issue using default parameters

console.log(mult());