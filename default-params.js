///  Default parameter value
const createGreeting = (name, greeting = `Hello, ${name}!`) => {
  return greeting;
};

/* console.log(createGreeting("Alice")); // "Hello, Alice!"
console.log(createGreeting("Alice", "Welcome, Bob!")); // "Welcome, Bob!" */

////////////////////////////////////

// Specify "" as the default value for middleName.
function generateName(firstName, lastName, middleName = "") {
  return `${firstName} ${middleName} ${lastName}`.replace("  ", " ");
}
generateName("Jane", "Doe"); // "Jane Doe"

//////////////////////////////////
//// Rewrite the populateZoo function to make it more concise.
// Give each parameter the appropriate default value and remove the if blocks
function populateZoo(a = "Koala", b = "Wombat", c = "Sloth") {
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
