"use strict";

/*  */

/* // These are equivalent
const square = (x) {
  return x * x;
} 

const square = (x) => x * x; 

const square = x => x * x; // Omit parentheses for a single parameter

// Regular function expression
arr.map(function (item) {
  return item * 2;
});

// Equivalent arrow function expression
arr.map((item) => item * 2);

 Although arrow functions allow implicit return statements, they aren’t required.
*/
/////////////////////////////////
////// Let’s practice the syntax of arrow functions.
// Rewrite these function expressions using arrow functions.
var wannaBeArrow = function wannaBeArrow() {
  return "Please, make me an arrow function!";
};

var wannaBeArrowArrow = function wannaBeArrowArrow() {
  return "Please, make me an arrow function";
};

var wannaBeArrowToo = function wannaBeArrowToo(developerName) {
  var message = "".concat(developerName, ", please, make me an arrow function!");
  return message;
};

var wannaBeArrowTooArrow = function wannaBeArrowTooArrow(developerName) {
  return "".concat(developerName, ", please, make me an arrow function!");
};
/* console.log(wannaBeArrow());
console.log(wannaBeArrowToo("Elise Bouer"));

console.log(wannaBeArrowArrow());
console.log(wannaBeArrowTooArrow("Elise Bouer")); */
////////////////////////////
/// Convert the callback into an arrow function for the following


var arr = [1, 2, 3];
var arrSquared = arr.map(function (item) {
  return item * item;
});
var arrSquaredArrow = arr.map(function (item) {
  return item * item;
});