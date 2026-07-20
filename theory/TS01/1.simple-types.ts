console.log("\n--------Simple types--------\n")

// to declare variable in JavaScript you have to use following pattern:
// [statement] [name] = [value]
// as an example:

let variableThatCanBeChanged = 12
const constantString = "World"

// TypeScript will detect type of those variables

// but when TypeScript 'detects' type, then you can not change it!
// 💡TIP: This is recommended style in TypeScript

variableThatCanBeChanged = 42 // this is ok ✅ - same type (number) but different value

// following code will throw error: Type 'string' is not assignable to type 'number'.ts(2322)

// variableThatCanBeChanged = '12' // TODO: uncomment to see error in IDE ⛔ Type 'string' is not assignable to type 'number'.ts(2322)

// you can also set type of each variable:
let numberVariable: number = 2
let stringVariable: string = "abc"
let boolVariable: boolean = true

// but this is excessive - you don't have to do this in TypeScript
// it can be useful when:
// - you declare variable
// - do some operations
// - then you assign value

// its better to just assign value without writing type:
let numberVariable2 = 2
let stringVariable2 = "abc"
let boolVariable2 = true

console.log("\n--------Simple types - delayed value assignment--------\n")

// declare a variable:

let someVariable: number
// it must be let because const will return an error:
// const someOtherVariable: number // ⛔ 'const' declarations must be initialized.ts(1155)

// console.log("Value of someVariable:", someVariable) // TODO: uncomment to see error in IDE ⛔ Variable 'someVariable' is used before being assigned.ts(2454)

// some operations...

// now we assign value to someVariable

someVariable = 12

console.log("Value of someVariable:", someVariable)

// this is very helpful, because now you can not assign anything other than number
// following code will throw error: Type 'string' is not assignable to type 'number'.ts(2322)

// someVariable = '12' // TODO: uncomment to see error in IDE ⛔

// you can check type of variable in different ways.
// One possibility is to use typeof:
console.log("Type of someVariable:", typeof someVariable)

// 💡TIP: Simple types are called "primitives" - they are number, string and boolean
// 💡TIP: Why not to use var? var is obsolete and should be not used in code
// more: 🔗 https://swiatfrontendu.pl/blog/dlaczego-nie-warto-uzywac-var-w-javascript/
