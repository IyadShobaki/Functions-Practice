function makeHelloWorld() {
  function helloWorld() {
    console.log("Hello, world!");
  }
  return helloWorld;
}

const helloWorld = makeHelloWorld();

helloWorld();
