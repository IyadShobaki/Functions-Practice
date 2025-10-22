/////   Unpacking arrays into function arguments

// Here we "spread out" the numbers in the array
// as separate function arguments.
const nums = [4, 8, 15, 16, 23, 42];
Math.max(...nums); // 42

// The above is equivalent to this
Math.max(4, 8, 15, 16, 23, 42); // 42

////   Copying and Combining Arrays
// copy
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]
// copy objects
const original1 = { name: "Alice", age: 25 };
const copy1 = { ...original1 };
console.log(copy1); // { name: "Alice", age: 25 }

///////////////////////////////////////
// combine
const a = [1, 2, 3];
const b = [4, 5, 6];
const combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// combine onjects
const obj1 = { name: "Alice" };
const obj2 = { age: 25 };
const combined1 = { ...obj1, ...obj2 };
console.log(combined1); // { name: "Alice", age: 25 }

////////////////////////////////////////////
// modify
const a1 = [1, 2, 3];

// add 4 to the end of the array
const aPlusRight = [...a1, 4];
console.log(aPlusRight); // [1, 2, 3, 4]

// add 0 to the beginning of the array
const aPlusLeft = [0, ...a1];
console.log(aPlusLeft); // [0, 1, 2, 3]
// modify objects

// If we add the new property last, it will overwrite
// an existing property.
const alice = { name: "Alice", age: 35, job: "Surfer" };
const newAlice = { ...alice, job: "Software Engineer" };
console.log(newAlice.job); // "Software Engineer"

// If we add the new property first, an existing property
// will overwrite it.
const alice1 = { name: "Alice", age: 35, job: "Surfer" };
const newAlice1 = { job: "Software Engineer", ...alice1 };
console.log(newAlice1.job); // "Surfer"

///

function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(add(...numbers)); ///6

/////////////////   Rest
const showTeam = (leader, ...members) => {
  console.log(`Leader: ${leader}`);
  console.log(`Members: ${members.join(", ")}`);
};

showTeam("Alice", "Bob", "Charlie", "Diana");
// Leader: Alice
// Members: Bob, Charlie, Diana

///
function multiply(multiplier, ...numbers) {
  return numbers.map((num) => num * multiplier);
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
  return [...arr1, "+", ...arr2];
}

// Example usage
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = combineArrays(arr1, arr2);
console.log(result); // [1, 2, 3, "+", 4, 5, 6]

///////////////////
/*  write a function called updateProfile that accepts two object parameters:
profile and changes. It should combine its object arguments into one object and return the result.

If the same property is in both objects, the value from changes (the second parameter) should be used.
 */
// Declare your function here
function updateProfile(profile, changes) {
  return { ...profile, ...changes };
}
// Example usage
const profile = { name: "Alice", age: 35, job: "Surfer" };
const changes = { job: "Software Engineer", location: "Hawaii" };

const updatedProfile = updateProfile(profile, changes);

console.log(updatedProfile);
// { name: "Alice", age: 35, job: "Software Engineer", location: "Hawaii" }

console.log(profile);
// { name: "Alice", age: 35, job: "Surfer" }

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
function max(...arr) {
  let maxValue = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}
console.log(max(4, 8, 15, 16, 23, 42)); // 42
