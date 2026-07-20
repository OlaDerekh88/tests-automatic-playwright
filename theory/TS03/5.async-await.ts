import { loadUserDataAsync, returnsUndefined } from "./helpers/async.helper"

console.log("\n--------Async / Await--------\n")

console.log("Using async function:")

console.log("calling async function with await...")
const result = await loadUserDataAsync()
console.log(result)

// on console 👀 you will get:
// calling async function with await...
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...
// loadUserData: Promise done - returning value!
// [ 'Dale', 'Harry S. Truman', 'Hawk' ]

console.log("\n--------Using async function in another function--------\n")

// another example with function, that uses async function:

// function asyncCall(): Promise<void> { // this will return: SyntaxError: Unexpected reserved word
//   console.log('calling async function in asyncCall...')
//   const result = await loadUserData()
//   console.log(result)
// }

// we must use async keyword

// we can use following constuction
// but we should define returned type!
async function asyncCall() {
    console.log("calling async function in asyncCall...")
    const userData = await loadUserDataAsync()
    console.log("userData from asyncCall:", userData)
}

// and return type is Promise<void>:
async function asyncCallWithReturnType(): Promise<void> {
    console.log("calling async function in asyncCall...")
    const userData = await loadUserDataAsync()
    console.log("userData from asyncCall:", userData)
}
// async function must return value packed in Promise<>
// Promise<void> is almost the same as void but covered in Promise<>, that need to be resolved

await asyncCallWithReturnType()

// on console 👀 you will get:
// calling async function in asyncCall...
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...
// loadUserData: Promise done - returning value!
// [ 'Dale', 'Harry S. Truman', 'Hawk' ]

console.log("Finished!")

// What is Promise { <pending> }?

// Promise is just a Promise of a result.
// To get the result Promise need to be resolved:

// const sampleData = loadUserData()

// sampleData.then(realResult => {
//     console.log('realResult:', realResult)
// })

console.log("\n--------Async function with return type--------\n")

// another example of async function:

async function getAndFormatData(): Promise<string[]> {
    console.log("calling async function in getAndFormatData...")
    const userData = await loadUserDataAsync()

    return userData
}

// proper usage✅:

const returnedData = await getAndFormatData()
console.log("From getAndFormatData:", returnedData)
console.log("")

// on console 👀 you will get:
// calling async function in getAndFormatData...
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...
// loadUserData: Promise done - returning value!
// From getAndFormatData: [ 'Dale', 'Harry S. Truman', 'Hawk' ]

console.log("\n--------Async function - dangers--------\n")

// (mostly) invalid usage⛔:

const returnedDataWithoutAwait = getAndFormatData()

console.log("")

// and we expect that in returnedDataWithoutAwait has final result..
// but it contains a promise:
console.log("From getAndFormatData:", returnedDataWithoutAwait)

console.log("")

// we have to use await on Promise to get result:
console.log("From getAndFormatData with await:", await returnedDataWithoutAwait)

// and without "await" on console 👀 you will get:

// calling async function in getAndFormatData...
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...

// From getAndFormatData: Promise { <pending> }

// loadUserData: Promise done - returning value!
// From getAndFormatData with await: [ 'Dale', 'Harry S. Truman', 'Hawk' ]

// 💡TIP: why this is (mostly) invalid usage⛔?
// In some cases we want to operate on result value
// and this operation give us 2 different results depends if we operate on Promise or value from Promise:

const resultPromise = returnsUndefined()
console.log("resultPromise", resultPromise)
console.log("resultPromise !== undefined", resultPromise !== undefined)
const resultPromiseAfterAwait = await resultPromise
console.log("resultPromiseAfterAwait", resultPromiseAfterAwait)
console.log("resultPromiseAfterAwait !== undefined", resultPromiseAfterAwait !== undefined)

// and without "await" on console 👀 you will get:
// resultPromise Promise { <pending> }
// resultPromise !== undefined true
// resultPromiseAfterAwait undefined
// resultPromiseAfterAwait !== undefined false
