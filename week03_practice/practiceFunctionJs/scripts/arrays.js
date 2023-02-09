const numbers = ["one", "two", "three"];
const numbersHtml = numbers.map(function(number) {
    return `<li>${number}</li>`;
});
document.getElementById("myList").innerHTML = numbersHtml.join("");

//_______________________________________________________________________//

// Another example with MAP method become the list in points number

const letters = ["A", "B", "A"]
function lettersGradeToPoints(letter) {
    let points = 0;
    if (letter === "A"){
        points = 4;
    } else if (letter === "B"){
        points = 3;
    }
    return points;
}
const gpaPoints = letters.map(lettersGradeToPoints);

//_______________________________________________________________________//

// Another example with method REDUCE

// first way to do with FUNCTION EXPRESSION:
const pointsTotal = gpaPoints.reduce(function (total, item){
    return total + item
});
const gpa = pointsTotal / gpaPoints.length;
console.log(gpa)

// Second wat to do more simplified or ARROW FUNCTION:

// const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

//_______________________________________________________________________//

// Another example with method FILTER

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"]
// ARROW FUNCTION applied:
const result = fruits.filter((fruit) => fruit.length < 6);
console.log(result);

//_______________________________________________________________________//

// Another example with method indexOf

const valueNumber = [12, 34, 21, 54]
const luckyNumber = 21;
let luckyIndex = valueNumber.indexOf(luckyNumber);

console.log(luckyIndex);




