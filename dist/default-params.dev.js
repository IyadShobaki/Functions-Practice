"use strict";

///  Default parameter value
var createGreeting = function createGreeting(name) {
  var greeting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Hello, ".concat(name, "!");
  return greeting;
};
/* console.log(createGreeting("Alice")); // "Hello, Alice!"
console.log(createGreeting("Alice", "Welcome, Bob!")); // "Welcome, Bob!" */
////////////////////////////////////
// Specify "" as the default value for middleName.


function generateName(firstName, lastName) {
  var middleName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return "".concat(firstName, " ").concat(middleName, " ").concat(lastName).replace("  ", " ");
}

generateName("Jane", "Doe"); // "Jane Doe"
//////////////////////////////////
//// Rewrite the populateZoo function to make it more concise.
// Give each parameter the appropriate default value and remove the if blocks

function populateZoo() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Koala";
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Wombat";
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Sloth";

  /*   if (a === undefined) {
    a = "Koala";
  }
    if (b === undefined) {
    b = "Wombat";
  }
    if (c === undefined) {
    c = "Sloth";
  } */
  return [a, b, c];
}