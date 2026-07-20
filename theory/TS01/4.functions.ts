console.log("\n--------Functions (Named functions)--------\n")

// To create function you have to use following pattern:
// function [name]([parameter]:[type]): [returned type] {
//     [body of function]
//     [optional return some value]
// }

// simplest example of function without any parameters and no return:

function printHello(): void {
    console.log("Hello World!")
}

// function that does not return anything - returns VOID

// to use above functions just call it by name (same as in JavaScript):
printHello()

// on console 👀 you will get:
// Hello World!

// to see what function printHello() returns we can use console.log():
console.log("printHello() returns:", printHello())

// on console 👀 you will get:
// printHello() returns: undefined

// Other example of function, that returns string (with type added):
function getHello(): string {
    return "Hello World!"
}

// to use functions just call it by name and assign result to new variable:
const hello = getHello()
console.log("result of getHello():", hello)

// on console 👀 you will get:
// result of getHello(): Hello World!

console.log("\n--------Function and parameters--------\n")

// more complex example with parameters - both numbers and number returned:
function addTwoNumbersNotOptimal(numberOne: number, numberTwo: number): number {
    const result = numberOne + numberTwo
    return result
}

// or shorter:
function addTwoNumbers(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo
}

// to use functions just call them by name and pass parameters:
const result1 = addTwoNumbers(1, 2)
// result of that function will be stored in variable 'result1' and now we can display its value:
console.log("result of 1 + 2:", result1)

// on console 👀 you will get:
// result of 1 + 2: 3

// in TypeScript you can not pass any other type than defined!
// so if you try to pass string - you will get error:
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// const result2 = addTwoNumbers('a', 'b') // TODO: uncomment to see error in IDE ⛔

console.log("\n--------Function and type 'any'--------\n")

// you can create function that will consume any parameters and process them using any type:
function addTwoValues(valueOne: any, valueTwo: any): number {
    return valueOne + valueTwo
}

const resultFromAddTwoValues = addTwoValues(1, "test")

// result of that function will be stored in variable 'resultFromAddTwoValues' and now we can display its value:
console.log('result of addTwoValues(1, "test"):', resultFromAddTwoValues)
// but this is hack because "any" type should be avoided! ⛔
