// Array In JS
// but you can create multiple  variable 
/*
var friend1 = "Shubham";
var friend2 = "Aashish";
var friend3 = "Abhishek";
console.log(` friend1 name : ${friend1} friend2 name : ${friend2} friend3 name : ${friend3}`);
*/


// to solve this issue to use array 
// one variable to contain the all values 
/*
var myfriends = [ 'Shubham',22,'male', 'Aashish',22,'male','Abhishek',22,'male'];

console.log(myfriends);
console.log(myfriends.indexOf('Aashish'));
console.log(myfriends[0]);


const cars = new Array("Saab", "Volvo", "BMW" ,"Swift");

console.log(cars);
// find out the length of given array 
// using the length property
// find the length of given array 
console.log(`length of cars arrya is :: ${cars.length}`);
// find out last index value of given array ::
console.log(`last index of cars arrya is :: ${cars.length-1}`);

// find out last value of given array ::
console.log(`last value of cars arrya is :: ${cars[cars.length-1]}`);

console.log("++++++++++++ using loop in array ++++++++++++++");

// using for loop 
const evenNumber = [2,4,6,10,12,14];
console.log(evenNumber);

for (let i = 0 ; i < evenNumber.length ; i++){
    console.log(`index  ${i} and value ${evenNumber[i]}`);
}

// using for loop 

const oddNumber = [ 1,3,5,7,9,11];
console.log(oddNumber);

for  (let i = 0 ; i < oddNumber.length ; i++){
    console.log(`index  ${i} and value ${oddNumber[i]}`);
}
console.log("+++++++++++++++ print all numbers ++++++++++++++");
// using for loop 

const allNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for  (let i = 0 ; i < allNumber.length ; i++){
    console.log(`index  ${i} and value ${allNumber[i]}`);
}
*/
// using  for in loop 
//  return the index value of given array 
/*
const city = ["muzaffarnagar", "meerut" ,"noida","agra","lucknow","dehradun"];

console.log("++++++++++++ using for in loop ++++++++++");
for ( let elements in city){
    console.log(`index of ${elements}`);
}

// using  for of loop 
// return the value of given array 

console.log("++++++++++++ using for of loop ++++++++++");

for ( let elements of city){
    console.log(`value of ${elements}`);
}
*/
// using  foreach loop 
// return the index and value both of given array 

// const city = ["muzaffarnagar", "meerut" ,"noida","agra","lucknow","dehradun"];
// console.log("++++++++++++ using foreach loop ++++++++++");
// city.forEach(function(element,index,array){
//     console.log(element+" index :"+ index );
// });


// using fat arrow function


// city.forEach((element,index,array)=>{
//     console.log(element+" index "+ index);
// })



// console.log(Boolean(10000));


// console.log(Boolean(-0.5));

// let price;
// console.log(Boolean(price));

// const name = 'james';
// console.log(Boolean(name));



// let fruits = ["Apple","Banana","Orange", "Pineaplle","Grapes","Pineaplle"];

// let res = fruits.indexOf("Pineaplle",4);

// console.log(res);
// Note ::
// method  is case sensitive 
// method returns -1 if the value is not found.


// using this method 
// lastIndexOf() 
// Description
/*
The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

The lastIndexOf() method searches the string from the end to the beginning.

The lastIndexOf() method returns the index from the beginning (position 0).

The lastIndexOf() method returns -1 if the value is not found.

The lastIndexOf() method is case sensitive.
*/


// let fruits2 = ["Apple","Banana","Orange", "Pineaplle","Grapes","Pineaplle"];

// let res2 = fruits2.lastIndexOf("Pineaplle");
// console.log(res2);

// includes() method in Js 

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world",7);

// console.log(result);


// let fruits2 = ["Apple","Banana","Orange", "Pineaplle","Grapes","Pineaplle"];

// var res = fruits2.includes("Pineaplle",4);

// console.log(res);

const ages = [3, 30, 28, 20];

// function checkAge(age) {
//   return age > 18;
// }

ages.forEach((element , index , array )=>{
    if(element > 18){
        console.log(element);
    }
});
   



