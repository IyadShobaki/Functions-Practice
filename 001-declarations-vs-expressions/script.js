const dogs = [
  "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg",
  "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-2.jpg",
  "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-3.jpg",
  "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-4.jpg",
  "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-5.jpg",
  "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-6.jpg",
];

const dogElement = document.querySelector("#dog");
const buttonElement = document.querySelector("button");

/* // Original code (Using Declarations Functions)
function getRandomArrId(arrLength) {
  return Math.floor(Math.random() * arrLength);
}

function procrastinate() {
  dogElement.style.backgroundImage = `url(${dogs[getRandomArrId(dogs.length)]})`;
}

buttonElement.addEventListener("click", procrastinate);
*/

//////////////////
// Replace all the function declarations with function expressions.
// Don't change the function names or the code  of their bodies.

// My solution - Iyad
// buttonElement.addEventListener("click", function(){
//   console.log(dogElement.style.backgroundImage = `url(${dogs[
//     Math.floor(Math.random() * dogs.length)]})`);
// });

// Using Expressions Functions
const getRandomArrId = function (arrLength) {
  return Math.floor(Math.random() * arrLength);
};
const procrastinate = function () {
  dogElement.style.backgroundImage = `url(${
    dogs[getRandomArrId(dogs.length)]
  })`;
};

buttonElement.addEventListener("click", procrastinate);
