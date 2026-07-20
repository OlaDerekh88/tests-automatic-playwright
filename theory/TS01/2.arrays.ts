console.log("\n--------Arrays--------\n")

// Arrays - array is a list of elements
// for example lets create array of numbers:
let arrayOfNumbers = [1, 2, 3]

// and now lets print it on console:
console.log("arrayOfNumbers:", arrayOfNumbers)

// on console 👀 you will get:
// arrayOfNumbers: [1, 2, 3]

// by default TypeScript will detect type as: number[]

// we can do it by hand:
let otherArrayOfNumbers: number[]

// and then assign list of numbers:
otherArrayOfNumbers = [1, 2, 3]

// list of strings will not work - we will get error:
// Type 'string' is not assignable to type 'number'.ts(2322)
// otherArrayOfNumbers = ["1", "2", "3"] // TODO: uncomment to see error in IDE ⛔

// you can do all operations on array like push, pop, concat etc.
// For example you can add numbers to your array:
otherArrayOfNumbers.push(4)

// but adding any other type will result in error:
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// otherArrayOfNumbers.push("test") // TODO: uncomment to see error in IDE ⛔

// Ignore this line - used to be able to redeclare variables in this project
export {}
