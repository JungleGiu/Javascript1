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
let result =
  number == 0
    ? "Number is 0"
    : number > 0
    ? "Number is positive"
    : "Number is negative";

console.log(result);

const greatestNum = (a, b, c) => {
  let gratest =
    a > b && a > c
      ? "a is the greatest"
      : b > a && b > c
      ? "b is the gratest"
      : "c is the gratest";
  return gratest;
};

console.log(greatestNum(6, 9, 1));

//Level 3

//Exercise 4 : Write a function that accpts an array of numbers and determines for each number if it's even or odd through a loop and a ternary operator

const evenOrOdd = (arr) => {
  let evens = [];
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 == 0 ? evens.push(arr[i]) : odds.push(arr[i]);
  }
  return `Even numbers are ${evens}, and odds numbers are ${odds}`;
};

const array = [2, 5, 6, 7, 8, 3, 1];

console.log(evenOrOdd(array));

// 1.3 Callbacks

//Level 1

// Exercise 1 : Write a function called 'process' that accepts 2 parameters, first is a number, the second a callback function. 'process' function must call callback function and pass it the number as parameter.

const callback = (num) => num * 2;

const process = (num, funct) => funct(num);

console.log(process(6, callback));

// Exercise 2 : write a function 'calurator' that accepts 3 parameters, 2 numbers and a callback function. 'calculator' function must call callback function with the 2 numbers as parameters. Then call the 'calculator' with a function that sums the two numbers as parameter.

const sum = (num1, num2) => num1 + num2;

const calculator = (num1, num2, funct) => funct(num1, num2);

console.log(calculator(4, 5, sum));

// Level 2

// Exercise 3 : Write a function 'waitForGreet' that accepts 2 parameters, a name and a callback function.'waitForGreet' function must delay 2 seconds the call to callback and pass the name as parameter.

const greet = (name) => {
  console.log(`Hello ${name}!`);
};
const waitForGreet = (name, funct) => {
  setTimeout(() => {
    funct(name);
  }, "2000");
};

waitForGreet("Giu", greet);

//Exercise 4 : Write a function 'processElements' that accepts 2 parameters, an array and a callback function. 'processElements' function must call the callback function for each element of the array.

const callback2 = (e) => e + 1;
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];

const processElements = (array, funct) => {
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
    newarr.push(funct(array[i]));
  }
  return newarr;
};

console.log(processElements(array1, callback2));

//Level 3

// Exercise 5 : Write a function 'processString' that accepts 2 parameters, a string and a callabck function. 'processString' must transform all characters of the strig to uppercase and call the callback function with the transformed string as parameter

const call = (str) => console.log(`${str}`)
const string = 'hello world'
const processString = (str , funct) => {
let transform = str.toUpperCase()
funct(transform)
}

processString(string,call)

// 1.4 Rest and Spread operators

// Level 1

// Exercise 1 : Create 2 arrays then use spread operator to join them in a third array that contains all element from array1 and 2.

const arr1 = [1,3,4]
const arr2 = [5,7,8]
const arr3 = [...arr1, ...arr2]
console.log(arr3)

// Exercise 2 : Create a function 'sum' that uses rest operator to accept an undefined number of parameters and return their total.

const sumAll = (...num) => num.reduce((acc,n)=> acc + n, 0)
console.log(sumAll(1,4,6,9,8))

// Level 2 

// Exercise 3 : Create an object 'object1', then create a second object 'object2' as a copy of 'object1' and change 1 property of 'object2'. Observe how 'object1' remains unchanged.

const object1 = {
name : 'ball',
size : 3
}

const object2 = {...object1}
object2.size = 5

console.log(object1, object2)

// Exercise 4 : Create an array with different elements. Destructure with rest operator to assign the first 2 elements to 2 variables  and assign the rest of the values to a third variable.


const [a,b,...c] = [1,2,3,4,5]

console.log(`first  ${a} second ${b} and rest  ${c}`) 

// Level 3

// Exercise 5 : Create a function that accepts 3 arguments, then create an array qith 3 elements and call the function with the elements of the array as arguments using the spread operator.

const func = (a,b,c) => console.log(a,b,c)
const arr4 = [1,2,3]
func(...arr4)

// Exercise 6 : Create two objects with different properties then use spread operator to merge them in a third object.

const obj1 = {
    name : 'ball',
    size : 3
    }
    const obj2 = {
        color : 'red',
        shape : 'sphere'
    }
    const obj3 = {...obj1, ...obj2}
    console.log(obj3)


// 1.5 Array Transformation

//Level 1

// Exercise 1 : Create an array with  1,2,3 and 4 numbers. Use map method to create a new array with the squares of the original array.

const arr5 = [1,2,3,4]
const arr6 = arr.map((n)=> n*n)
console.log(arr6)

// Exercise 2 : Create an array with  1,2,3 and 4 numbers. Use filter method to create a new array with only even numbers.

const arr7 = arr5.filter((n) => n%2 ==0)
console.log(arr7)

// Exercise 3 : Create an array with 1,10,8 and 11 numbers. Use find method to find the first number bigger than 10

const arr8 = [1,10,8,11]
console.log(arr8.find((n)=> n > 10))

// Exercise 4 : Create an array with  13,7,8 and 21 numbers. Use raduce method to calculate the sum of all the numbers

const arr9= [13,7,8,21]
console.log(arr9.reduce((acc, n)=> acc + n, 0 ))

// Level 2

// Exercise 5 : Given an array  "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", create a single line function that : filters numbers bigger than 10, multiplies each filtered number for 2, calculates the sum beetween all filtered and multiplied numbers an returns the sum.

const arr10 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

const oneLineTransform = arr => arr.filter((n) => n>10).map((n)=> n *2).reduce((acc,n) => acc + n, 0)
console.log(oneLineTransform(arr10))