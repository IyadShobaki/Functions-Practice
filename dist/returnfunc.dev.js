"use strict";

function makeHelloWorld() {
  function helloWorld() {
    console.log("Hello, world!");
  }

  return helloWorld;
}

var helloWorld = makeHelloWorld();
helloWorld();