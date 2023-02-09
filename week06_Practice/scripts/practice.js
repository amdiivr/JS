// loops.js
myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);

//create the same list with LOOP into FOREACH 

let foodElement = document.querySelector("#favorite-foods");
function createFoodList(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    foodElement.appendChild(favoriteFood);
}

myInfo.favoriteFoods.forEach(createFoodList);

//create the sam list with LOOP into MAP

let foodsElement = document.querySelector("#favorite-foods");
function mapFoodItem(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    return favoriteFood;
}

function mapFoodSmall(food) {
    return `<li>${food}<li/>;`
}

let foodListElements =  myInfo.favoriteFoods.map(mapFoodSmall);
foodElement.innerHTML = foodListElements.join("");   

// create function with creating list 

let foodsEle = document.querySelector("#favorite-foods");
let placesEle = document.querySelector("#places-lived");

function generateListMarkup(list, templateCallback) {
    let htmlList = list.map(templateCallback);
    return htmlList.join("");
}

function listFood(food) {
    return `<list>${food}</list>`;
}

function takePlace(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsEle.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    listFood
);
  
placesEle.innerHTML = generateListMarkup(
    myInfo.placesLived,
    takePlace
);