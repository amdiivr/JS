/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
    let sum = number1 + number2;
    return sum;
}
// Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers() {
    const firstNumber = parseInt(document.getElementById("addend1").value);
	const secondNumber = parseInt(document.getElementById("addend2").value);
	const sumTotal = document.getElementById("sum");
	sumTotal.value = add(firstNumber, secondNumber);
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtraction(number1, number2) {
    let subtract = number1 - number2
    return subtract;
}

function subtractNumbers() {
    const firstNumber = parseInt(document.getElementById("minuend").value);
	const secondNumber = parseInt(document.getElementById("subtrahend").value);
	const subtractTotal = document.getElementById("difference");
	subtractTotal.value = subtraction(firstNumber, secondNumber);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and multiplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiplication(number1, number2) {
    let multi = number1 * number2;
    return multi;
}

function multiNumbers(){
    const firstNumber = parseFloat(document.getElementById("factor1").value);
    const secondNumber = parseFloat(document.getElementById("factor2").value);
    const multiTotal = document.getElementById("product");
    multiTotal.value = multiplication(firstNumber, secondNumber);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function division(number1, number2) {
    let divide = number1 / number2;
    return divide;
}

function divideNumbers(){
    const firstNumber = parseFloat(document.getElementById("dividend").value);
    const secondNumber = parseFloat(document.getElementById("divisor").value);
    const divTotal = document.getElementById("quotient");
    divTotal.value = division(firstNumber, secondNumber);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let currentDate = new Date();
// Step 2: Declare a variable to hold the current year
let year;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
year = currentDate.getFullYear(); 
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerHTML = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = numbers;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operator)
let filterOdd = numbers.filter(number => number % 2 === 1);

document.getElementById("odds").innerHTML = filterOdd;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let filterEven = numbers.filter(number => number % 2 === 0);

document.getElementById("evens").innerHTML = filterEven;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumTotal = numbers.reduce((total, item) => total + item);

document.getElementById("sumOfArray").innerHTML = sumTotal;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let mapArray = numbers.map(number => number * 2);

document.getElementById("multiplied").innerHTML = mapArray;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumOfMultiplied = mapArray.reduce((accumulate, currentValue) => accumulate + currentValue);

document.getElementById("sumOfMultiplied").innerHTML = sumOfMultiplied;