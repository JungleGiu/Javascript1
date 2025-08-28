// 1.7 Promises and Async/Await

//Level 1

// Exercise 1 : Create a promise that resolves in 2 seconds and returns the string 'Hello, world'.

 let promise = new Promise((resolve) => {
  setTimeout(()=>{
    resolve('Hello, world')
  }, 2000);
});

// Exercise 2 : Using the promise from former exercise, create a .then that prints the result in the console.

promise.then((res) =>{
  console.log(res)
})


// Exercise 3 : Create a promise that resolves in 2 seconds if the input is 'Hello' and rejects if is any other.

let input = 'Hello'

let promise2 =  new Promise ((resolve, reject) => {
  setTimeout(()=>{
    input == 'Hello' 
    ? resolve('resolved') 
    : reject('reject')
  }, 2000)
})

promise2.then(console.log).catch(console.error)

//Exercise 4 : Write an asynchronous function that uses await function to wait the result from promise in exercise 1 and prints it to the console.

let awaitPromise = async() =>{
 let res = await promise
  return res
}

awaitPromise().then(console.log)

// Level 2 

// Exercise 5 : Edit the asynchronous function un the former exercise using a try catch block to manage errors

let awaitPromise2 = async () =>{
  try {
    let res = await promise
    return res
  }
  catch(error){
  return error
  }
}
awaitPromise2().then(console.log).catch(console.error)

// Level 3

// Exercise 6 : create 2 promises that resolve in 2 and 3 seconds respectively then use Promise.all to wait for both promises to resolve and then print their results in the console.

let firstPromise = new Promise ((res ) =>{
setTimeout(()=>{
res('first')
}, 2000)
})

let secondPromise = new Promise((res) => {
  setTimeout(()=>{
    res('second')
  }, 3000)
})

Promise.all([firstPromise, secondPromise]).then(res => console.log(res))