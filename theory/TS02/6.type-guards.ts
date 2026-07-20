console.log("\n--------Type Guards--------\n")

// Type Guards are "just" type checks
// - typeof
// - instanceof
// - in

// "instanceof" and "typeof" you already know ;)

// lets prepare data for some tests:

interface simpleCar {
    maxSpeed: number
    color: string
}

class Car {
    // maxSpeed = 12
    constructor() {
        console.log("constructor of Car class")
    }
}

class Bus {
    constructor() {
        console.log("constructor of Bus class")
    }
}

// lets prepare objects for tests:

const stringValue = "string value"
const numberValue = 123.42
const carInstance = new Car()
const busInstance = new Bus()
const mySimpleCar: simpleCar = {
    color: "black",
    maxSpeed: 420
}

console.log("\n--------Type Guards - typeof--------\n")

// We can check type of primitives using "typeof":

console.log("Check typeof numberValue:", typeof numberValue)
console.log("Check typeof stringValue:", typeof stringValue)
console.log("Check typeof carInstance:", typeof carInstance)
console.log("Check typeof mySimpleCar:", typeof mySimpleCar)
console.log("Check if stringValue typeof string:", typeof stringValue === "string")
console.log("Check if stringValue typeof number:", typeof stringValue === "number")

// "typeof" works good for primitives!

// Following code will return error:
// This comparison appears to be unintentional because the types '"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"' and '"Car"' have no overlap.ts(2367)
// console.log("Check if carInstance typeof Car:", typeof carInstance === 'Car') // TODO: uncomment to see error in IDE ⛔
// console.log("Check if mySimpleCar typeof simpleCar:", typeof mySimpleCar === "simpleCar") // TODO: uncomment to see error in IDE ⛔

console.log("\n--------Type Guards - instanceof--------\n")

// For classes we use "instanceof":

console.log("Check if carInstance instanceof Car:", carInstance instanceof Car)
console.log("Check if carInstance instanceof Bus:", carInstance instanceof Bus)

// "instanceof" is only for classes!
// Primitives and interfaces will rerun errors!

// Following code will return error:
// console.log("Check if carInstance instanceof Car:", stringValue instanceof Car) // TODO: uncomment to see error in IDE ⛔ The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter.ts(2358)
// console.log("Check if mySimpleCar instanceof simpleCar:", mySimpleCar instanceof simpleCar) // TODO: uncomment to see error in IDE ⛔ 'simpleCar' only refers to a type, but is being used as a value here.ts(2693)

console.log("\n--------Type Guards - in--------\n")

// For interfaces and classes we use "in":
console.log("Check if mySimpleCar has property 'maxSpeed':", "maxSpeed" in mySimpleCar)
console.log("Check if carInstance has property 'maxSpeed':", "maxSpeed" in carInstance)

// "in" is only for classes and interfaces!
// Primitives will return errors!

// Following code will return error:
// console.log("Check if stringValue has property 'maxSpeed':", "maxSpeed" in stringValue) // TODO: uncomment to see error in IDE ⛔ Type 'string' is not assignable to type 'object'.ts(2322)

// Type Guards - 🔗 https://basarat.gitbook.io/typescript/type-system/typeguard
// Type Guards - 🔗 https://blog.logrocket.com/how-to-use-type-guards-typescript/
// Union types i Type Guards - 🔗 https://fsgeek.pl/post/typescript-type-guard-type-predicate/

// Ignore this line - used to be able to redeclare variables in this project
export {}
