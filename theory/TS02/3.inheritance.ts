console.log("\n--------Inheritance--------\n")

// Inheritance in programming refers to the ability of a class to inherit properties and behaviors from another class.
// It allows a new class, called the "derived class" or "subclass," to inherit the attributes and methods of an existing class, known as the "base class" or "superclass."

// First, lets define superclass (of base class):

class BasePage {
    baseUrl: string
    other = "value"

    constructor() {
        console.log("constructor from BasePage class")
        this.baseUrl = "myUniqueUrl"
    }

    openMenu(): void {
        console.log("Action openMenu from BasePage class")
    }
}

// Now lets define subclass.
// Inheritance is done by using keyword "extends"

class HomePage extends BasePage {
    constructor() {
        super() // this is needed to invoke constructor from BasePage class!
        console.log("constructor from HomePage class")
    }

    login(): void {
        console.log("Action login from HomePage class")
    }
}

const homePage = new HomePage()

// on console 👀 you will get:
// constructor from BasePage
// constructor from HomePage

// homePage has all methods and attributes from BaseClass:

homePage.login()
homePage.openMenu()
console.log("homePage.baseUrl:", homePage.baseUrl)
console.log("homePage.other:", homePage.other)

// on console 👀 you will get:
// Action login from HomePage
// Action openMenu from BasePage
// homePage.baseUrl: myUniqueUrl
// homePage.other: value

console.log("\n--------Inheritance with constructor with parameters--------\n")

// example of class, that constructor needs one parameter:

class ClassA {
    baseUrl: string

    constructor(url: string) {
        this.baseUrl = url
    }
}

// Now in sub class we have to use super():

class ClassB extends ClassA {
    constructor(url: string) {
        super(url) // this is needed to invoke constructor from BasePage class with parameters!
    }
}

const classB = new ClassB("some url")
console.log("classB.baseUrl:", classB.baseUrl)

// on console 👀 you will get:
// classB.baseUrl: some url

console.log("\n--------Inheritance - public, private and protected--------\n")

// example of class and private/protected

class ClassC {
    private version = 0
    protected age = 0

    increaseVersionInClassC(): void {
        this.version++ // this is ok ✅ - version is private in the same class!
    }

    getVersion(): number {
        return this.version
    }
}

class ClassD extends ClassC {
    increaseVersion(): void {
        // this.version++ // ⛔ Property 'version' is private and only accessible within class 'ClassC'.ts(2341)
    }

    increaseAge(): void {
        this.age++ // this is ok ✅
    }

    getAge(): number {
        return this.age
    }
}

const classD = new ClassD()
console.log("classD.getAge():", classD.getAge()) // this is ok ✅
// console.log("classD.version:", classD.version) // ⛔ Property 'version' is private and only accessible within class 'ClassC'.ts(2341)
// console.log("classD.age:", classD.age) // ⛔ Property 'age' is protected and only accessible within class 'ClassC' and its subclasses.ts(2445)

// Ignore this line - used to be able to redeclare variables in this project
export {}
