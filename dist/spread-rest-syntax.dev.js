"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/////   Unpacking arrays into function arguments
// Here we "spread out" the numbers in the array
// as separate function arguments.
var nums = [4, 8, 15, 16, 23, 42];
Math.max.apply(Math, nums); // 42
// The above is equivalent to this

Math.max(4, 8, 15, 16, 23, 42); // 42
////   Copying and Combining Arrays
// copy

var original = [1, 2, 3];
var copy = [].concat(original);
console.log(copy); // [1, 2, 3]
// copy objects

var original1 = {
  name: "Alice",
  age: 25
};

var copy1 = _objectSpread({}, original1);

console.log(copy1); // { name: "Alice", age: 25 }
///////////////////////////////////////
// combine

var a = [1, 2, 3];
var b = [4, 5, 6];
var combined = [].concat(a, b);
console.log(combined); // [1, 2, 3, 4, 5, 6]
// combine onjects

var obj1 = {
  name: "Alice"
};
var obj2 = {
  age: 25
};

var combined1 = _objectSpread({}, obj1, {}, obj2);

console.log(combined1); // { name: "Alice", age: 25 }
////////////////////////////////////////////
// modify

var a1 = [1, 2, 3]; // add 4 to the end of the array

var aPlusRight = [].concat(a1, [4]);
console.log(aPlusRight); // [1, 2, 3, 4]
// add 0 to the beginning of the array

var aPlusLeft = [0].concat(a1);
console.log(aPlusLeft); // [0, 1, 2, 3]
// modify objects
// If we add the new property last, it will overwrite
// an existing property.

var alice = {
  name: "Alice",
  age: 35,
  job: "Surfer"
};

var newAlice = _objectSpread({}, alice, {
  job: "Software Engineer"
});

console.log(newAlice.job); // "Software Engineer"
// If we add the new property first, an existing property
// will overwrite it.

var alice1 = {
  name: "Alice",
  age: 35,
  job: "Surfer"
};

var newAlice1 = _objectSpread({
  job: "Software Engineer"
}, alice1);

console.log(newAlice1.job); // "Surfer"
///

function add(a, b, c) {
  return a + b + c;
}

var numbers = [1, 2, 3];
console.log(add.apply(void 0, numbers)); ///6
/////////////////   Rest

var showTeam = function showTeam(leader) {
  console.log("Leader: ".concat(leader));

  for (var _len = arguments.length, members = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    members[_key - 1] = arguments[_key];
  }

  console.log("Members: ".concat(members.join(", ")));
};

showTeam("Alice", "Bob", "Charlie", "Diana"); // Leader: Alice
// Members: Bob, Charlie, Diana
///

function multiply(multiplier) {
  for (var _len2 = arguments.length, numbers = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    numbers[_key2 - 1] = arguments[_key2];
  }

  return numbers.map(function (num) {
    return num * multiplier;
  });
}

console.log(multiply(2, 4, 6, 8)); /// [8, 12, 16]
/////////////////////////////////////////////////////

/* Write a function combineArrays(arr1, arr2) that takes two arrays as arguments and returns a new array that has the following elements in order:

the elements of arr1
the string "+"
the elements of arr2
Use spread syntax to combine the arrays. */
// Define your function here

function combineArrays(arr1, arr2) {
  return [].concat(_toConsumableArray(arr1), ["+"], _toConsumableArray(arr2));
} // Example usage


var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var result = combineArrays(arr1, arr2);
console.log(result); // [1, 2, 3, "+", 4, 5, 6]
///////////////////

/*  write a function called updateProfile that accepts two object parameters:
profile and changes. It should combine its object arguments into one object and return the result.

If the same property is in both objects, the value from changes (the second parameter) should be used.
 */
// Declare your function here

function updateProfile(profile, changes) {
  return _objectSpread({}, profile, {}, changes);
} // Example usage


var profile = {
  name: "Alice",
  age: 35,
  job: "Surfer"
};
var changes = {
  job: "Software Engineer",
  location: "Hawaii"
};
var updatedProfile = updateProfile(profile, changes);
console.log(updatedProfile); // { name: "Alice", age: 35, job: "Software Engineer", location: "Hawaii" }

console.log(profile); // { name: "Alice", age: 35, job: "Surfer" }
//////////////////////////////////////////////////////
//// Here we have a function max that relies on the arguments object to work with an unknown number of numerical arguments.
// Rewrite this function using the rest parameter syntax instead of the arguments variable.

/* function max() {
  let maxValue = arguments[0];

  for (let i = 0; i < arguments.length; i += 1) {
    if (maxValue < arguments[i]) {
      maxValue = arguments[i];
    }
  }

  return maxValue;
} */

function max() {
  for (var _len3 = arguments.length, arr = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    arr[_key3] = arguments[_key3];
  }

  var maxValue = arr[0];

  for (var i = 0; i < arr.length; i += 1) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}

console.log(max(4, 8, 15, 16, 23, 42)); // 42