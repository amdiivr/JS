let x = 10
let y = 10
let z = x + y

document.getElementById("add").innerHTML = "Value of Z is: " + z;

let a = 2
let b = 3
let c = a * b

document.getElementById("multiply").innerHTML = "Value of C is: " + c;

let d = 50 
let e = 20 
let f = d - e

document.getElementById("subtract").innerHTML = "Value of C is: " + f;

// CONCATENATE TWO STRING

let string1 = "Hi, ";
let string2 = " how are you?"

document.querySelector("#concatenate").innerHTML = string1 + string2 + " --- See the javascript program for that";

// assign value to a variable

let value = 43;

document.querySelector("#value").innerHTML = value + " --- See the javascript program for that";;

// increment the value in a variable by 3

document.querySelector("#valueBy3").innerHTML = value * 3 + " --- See the javascript program for that";

// compare two values to see if they are the same 

let hight = 210;
let low = 202;

let equal = ""

if (hight == low) {
    equal = true
}
else {
    equal = false
}

document.querySelector("#sameValue").innerHTML = "Hight and Low are the same?  Answer: " + equal + " --- See the javascript program for that";;

// compare if one number is less than another number

if(hight < low) {
    equal = true
}
else {
    equal= false
}

document.querySelector("#lessThan").innerHTML = "is Hight less to low? Answer: " + equal + " --- See the javascript program for that";

if(hight === low) {
    equal = "Its equal"
}
else {
    equal= "Not equal"
}

document.querySelector("#notEqual").innerHTML = "is Hight equal to Low? Answer: " + equal + " --- See the javascript program for that";