// contional ternary operator
// using if else
var age = 23;

if(age>=18){
    console.log("you are eligible to vote ");
}else{
    console.log("you are not eligible to vote")
}

console.log("using ternary operator ...");
// using ternary operator

var age = 8;

(age >= 18 ) ?  console.log("you can vote ") : console.log("you can not  vote ") ;

console.log("using ternary operator  second example ...");

// choice option is : Blue . Red
var choice = "Red";

(choice=="Blue") ? console.log("Your favourite color is Blue") : console.log("Your favourite color is Red");


// using ternary operator another  example
console.log("using ternary operator  third example ...");
var switchCheck = true;
var res = (switchCheck == true) ? true : false;

if ( res == true){
    console.log("Your Switch is No");
}
else{
    console.log("Your Switch is Off");
}