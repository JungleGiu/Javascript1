// 1.4 Rest and Spread operators

// Level 1

// Exercise 1 : Create 2 arrays then use spread operator to join them in a third array that contains all element from array1 and 2.

let arr1 = [1,3,4]
let arr2 = [5,7,8]
let arr3 = [...arr1, ...arr2]
console.log(arr3)

// Exercise 2 : Create a function 'sum' that uses rest operator to accept an undefined number of parameters and return their total.

let sumAll = (...num) => num.reduce((acc,n)=> acc + n, 0)

console.log(sumAll(1,4,6,9,8))

// Level 2 

// Exercise 3 : Create an object 'object1', then create a second object 'object2' as a copy of 'object1' and change 1 property of 'object2'. Observe how 'object1' remains unchanged.

let object1 = {
name : 'ball',
size : 3
}

let object2 = {...object1}
object2.size = 5

console.log(object1, object2)

// Exercise 4 : Create an array with different elements. Destructure with rest operator to assign the first 2 elements to 2 variables  and assign the rest of the values to a third variable.


let [a,b,...c] = [1,2,3,4,5]

console.log(`first  ${a} second ${b} and rest  ${c}`) 

// Level 3

// Exercise 5 : Create a function that accepts 3 arguments, then create an array with 3 elements and call the function with the elements of the array as arguments using the spread operator.

let func = (a,b,c) => a+b+c
let arr4 = [1,2,3]
console.log(func(...arr4))

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

