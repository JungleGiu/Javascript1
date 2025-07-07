'use strict';
//1.1 - Arrow Functions
// Exercise 1 : Function conversion. From a normal add function that sums two numbers recibed through arguments, to an arrow function that sums two numbers received through parameters. 

function add(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

console.log(add(1, 2));
console.log(addArrow(1, 2));

// Exercise 2 : Create an arrow functions without parameters that returns a random number between 0 and 100.

const randomNum = () =>  Math.floor(Math.random()*101)

console.log(randomNum())

