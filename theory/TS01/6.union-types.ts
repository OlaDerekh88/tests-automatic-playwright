console.log("\n--------Union types--------\n")

// Union types allows us to define more than one type for variable
// Union types allows us to "connect different types"

// Before we did:
let someValue1: number

// and then:
someValue1 = 1 // this is ok ✅
// someValue1 = "2" // this is not ok ⛔
// someValue1 = true // this is not ok ⛔

// but we can assign 2 types - both number and string:
let someValue2: number | string
// and this is Union Type

// and now:
someValue2 = 1 // this is ok ✅
someValue2 = "2" // this is also ok ✅
// someValue2 = true // this is not ok ⛔

// We can use Union Types on arrays:
let someArray: (number | string)[] = []

someArray.push(1) // this is ok ✅
someArray.push("1") // this is also ok ✅
// someArray.push(true) // this is not ok ⛔

console.log("someArray:", someArray)
// on console 👀 you will get:
// someArray: [ 1, '1' ]

console.log("\n--------Union types in functions--------\n")

// Lets try declaring new function:
function printValue(value: number | string): void {
    console.log("Printing value:", value)
}

printValue("test") // this is ok ✅
printValue(1234) // this is ok ✅
// printValue(true) // this is not ok ⛔

// on console 👀 you will get:
// Printing value: test
// Printing value: 1234

// Lets try declaring new function:
function printMoreValues(value: number | string | boolean): void {
    console.log("Printing more values:", value)
}

printMoreValues("test") // this is ok ✅
printMoreValues(1234) // this is ok ✅
printMoreValues(true) // this is ok ✅

// on console 👀 you will get:
// Printing values: test
// Printing values: 1234
// Printing values: true

// 💡TIP: Union types - 🔗 https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
