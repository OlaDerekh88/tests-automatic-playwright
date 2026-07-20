console.log("\n--------Async / Await--------\n")

// TypeScript is an asynchronous language (same as JavaScript!)
// very easy we can write asynchronous code
// what is biggest advantage of asynchronous code in JS?

// - we can write code that will make requests in backend, when page is responsive
// so we can run multiple tasks at once!

// Remember that JS was first used in HTML pages!

// Async functions are best for long operations such as:
// - reading files
// - sending request in REST API
// - operations on database
// - parallel tests in Playwright
// - many more

// We can run such async function, and in meantime we can do other quick tasks.
// When async function is finished, then the result will be presented.
// ... but how?

// Lets see how to use async functions
// Here is an example of async function, that after 2s will return some value:

import { loadUserDataAsync, loadUserDataSync } from "./helpers/async.helper"

// when we have async function and we use it as normal function, we wont get valid result:

console.log("calling sync function:")
const sampleData = loadUserDataSync()
console.log("sampleData:", sampleData)

console.log("\n--------------------------------------\n")

// uncomment code below to check async:
console.log("calling async function without await:")
const sampleDataFromAsync = loadUserDataAsync()
console.log("sampleDataFromAsync (without await!):", sampleDataFromAsync)

console.log("Finished!")

// on console 👀 you will get:

// calling async function without await:
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...
// sampleDataFromAsync (without await!): Promise { <pending> }
// Finished!
// loadUserData: Promise done - returning value!
