// 1.2 - Ternary Operators

// Exercise 1 : Create a function named canDrive that accepts an age parameter  and  thorugh a ternary operator checks if the person can drive and returns 'You can drive' if the person is 18 or older, and 'You cannot drive' if the person is under 18.

let canDrive = (age) => age >= 18 ? "You can drive" : "You cannot drive";

console.log(canDrive(17));
console.log(canDrive(19));

//Exercise 2 : Write an expresion to determine which is the greatest between 2 given numbers. If the first number is greatest return 'Num1 is the greatest' else return 'Num2 is the greatest'

let num1 = 3;
let num2 = 0;

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

let greatestNum = (a, b, c) => {
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

let isEvenOrOdd = (arr) => {
  let evens = [];
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 == 0 ? evens.push(arr[i]) : odds.push(arr[i]);
  }
  return `Even numbers are ${evens}, and odds numbers are ${odds}`;
};

let array = [2, 5, 6, 7, 8, 3, 1];

console.log(isEvenOrOdd(array));