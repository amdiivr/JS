/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

let info = {
    name: "Andy Vasquez Rueda",
    photo: "images/profile.png",
    favoriteFoods: ["Chicken with Rise", "Ceviche", "Lomo Saltado"],
    hobbies: ["Run", "Play Guitar", "Swim"],
    placesLived: [],
}

info.placesLived.push({place: "", length: ""}, {place: "", length: ""});
info.placesLived[0].place = "Lima";
info.placesLived[0].length = "18 years";
info.placesLived[1].place = "Porto Alegre";
info.placesLived[1].length = "2 years";

console.log(info)

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
let nameOutput = document.getElementById("name");
nameOutput.textContent = info.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
let photoOutput = document.getElementById("photo");
photoOutput.setAttribute("src", info.photo);

photoOutput.style.height = '300px';
photoOutput.style.weight = '240px';

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
let foodHtml = info.favoriteFoods.map((food) =>
`<li>${food}</li>`);

document.getElementById("favorite-foods").innerHTML = foodHtml.join("");

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
let hobbyHtml = info.hobbies.map((hobby) =>
`<li>${hobby}</li>`);

document.getElementById("hobbies").innerHTML = hobbyHtml.join("");

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
let placeLivedHtml = info.placesLived.map((section) => 
`<dl><dt>${section.place}</dt 
<dd>${section.length}</dd></dl>`);

document.getElementById("places-lived").innerHTML = placeLivedHtml.join("");

