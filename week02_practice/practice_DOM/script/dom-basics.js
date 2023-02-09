// create new element P and add at body
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// create new element IMG and add at body with your own attribute
const image = document.createElement("img");
image.setAttribute("src","https://placeimg.com/200/200/animals");
image.setAttribute("alt", "The cat see you");
document.body.appendChild(image);

// create new element DIV but in this case we see that innerHtml have all the content
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// this new element SECTION we can create for two ways, that is the first
const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection);

// that is the second one, its not selected because we would could have a troubles.

// const newSection = document.createElement("section");
// const newH2 = document.createElement("h2");
// newH2.innerText = "CSE 121b";
// newSection.appendChild(newH2);
// const newP = document.createElement("p");
// newH2.innerText = "Welcome to Javascript Language";
// newSection.appendChild(newP);

// document.body.appendChild(newSection);