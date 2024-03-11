// JavaScript Array indexOf()
// The indexOf() method searches an array for an element value and returns its position.

// Note: The first item has position 0, the second item has position 1, and so on.

// const fruits = ["Apple", "Orange", "Apple3", "Mango" , "Apple" , "Apple4"];
// let position = fruits.indexOf("Mango");
// console.log(position);

// let position2 = fruits.indexOf("Apple4",1);
// console.log(position2);

// JavaScript Array lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.


// const fruits = ["Apple", "Orange", "Apple", "Mango","grapes","Apple","pineapple"];

// let position = fruits.indexOf("Apple",3);
// console.log(position);


// JavaScript Array includes()
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const flag = fruits.includes("Banana"); // is true

// console.log(flag);


// Sorting an Array
// The sort() method sorts an array alphabetically:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());

// // Reversing an Array
// // The reverse() method reverses the elements in an array:
// console.log(fruits.reverse());

// const numbers = [77,55,66,4,44,3,1,38];
// console.log(numbers.sort());

// console.log(numbers.reverse());

// sort in acending order 
// const points = [40, 100, 1, 5, 25, 10];
// let res = points.sort(function(a, b){
//     console.log("a :: "+ a +"  b :: "+ b);
//     return a - b});

// console.log(res);


// sort in desending order

// const points = [40, 100, 1, 5, 25, 10];
// let res = points.sort(function(a, b){
//     console.log("a :: "+ a +"  b :: "+ b);
//     return b - a});

// console.log(res);


// JavaScript Array toReversed() Method
// ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.

// The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.


// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sort = months.toSorted();
// // const reversed = months.toReversed();

// // console.log(reversed);

// console.log(sort);


// const numbers = [5,6,7,88,99,12];
// // const sort = numbers.toSorted();
// const reversed = numbers.toReversed();

// console.log(reversed);

// console.log(sort);

// Note :: sort and sorted method  not work properly


// const ages = [3, 10, 18,19,20,23];

// console.log(ages.find(checkAge));//
// console.log(ages.findIndex(checkAge)); // 3 ( index value )
// console.log(ages.findLast(checkAge));// 23 
// console.log(ages.findLastIndex(checkAge)); // 5 ( index value )
// function checkAge(age) {
//   return age > 18;
// }


// Description
// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.


// const ages = [32, 33, 16, 40 , 12 , 24 , 54 , 8 , 13 , 17 , 18];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//     // let  i = 1;
//     // console.log("runing " + i);
//   return age <= 13;
// }

// console.log(result);
// console.log(result.length);
// console.log(ages.length);

// // Push() method 
// The push method adds , one or more elements to the end of an array and returns the new length of the array .

// const animals  = ['pigs', 'goats' , 'sheep'];
// console.log(`Original array length  :: ${animals.length}`);
// // add only one Element
// // const count = animals.push('chicken');// return the new  length of array ..
// // add more element in array 
// const count = animals.push('chicken','cat ' , 'cow');// return the new  length of array ..
// console.log(`Before using push method  change the array length  :: ${animals.length}`);
// console.log(animals);
// console.log(count);



// unshift method  

// const animals  = ['pigs', ' goats' , ' sheep'];
// console.log(`All array elements are : ${animals}`);
// console.log(`Original array length  :: ${animals.length}`);
// // add only one Element
// //const count = animals.unshift('chicken');// return the new  length of array ..
// // add more element in array 

// const count = animals.unshift('chicken','cat ' , 'cow');
// // return the new  length of array ..
// console.log(`Before using unshift method  change the array length  :: ${animals.length}`);
// console.log(animals);
// console.log(count);

// using unshift methods for numbers

// const myNumbers = [1,2,3,4,5];
// console.log(`All array elements are : ${myNumbers}`);
// console.log(`Original array length  :: ${myNumbers.length}`);
// const count = myNumbers.unshift(4,6);// return the new  length of array ..
// console.log(`Before using unshift method  change the array length  :: ${myNumbers.length}`);
// console.log(count);
// console.log(`new array elements are : ${myNumbers}`);
// // add more element in array 


// pop() method 

// const plants = ['broccoli' , " cauliflower ", " kale" ,"  tomato " ," cabbage"];
// console.log(plants);
// console.log("length :: "+ plants.length);
// // using pop method 

// console.log(plants.pop());

// console.log(plants);
// console.log("After using pop method  length :: "+ plants.length);

// shift() method
// const plants = ['broccoli' , " cauliflower ", " kale" ,"  tomato " ," cabbage"];
// console.log(plants);
// console.log("length :: "+ plants.length);
// // using pop method 

// console.log(plants.shift());// retrun the deleted element 

// console.log("After using pop method  length :: "+ plants.length);


// console.log(plants);

// sort the array indesceding order

// const fruits = [ "banana" , "orange" , "apple" ,"mango"];
// console.log(`orignal array :: ${fruits}`);
// console.log(`Sorted array :: ${fruits.sort()}`);

// const alphabet = ["A" , "B" ,"C" ," D" , "E"];
// console.log(`orignal array :: ${alphabet}`);
// console.log(`Sorted array :: ${alphabet.sort()}`);

// using splice method 

// tasks 
// 1. Add Dec at the end of the array ?
// 2. what is the return value of the splice method ?
// 3. update march to March(Update);
// 4. Delte june form an array ?
// task 1
// const months = ['jan', 'march' , 'april','june','july'];
// console.log(months);
// // console.log(months.push("Dec"));
// // console.log(months);
// console.log(months.length);

// const value = months.splice(months.length,0,"Dec");
// console.log(value);
// console.log(months);

// task 2
// const retrunValue = months.splice(months.length-1,1,"Dec");
// console.log(retrunValue);// return the array if return empty array no delete , and you perform delete operation return the delete / remove elements
// console.log(months);

// task 3
// console.log(months);
// const updateValue = months.splice(1,1,"March");
// console.log(updateValue);
// console.log(months);

// task 4 
// console.log(months);
// console.log(`before length ::  ${months.length}`);
// const deleteValue = months.splice(3,1);
// console.log(deleteValue);
// console.log(months);
// console.log(`after length ::  ${months.length}`);

// task 5
// console.log(months);
// console.log(`before length ::  ${months.length}`);
// const values = months.splice(3,0,'august','october');
// console.log(values);
// console.log(months);
// console.log(`after length ::  ${months.length}`);


// task 6
// upadte the element april to April 
// const months = ['jan', 'march' , 'april','june','july'];
// console.log(months);
// const indexOFMonth = months.indexOf("april");
// console.log(indexOFMonth);
// if( indexOFMonth != -1){   
// const updateValue = months.splice(indexOFMonth,1,"April");
// console.log(updateValue);
// }
// else{
//    console.log("Element not found"); 
// }
// console.log(months);


// task 7
// // delete the element june 
// const months = ['jan', 'march' , 'april','june','july'];
// console.log(months);
// const indexOFMonth = months.indexOf("june");
// console.log(` index value :: ${indexOFMonth}`);
// if( indexOFMonth != -1){   
// const updateValue = months.splice(indexOFMonth,1,);
// console.log(updateValue);
// }
// else{
//    console.log("Element not found"); 
// }
// console.log(months);



// task 7
// delete the all element after june  
// const months = ['jan', 'march' , 'april','june','july'];
// console.log(months);
// const indexOFMonth = months.indexOf("june");
// console.log(` index value :: ${indexOFMonth}`);
// if( indexOFMonth != -1){   
// const updateValue = months.splice(indexOFMonth,Infinity);
// console.log(updateValue);
// }
// else{
//    console.log("Element not found"); 
// }
// console.log(months);



// map() method in Js

// map() return type : this is return the new array 

// const array1 = [1,4,9,16,25];

// console.log(array1);

// let newArray = array1.map((currElem,index,array) =>{
//     return currElem > 9 ;
// });
// console.log(newArray);

// using forEach() method 
// thats both are same ::
// return type is undefine 


// let newArray3 = array1.forEach((currElem,index,array) =>{
//     // return `index is ${index} and value is ${currElem} , array is ${array } and condition check ${currElem > 9 }` ;

    
//     console.log(`index is ${index} and value is ${currElem} , array is ${array } and condition check ${currElem > 9 }` );
// });
// console.log(newArray3);


// Note :: (Most improtant note 

// return type of forEach() method is undefined ; 
// that is means no return type 


// challenge time

// Qus 1 :: find the square root of each element in an array ?
// let arr = [25,36,49,64,81]



// solution 1 ::

// let arr = [25,36,49,64,81];
// console.log(`original array element :: ${arr})`);
// let arrSqureRoot = arr.map((element,index,array)=>{
//     return `${element} :: square root of ${Math.sqrt(element)}`;
// });

// console.log(arrSqureRoot);

// solution 1 next way ::
// let arr = [25,36,49,64,81];

// let arrSqu = arr.map((ele)=>{
//     return Math.sqrt(ele);
// })
// using short way
// let arrSqu = arr.map((ele) => Math.sqrt(ele));
// console.log(arrSqu);


// qus 2 :: mutiply each element by 2 and return only those elementwhich are greater ten 10 ?
// let arr = [2,3,4,6,8]

// solution 2 :: 
// let arr  = [2,3,4,6,8];
// let resultValue = arr.map((element,index,array) => {
//     if(element*2 > 10){
//         return `element is ${element} and mulitply by 2 =  ${2*element} that is greater than 10 `;
//     }
//     else{
//         return `element is ${element} and mulitply by 2 =  ${2*element} but that is not greater than 10`;
//     }
// });

// console.log(resultValue);


// solution 1 next way ::
let arr  = [2,3,4,6,8];
let arrGreater = arr.map((ele)=>{
return ele*2;
}).filter((ele)=> {
    return ele > 10 ;
}).reduce((accumlator,ele)=>{
    return accumlator += ele;
});
console.log(arrGreater);
// // using short way
// let arrGreater = arr.map((ele) => ele*2 ).filter((ele) => ele > 10 ); 

// console.log(arrGreater);

// reduce() method in jS

// let arr  = [2,3,4,6,8];
// // find out the sum of arr element 

// let sum = arr.reduce((accumlator,curele,index,array) =>{
//     console.log(accumlator);
//     return accumlator += curele;
// });

// console.log("sum ="+sum);