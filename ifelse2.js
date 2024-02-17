// wap using nested if else ..
// calculate the are of cricle , rectangle ,triangle

var area = "rectangle";

var PI = 3.142 , l = 5 , b = 4 , r = 3;

if(area == "cricle"){
    console.log("the area of the cricle is " + PI*r**2);
}
else if(area == "triangle"){
    console.log("the area of the triangle is " + (l*b)/2);
}
else if(area == "rectangle"){
    console.log("the area of the rectangle is " + (l*b));
}
else{
    console.log("please enter the valid input");
}