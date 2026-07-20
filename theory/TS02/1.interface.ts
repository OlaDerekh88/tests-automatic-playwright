console.log("\n--------Interfaces--------\n")

// Interface in TypeScripts are for defining objects fields
// Interface - in simple words - is "more complex type"
// To define interface we have to:
// - use "interface" keyword
// - define list of properties with their types

interface human {
    name: string
    age: number
    hair: string
    height: number
    weight: number
}

// Now we can use interface when we create an object:
const daleCopper: human = {
    name: "Dale Cooper",
    age: 40,
    hair: "black",
    height: 182,
    weight: 70
}

// we have to provide all fields defined in interface!
// if we don't provide all properties and values we will get error
// e.g. without name:
// Property 'name' is missing in type '{ age: number; hair: string; height: number; weight: number; }'
// but required in type 'human'.ts(2741)

// TODO: uncomment to see error in IDE ⛔
// const otherHuman: human = {
//     age: 40,
//     hair: 'black',
//     height: 182,
//     weight: 70
// }

// interface can have optional properties:
interface book {
    title: string
    author: string
    owner?: string
}

// now both below usages are correct:
const book1: book = {
    author: "Jack Black",
    title: "The D."
}

const book2: book = {
    author: "John Doe",
    title: "Greenfield",
    owner: "Kyle"
}

console.log("book1:", book1)

// on console 👀 you will get:
// book1: { author: 'Jack Black', title: 'The D.' }

console.log("\n--------Interface and functions--------\n")

// Why to use interfaces?
// To aggregate data!

// look at example - function that needs a lot of parameters:

function printHumanData(name: string, age: number, hair: string, height: number, weight: number): void {
    console.log(`name:${name} age:${age} hair:${hair} height:${height} weight:${weight}`)
}

// usage is not so simple:
printHumanData(daleCopper.name, daleCopper.age, daleCopper.hair, daleCopper.height, daleCopper.weight)

// that is a lot of parameters...
// we can reduce it to one object/interface:

function printHuman(human: human): void {
    console.log(`name:${human.name} age:${human.age} hair:${human.hair} height:${human.height} weight:${human.weight}`)
}

// usage is simple:
printHuman(daleCopper)

// on console 👀 you will get:
// name:Dale Cooper age:40 hair:black height:182 weight:70

console.log("\n--------Interface and union types--------\n")

// we can use union types in interfaces:
interface magazine {
    title: string
    author: string
    pages: string | number
}

// now both below usages are correct:
const magazine1: magazine = {
    author: "Jack Black",
    title: "The D.",
    pages: "123"
}

const magazine2: magazine = {
    author: "John Doe",
    title: "The R.",
    pages: 321
}

console.log("magazine1:", magazine1)
console.log("magazine2:", magazine2)

// on console 👀 you will get:
// magazine1: { author: 'Jack Black', title: 'The D.', pages: '123' }
// magazine2: { author: 'John Doe', title: 'The R.', pages: 321 }

console.log("\n--------Interface inside interfaces--------\n")

// we can use interfaces in interfaces:
interface author {
    author: string
    country: string
}
interface game {
    title: string
    author: author
}

// now both below usages are correct:
const jackBlack: author = {
    author: "Jack Black",
    country: "USA"
}

const myGame: game = {
    author: jackBlack,
    title: "Journey"
}

console.log("myGame:", myGame)

// on console 👀 you will get:
// myGame: { author: { author: 'Jack Black', country: 'USA' }, title: 'Journey' }

// declaration of whole object at once:
const myGame2: game = {
    title: "Hades",
    author: {
        author: "XYZ",
        country: "UK"
    }
}

// Ignore this line - used to be able to redeclare variables in this project
export {}
