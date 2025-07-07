'use strict';

//1.1 - Arrow Functions

// Level 1

// Exercise 1 : Transform a normal add function that sums two numbers recibed through arguments, in an arrow function that sums two numbers received through parameters. 

function add(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

console.log(add(1, 2));
console.log(addArrow(1, 2));

// Exercise 2 : Create an arrow functions without parameters that returns a random number between 0 and 100.

const randomNum = () =>  Math.floor(Math.random()*101)

console.log(randomNum())

// Exercise 3 : Create a class Person with a name property and a greet method expressed with an arrow function that utilizes 'this' this keyword to refer to name property of an instance

class Person {
    constructor(name){
    this.name= name
}
 greet = () => console.log(`Hello ${this.name}`)

}

const me = new Person('Giu')
me.greet()

//Level 2

// Exercise 4 : Create a function named printNumbers that accepts an array of numbers and uses a loop to print in console each number with an arrow function

const printNumbers = (array) => {
    const print = num => console.log(num)

    for (let i = 0; i < array.length; i++){
        print(array[i])
    } 
}
const arr = [1, 4, 7, 9, 5];

printNumbers(arr)

//Level 3

// Exercise 5 : Create an arrow function that prints a message with a 3 seconds delay using setTimeout

const wait3Sec = () =>{
    setTimeout(() => {
 console.log('Three seconds later')
    }, '3000')
}

wait3Sec()

// 1.2 - Ternary Operators

// Exercise 1 : Create a function named canDrive that accepts an age parameter  and  thorugh a ternary operator checks if the person can drive and returns 'You can drive' if the person is 18 or older, and 'You cannot drive' if the person is under 18.

const canDrive = (age) => age >= 18 ? 'You can drive' : 'You cannot drive'

console.log(canDrive(17))
console.log(canDrive(19))


