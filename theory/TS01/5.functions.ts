console.log("\n--------Functions with optional and default parameters--------\n")

// We can create optional and default parameters in functions
// default parameters will have its type detected by TypeScript:
function addNewNumbers(numberOne: number, numberTwo = 2): number {
    // numberTwo is optional and has default value = 2
    return numberOne + numberTwo
}

// we can use function addNewNumbers with only one parameter, and second will have default value:
let resultSum = addNewNumbers(1)
console.log("result of addNewNumbers(1):", resultSum)

// on console 👀 you will get:
// result of addNewNumbers(1): 3

// you can also override default value:
resultSum = addNewNumbers(1, 4)
console.log("result of addNewNumbers(1, 4):", resultSum)

// Lets try declaring new function:
function doSomething(numberOne: number): void {
    console.log("numberOne for addTwoStrings has value:", numberOne)
}

// what about passing 0 parameters?
// you will get error:
// Expected 1 arguments, but got 0.ts(2554)
// 5.functions.ts(22, 22): An argument for 'numberOne' was not provided.
// doSomething() // TODO: uncomment to see error in IDE ⛔

console.log("\n--------Functions (Anonymous functions)--------\n")

// we can assign function to variable:
const addNumbers = function (x: number, y: number): number {
    return x + y
}

// and then use variable as function:
const addNumbersResult = addNumbers(2, 4)

console.log("result of addNumbers(2, 4):", addNumbersResult)
// on console 👀 you will get:
// result of addNumbers(2, 4): 6

console.log("\n--------Functions (Arrow functions)--------\n")

// we can assign function to variable:
const multiplyNumbers = (x: number, y: number): number => {
    return x * y
}

// and then use variable as function:
const multiplyNumbersResult = multiplyNumbers(2, 4)

console.log("result of multiplyNumbers(2, 4):", multiplyNumbersResult)
// on console 👀 you will get:
// result of multiplyNumbers(2, 4): 8
