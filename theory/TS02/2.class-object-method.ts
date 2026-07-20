console.log("\n--------Classes--------\n")

// Class concept in TypeScript is similar to class in JavaScript.
// Main difference is with types

// example of class:

class Human {
    name: string

    constructor(name: string) {
        this.name = name
    }

    greet(): string {
        return "Hello, my name is " + this.name
    }
}

const daleCooper = new Human("Dale Cooper")
console.log(daleCooper.greet())

// on console 👀 you will get:
// Hello, my name is Dale Cooper

// methods that does not return a value - we can mark with "void"
// look at example below with method increaseAge():

class Animal {
    name: string
    age: number

    constructor(name: string) {
        this.name = name
        this.age = 0
    }

    increaseAge(): void {
        this.age++
    }
}

const lessieDog = new Animal("Lessie")
console.log(lessieDog.increaseAge())

// on console 👀 you will get:
// undefined <-- because increaseAge() returns void!

console.log(lessieDog.age)

// on console 👀 you will get:
// 1

console.log("\n--------Classes and value of properties--------\n")

// properties in class need values
// values can be assigned immediately or in constructor
// otherwise - an error will be returned

// class ClassA {
//     name: string // value assigned in constructor
//     type = "super S" // value assigned immediately
//     age: number // ⛔ Error: Property 'age' has no initializer and is not definitely assigned in the constructor.ts(2564)

//     constructor(name: string) {
//         this.name = name
//     }
// }

console.log("\n--------Classes and Types--------\n")

// We can use name of a class as a type when we declare variable.

let someHuman: Human

// here we have some additional actions
// and later we initialize object of type Human:

someHuman = new Human("Some")

// 💡TIP: This might be useful in tests - where we first define PageObjects and later we assign pages to that variable

console.log("\n--------Classes and Types--------\n")

// Lets look at more complicated example.
// We have function greet, that needs human object:

function greet(human: Human): void {
    console.log("New human arrived!")
    console.log(human.greet())
}

greet(daleCooper)

// on console 👀 you will get:
// New human arrived!
// Hello, my name is Dale Cooper

// Now we can not use in greet() any other object with type different than Human.
// E.g. using Animal object will return an error:
// greet(lessieDog) // TODO: uncomment to see error in IDE ⛔

// Finally lets try a function that returns an object Animal:

function getAnimal(name: string): Animal {
    return new Animal(name)
}

let someDog: Animal
let otherHuman: Human

// now lets assign object from function to our variables:
someDog = getAnimal("Burek")
// otherHuman = getAnimal("Burek") // TODO: uncomment to see error in IDE ⛔

console.log("\n--------Classes - public and private--------\n")

// public and private are access specifiers
// private fields and methods can not be accessed outside class

class ClassA {
    publicProperty: string
    public anotherPublicProperty: string
    private privateProperty: string
    protected protectedProperty: string

    constructor(publicValue: string, anotherPublicValue: string, privateValue: string, protectedProperty: string) {
        this.publicProperty = publicValue
        this.anotherPublicProperty = anotherPublicValue
        this.privateProperty = privateValue
        this.protectedProperty = protectedProperty
    }

    helloPublic(): void {
        console.log("helloPublic!")
    }

    public anotherHelloPublic(): void {
        console.log("anotherHelloPublic!")

        // here we have an access to private property and private method
        // because we are in the same class!
        console.log("hello privateProperty!", this.privateProperty)
        this.helloPrivate()

        // here we have an access to protected property and protected method
        // because we are in the same class!
        console.log("hello protectedProperty!", this.protectedProperty)
        this.helloProtected()
    }

    private helloPrivate(): void {
        console.log("helloPrivate!")
    }

    protected helloProtected(): void {
        console.log("helloProtected!")
    }
}

const classA = new ClassA("1", "2", "private 3", "protected 4")
classA.publicProperty // this field is visible and accessible!
classA.anotherPublicProperty // this field is visible and accessible!
// classA.privateProperty // this will return an error! ⛔ Property 'privateProperty' is private and only accessible within class 'ClassA'.ts(2341)
// classA.protectedProperty // this will return an error! ⛔ Property 'protectedProperty' is protected and only accessible within class 'ClassA' and its subclasses.ts(2445)

classA.helloPublic() // this method is visible and accessible!
classA.anotherHelloPublic() // this method is visible and accessible!
// classA.helloPrivate() // this will return an error! ⛔ Property 'helloPrivate' is private and only accessible within class 'ClassA'.ts(2341)
// classA.helloProtected() // this will return an error! ⛔ Property 'helloProtected' is protected and only accessible within class 'ClassA' and its subclasses.ts(2445)

// Why use private fields/methods?
// Sometimes we want to have method only available inside class.
// - such methods can dive logic into smaller portions, but we want to use it only inside class.
// Then, not to confuse team members - we make them private.

// Ignore this line - used to be able to redeclare variables in this project
export {}
