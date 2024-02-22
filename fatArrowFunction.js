// using normal function  to write the code ::

// console.log(sum());

// function sum(){
//     let a = 5;
//     let b = 7;
//     return a + b;
// }

// using fat arrow function :: 

//console.log(sum());// error 
// cannot access 'sum' before initialization at object 

// const sum = () => {
//     let a = 5;
//     let b = 7;
//     return a + b;
// }

// console.log(sum());// after initialization at object ,
// it is working 


const sum = () => {
    let a = 5;
    let b = 7;
    let sum = a + b;
    return `The sum of two number is  ${sum}`;
}

console.log(sum());
// after initialization at object ,
// it is working 


const sumof = () => {
   
    return `The sum of two number is  ${(a = 5) + (b = 5)}`;
}

console.log(sumof());
// after initialization at object ,
// it is working 

// how to short the flate arrow function 

const sum2 = () => `The sum of two number is  ${(a = 5) + (b = 5)}`;

console.log(sum2());