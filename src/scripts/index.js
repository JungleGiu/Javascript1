"use strict";

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

const randomNum = () => Math.floor(Math.random() * 101);

console.log(randomNum());

// Exercise 3 : Create a class Person with a name property and a greet method expressed with an arrow function that utilizes 'this' this keyword to refer to name property of an instance

class Person {
  constructor(name) {
    this.name = name;
  }
  greet = () => console.log(`Hello ${this.name}`);
}

const me = new Person("Giu");
me.greet();

//Level 2

// Exercise 4 : Create a function named printNumbers that accepts an array of numbers and uses a loop to print in console each number with an arrow function

const printNumbers = (array) => {
  const print = (num) => console.log(num);

  for (let i = 0; i < array.length; i++) {
    print(array[i]);
  }
};
const arr = [1, 4, 7, 9, 5];

printNumbers(arr);

//Level 3

// Exercise 5 : Create an arrow function that prints a message with a 3 seconds delay using setTimeout

const wait3Sec = () => {
  setTimeout(() => {
    console.log("Three seconds later");
  }, "3000");
};

wait3Sec();

// 1.2 - Ternary Operators

// Exercise 1 : Create a function named canDrive that accepts an age parameter  and  thorugh a ternary operator checks if the person can drive and returns 'You can drive' if the person is 18 or older, and 'You cannot drive' if the person is under 18.

const canDrive = (age) => (age >= 18 ? "You can drive" : "You cannot drive");

console.log(canDrive(17));
console.log(canDrive(19));

//Exercise 2 : Write an expresion to determine which is the greatest between 2 given numbers. If the first number is greatest return 'Num1 is the greatest' else return 'Num2 is the greatest'

const num1 = 3;
const num2 = 0;

const greatest = num1 > num2 ? "Num1 is the greatest" : "Num2 is the greatest";

console.log(greatest);

//Level 2

//Exercise 3 : Write an expression that chains ternary operators to determine if a number is positive, negative or 0.
//  Then create a function that accepts 3 parameters (numbers a,b,c) and uses a ternary operator to determine witch one is the gratest

let number = 8;
 let result = number == 0
    ? "Number is 0"
    : number > 0
    ? "Number is positive"
    : "Number is negative";

console.log(result);

const greatestNum = (a,b,c) =>{
let gratest = a>b && a>c 
? 'a is the greatest' 
: b>a && b>c 
? 'b is the gratest' 
: 'c is the gratest'
return gratest
}

console.log(greatestNum(6,9,1))

//Level 3 

//Exercise 4 : Write a function that accpts an array of numbers and determines for each number if it's even or odd through a loop and a ternary operator

const evenOrOdd = (arr) => {
  let evens = []
  let odds = []
  for (let i = 0 ; i < arr.length ; i++ ){
    arr[i]%2 == 0 ? evens.push(arr[i]): odds.push(arr[i])
  }
  return `Even numbers are ${evens}, and odds numbers are ${odds}`
}

const array = [2,5,6,7,8,3,1]

console.log(evenOrOdd(array))

// 1.3 Callbacks

//Level 1

// Exercise 1 : Write a function called 'process' that accepts 2 parameters, first is a number, the second a callback function. 'process' function must call callback function and pass it the number as parameter.

const callback =(num) => num * 2

const process = (num, funct) => funct(num)

console.log(process(6,callback))



