/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const nameComplete = document.querySelector('#name');

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
nameComplete.textContent = 'Andy Vasquez Rueda';

// Step 3: declare and instantiate a variable to hold the current year
const yearComplete = document.querySelector('#year');

// Step 4: place the value of the current year variable into the HTML file
yearComplete.textContent = '2023';

// Step 5: declare and instantiate a variable to hold the name of your picture
// Step 6: copy your image into the "images" folder
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

const profile = document.querySelector("img");
profile.setAttribute("src","images/profile.png");
profile.setAttribute("alt", "profile photo");

profile.style.height = '300px';
profile.style.weight = '240px';


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const hit = [];
let newFood = hit.push("Chicken with Rise");
// Step 2: place the values of the favorite foods variable into the HTML file
// Step 3: declare and instantiate a variable to hold another favorite food
newFood = hit.push(" Ceviche");
// Step 4: add the variable holding another favorite food to the favorite food array
newFood = hit.push(" Lomo Saltado");
// Step 5: repeat Step 2
document.querySelector("#food").innerHTML = hit;
// Step 6: remove the first element in the favorite foods array
hit.shift();
// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = hit;
// Step 8: remove the last element in the favorite foods array
hit.pop();
// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = hit;