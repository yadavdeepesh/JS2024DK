// WAP to print table for given number 
/*
output : 8 * 1 = 8
         8 * 2 = 16
         8 * 3 = 24
         */
// without using template liters 
console.log("Table of Given Number::===>");
for (let i = 1 ; i <= 10 ; i++ ){
    let tableOf = 12 ;
    console.log( tableOf + " * " + i + " = "+ tableOf * i);
}
// using template liters 

console.log("Table of Given Number using template liters ::===>");
for (let i = 1 ; i <= 10 ; i++ ){
    let tableOf = 12 ;
    console.log(` ${tableOf} * ${i} = ${tableOf*i}`);
}