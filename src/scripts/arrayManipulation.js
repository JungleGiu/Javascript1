// 1.5 Array Transformation

//Level 1

// Exercise 1 : Given an array  [ 1, 2, 3, 4 ] use map method to create a new array with the squares of the original array.

let arr5 = [1,2,3,4]
let arr6 = arr.map((n)=> n*n)
console.log(arr6)

// Exercise 2 : Given an array  [ 1, 2, 3, 4 ] use filter method to create a new array with only even numbers.

let arr7 = arr5.filter((n) => n%2 ==0)
console.log(arr7)

// Exercise 3 : Given an array [ 1, 10, 8, 11 ]  use the find method to find the first number bigger than 10

let arr8 = [1,10,8,11]
console.log(arr8.find((n)=> n > 10))

// Exercise 4 : Given an array  [ 13, 7, 8, 21 ] use reduce method to calculate the sum of all the numbers

let arr9= [13,7,8,21]
console.log(arr9.reduce((acc, n)=> acc + n, 0 ))

// Level 2

// Exercise 5 : Given an array  [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ] create a single line function that : filters numbers bigger than 10, multiplies each filtered number for 2, calculates the sum beetween all filtered and multiplied numbers an returns the sum.

let arr10 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

let oneLineTransform = arr => arr.filter((n) => n>10).map((n)=> n *2).reduce((acc,n) => acc + n, 0)
console.log(oneLineTransform(arr10))

// Level 3

/// Exercise 6 : Given an array [ 11, 12, 13, 14 ] use every and some methods to check if all or just some numbers are bigger than 10

let arr11 = [ 11, 12, 13, 14 ]
console.log(arr11.every((n) => n>10)) // all numbers are bigger than 10
console.log(arr11.some((n) => n>10))

// 1.6 Array loops

// Level 1

// Exercise 1 : Given an array of names use forEach method to print each name in the console.

let names = ['Anna', 'Bernat', 'Clara'];

names.forEach((name) => console.log(name));


// Exercise 2 : Given an array of names use a for-of loop to print each name in the console.

for (let name of names) {
  console.log(name);
}

// Exercise 3 : Given an array of numbers [1, 2, 3, 4, 5, 6] use filter method to create a new array with only even numbers.

let numbers = [1, 2, 3, 4, 5, 6];

let newarr = numbers.filter((n) => n % 2 == 0)

console.log(newarr)

// Level 2

// Exercise 4 : Given an object { name: 'Ona', age: 25, city: 'Barcelona' } with key value pairs use for-in loop to print each object property and it's value in the console.

let obj = { name: 'Ona', age: 25, city: 'Barcelona' };

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`); 
}

// Exercise 5 : Given an array of numbers use for-of loop to print each number in the console till number five, use break statement to stop the loop.

for (let num of numbers) {
  if (num > 5) {
    break;
  }
  console.log(num);
}

// Level 3

// Exercise 6 : Given an array of names use for-of loop to print each name and it's index in the console.

for ( let name of names) {
  console.log(name, names.indexOf(name) )
}
