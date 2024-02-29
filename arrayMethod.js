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