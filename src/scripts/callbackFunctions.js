// 1.3 Callbacks

//Level 1

// Exercise 1 : Write a function called 'process' that accepts 2 parameters, first is a number, the second a callback function. 'process' function must call callback function and pass it the number as parameter.

let multiplyFor2 = (num) => num * 2;

let process = (num, funct) => funct(num);

console.log(process(6, multiplyFor2));

// Exercise 2 : write a function 'calurator' that accepts 3 parameters, 2 numbers and a callback function. 'calculator' function must call callback function with the 2 numbers as parameters. Then call the 'calculator' with a function that sums the two numbers as parameter.

let sum = (num1, num2) => num1 + num2;

let calculator = (num1, num2, funct) => funct(num1, num2);

console.log(calculator(4, 5, sum));

// Level 2

// Exercise 3 : Write a function 'waitForGreet' that accepts 2 parameters, a name and a callback function.'waitForGreet' function must delay 2 seconds the call to callback and pass the name as parameter.

let greet = (name) => {
  console.log(`Hello ${name}!`);
};
let waitForGreet = (name, funct) => {
  setTimeout(() => {
    funct(name);
  }, "2000");
};

waitForGreet("Giu", greet);

//Exercise 4 : Write a function 'processElements' that accepts 2 parameters, an array and a callback function. 'processElements' function must call the callback function for each element of the array.

let callback2 = (e) => e + 1;
let array1 = [1, 2, 3, 4, 5, 6, 7, 8];

let processElements = (array, funct) => {
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
    newarr.push(funct(array[i]));
  }
  return newarr;
};

console.log(processElements(array1, callback2));

//Level 3

// Exercise 5 : Write a function 'processString' that accepts 2 parameters, a string and a callabck function. 'processString' must transform all characters of the strig to uppercase and call the callback function with the transformed string as parameter

let callBack = (str) => console.log(`${str}`)
let string = 'hello world'
const processString = (str , funct) => {
let transform = str.toUpperCase()
funct(transform)
}

processString(string,callBack)
