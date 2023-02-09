// CREATE A FUNCTION TO CALL THE BASIC CHARACTER INFORMATION
function swOutputList(data) {
    let swOutputListElement = document.querySelector("#infoSW");
    let swList = data.results;
    document.querySelector(".overlay").classList.remove("active")
    swList.forEach(info => {
        let swArticle = document.createElement("article");
        let swName = document.createElement("h2");
        swName.textContent = info.name;
        let swGender = document.createElement("h4");
        swGender.textContent = "Gender: " + info.gender;
        let swBirthYear = document.createElement("h4");
        swBirthYear.textContent = "Birth Year: " + info.birth_year;
        let swHeight = document.createElement("h4");
        swHeight.textContent = "Height: " + info.height;
        let swMass = document.createElement("h4");
        swMass.textContent = "Mass: " + info.mass;

        swArticle.appendChild(swName);
        swArticle.appendChild(swGender);
        swArticle.appendChild(swBirthYear);
        swArticle.appendChild(swHeight);
        swArticle.appendChild(swMass);

        swOutputListElement.appendChild(swArticle);
    })
}

// CREATE A FUNCTION BASIC COLOR INFORMATION
function swOutputListColor(data) {
    let swOutputListElement = document.querySelector("#infoSW");
    let swList = data.results;
    document.querySelector(".overlay").classList.remove("active")
    swList.forEach(info => {
        let swArticle = document.createElement("article");
        let swName = document.createElement("h2");
        swName.textContent = info.name;
        let swHair = document.createElement("h4");
        swHair.textContent = "Hair Color: " + info.hair_color;
        let swSkin = document.createElement("h4");
        swSkin.textContent = "Skin Color: " + info.skin_color;
        let swEyes = document.createElement("h4");
        swEyes.textContent = "Eye Color: " + info.eye_color;

        swArticle.appendChild(swName);
        swArticle.appendChild(swHair);
        swArticle.appendChild(swSkin);
        swArticle.appendChild(swEyes);

        swOutputListElement.appendChild(swArticle);
    })
}

// CALL API STAR WARS LIST BASIC INFO
let url = "https://swapi.dev/api/people/?page=1";

async function getStarWarsInfo(url, doThis) {
    document.querySelector(".overlay").classList.add("active");
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        previousInfo = data.previous;
        nextInfo = data.next;
        doThis(data);
    }
}

// RESET STAR WARS INFO
function reset() {
    document.querySelector("#infoSW").innerHTML = "";
}

// CHOOSE STAR WARS INFORMATION
function chooseStarWarsInfo() {
    reset();
    let starNames = document.querySelector("#infoSelection");
    if(starNames.value == "basicInfo") {
        getStarWarsInfo(url, swOutputList);
    }else if(starNames.value == "basicColorInfo"){
        getStarWarsInfo(url, swOutputListColor);
    }
}

document.querySelector("#infoSelection").addEventListener("change", chooseStarWarsInfo);

// PREVIOUS AND NEXT INFO STAR WARS
let previousInfo = document.querySelector("#previous");
let nextInfo = document.querySelector("#next");

previousInfo.addEventListener("click", pagePrevious);
nextInfo.addEventListener("click", pageNext);

function pagePrevious() {
    reset();
    if(previousInfo) {
        url = new URL(previousInfo);
    }
    chooseStarWarsInfo()
    .then(response => {
        console.log(`Success Basic Info`);
    })
    .catch(error => {
        console.log(`error`)
        console.error(error) 
    });
}

function pageNext() {
    reset();
    if(nextInfo) {
        url = new URL(nextInfo);
    }
    chooseStarWarsInfo()
    .then(response => {
        console.log(`Success Basic Info`);
    })
    .catch(error => {
        console.log(`error`)
        console.error(error) 
    });
}

// ACTUALLY YEAR

let year = new Date().getFullYear();

document.querySelector("#year").innerHTML = year;
