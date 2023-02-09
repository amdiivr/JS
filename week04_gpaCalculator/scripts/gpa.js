function getGrades() {
    let inputGrades = document.getElementById("grades").value;
    let cleanGrades = inputGrades.split(",");
    let getGradeArray = cleanGrades.map((upperGrade) => upperGrade.trim().toUpperCase());
    console.log(getGradeArray);
    return getGradeArray;
}

function lookupGrade(grade) {
    let gpaPoint = 0;
    if (grade === "A") {
        gpaPoint = 4;
    } else if (grade === "B") {
        gpaPoint = 3;
    } else if (grade === "C") {
        gpaPoint = 2;
    } else if (grade === "D") {
        gpaPoint = 1;
    }
    return gpaPoint;
    
}

function calculateGpa(grades) {
    let realPoints = grades.map((grade) => lookupGrade(grade));
    let gpa = realPoints.reduce((total, num) => total + num) / realPoints.length;
    return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
    let output = document.getElementById(selector);
    output.innerText = gpa;
}

function clickHandler() {
    let grades = getGrades();
    let gpa = calculateGpa(grades);
    outputGpa(gpa, "output");
}

document.getElementById("submitButton").addEventListener("click", clickHandler);