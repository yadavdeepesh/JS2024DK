// what the difference between == and  === ?
/*
var num1 = 5;
var num2 = '5';
console.log(typeof(num1));
console.log(typeof(num2));
console.log(num1);
console.log(num2);
console.log(num1 == num2);// compare only values
console.log(num1 === num2);// compare the values and datatype
if(num1 === num2){
    console.log("Both vales are same ");
}
else{
    console.log("Both vales are not same ");
}
// if else 
var tomr = "rain";

if( tomr === "rain"){
    console.log("Today is rainy day using rain coat");
}
else{
    console.log("no need to rain coat ");

}


*/

// wap given year is a leapyear or not leapyear

var year = 2020;
// note 2020 ,2024 is leapyear
// note 2019 , 2021 , 2022, 2023, 2025 is not leapyear

if( year % 4 === 0){
    if(year % 100 === 0){
     if(year % 400 === 0){
        console.log("This year "+ year + " is  a leapyear");
     }
     else{
        console.log("This year "+ year + " is  not a leapyear");
     }
    }
    else{
        console.log("This year "+ year + " is a leapyear");
    }
}else{
 console.log("This year "+ year + " is  not a leapyear");
}