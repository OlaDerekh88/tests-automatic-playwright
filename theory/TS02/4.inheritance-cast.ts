console.log("\n--------Classes, interfaces and casting--------\n")

// First, lets define superclass (of base class):

class BasePageElement {
    selector: string

    constructor() {
        console.log("constructor from BasePageElement class")
        this.selector = "some css selector"
    }

    isVisible(): boolean {
        console.log("Action isVisible from BasePageElement class")
        return true
    }
}

// Now lets define 2 subclasses:

class Button extends BasePageElement {
    constructor() {
        super() // this is needed to invoke constructor from BasePageElement class!
        console.log("constructor from Button class")
    }

    click(): void {
        console.log("Action click from Button class")
    }
}

class TextBox extends BasePageElement {
    constructor() {
        super() // this is needed to invoke constructor from BasePageElement class!
        console.log("constructor from TextBox class")
    }

    focus(): void {
        console.log("Action focus from TextBox class")
    }
}

// now create function to check if element is visible:

function checkIfVisible(element: BasePageElement) {
    console.log("checkIfVisible:", element)
    console.log(element.isVisible())
}

// if we define base class, then we can pass there any object that is a sub class:

const button = new Button()
const textBox = new TextBox()

console.log("")
console.log("> We have objects... now lets use checkIfVisible()")
console.log("")

checkIfVisible(button) // this is ok ✅
checkIfVisible(textBox) // this is ok ✅

// on console 👀 you will get:
// constructor from BasePageElement class
// constructor from Button class
// constructor from BasePageElement class
// constructor from TextBox class
//
// > We have objects... now lets use checkIfVisible()
//
// checkIfVisible: Button { selector: 'some css selector' }
// Action isVisible from BasePageElement class
// true
// checkIfVisible: TextBox { selector: 'some css selector' }
// Action isVisible from BasePageElement class
// true

// Important: inside checkIfVisible() we have available methods only from BasePageElement!

console.log("\n--------Advanced Inheritance and instanceof--------\n")

// We can check if object is an instance of a class:

console.log("Check if button instanceof Button:", button instanceof Button)
console.log("Check if button instanceof TextBox:", button instanceof TextBox)

// This will give us information if object has a selected type.
// WARNING: instanceof only applies to objects and classes! Not interfaces!

console.log("\n--------Advanced Inheritance and casting in functions--------\n")

// We can use instanceof in function to check if object is an instance of a class.
// We can cast object to sub class using "as".
// Casting allows us to use properties and methods of a subclass:

function actIfVisibleBasedOnBaseClass(element: BasePageElement) {
    console.log("Check if element instanceof Button:", element instanceof Button)
    console.log("Check if element instanceof TextBox:", element instanceof TextBox)

    if (element instanceof Button) {
        const button = element as Button // casting!
        button.click()
    }
    if (element instanceof TextBox) {
        const textBox = element as TextBox
        textBox.focus()
    }
}

actIfVisibleBasedOnBaseClass(button)
console.log("")
actIfVisibleBasedOnBaseClass(textBox)

// on console 👀 you will get:
// Check if element instanceof Button: true
// Check if element instanceof TextBox: false
// Action click from Button class
//
// Check if element instanceof Button: false
// Check if element instanceof TextBox: true
// Action focus from TextBox class

console.log("\n--------Inheritance, Union Types and casting in functions--------\n")

// Instead of using Base Class we can use Union Types:

function actIfVisibleBasedOnUnionTypes(element: Button | TextBox) {
    console.log("Check if element instanceof Button:", element instanceof Button)
    console.log("Check if element instanceof TextBox:", element instanceof TextBox)

    if (element instanceof Button) {
        const button = element as Button
        button.click()
    }
    if (element instanceof TextBox) {
        const textBox = element as TextBox
        textBox.focus()
    }
}

actIfVisibleBasedOnUnionTypes(button)
console.log("")
actIfVisibleBasedOnUnionTypes(textBox)

// on console 👀 you will get:
// Check if element instanceof Button: true
// Check if element instanceof TextBox: false
// Action click from Button class
//
// Check if element instanceof Button: false
// Check if element instanceof TextBox: true
// Action focus from TextBox class

// 💡TIP: Union might be safer - we define concrete types.
// BaseClass can result in failures or skipped cases if we add new subclasses

console.log("\n--------Invalid casting--------\n")

// Now lets see example when we will try to cast any object to Button sub class:

function invalidCastingExample(element: BasePageElement) {
    console.log("Check if element instanceof Button:", element instanceof Button)
    console.log("Check if element instanceof TextBox:", element instanceof TextBox)

    const button = element as Button
    console.log("After casting: Check if element instanceof Button:", element instanceof Button)
    console.log("After casting: Check if element instanceof TextBox:", element instanceof TextBox)
    button.click()
}

invalidCastingExample(button) // this is ok ✅
console.log("")
// invalidCastingExample(textBox) // this is not ok ⛔ // TODO: uncomment to see error after running running ⛔

// on console 👀 you will get:
// Check if element instanceof Button: true
// Check if element instanceof TextBox: false
// After casting: Check if element instanceof Button: true
// After casting: Check if element instanceof TextBox: false
// Action click from Button class

// Check if element instanceof Button: false
// Check if element instanceof TextBox: true
// After casting: Check if element instanceof Button: false
// After casting: Check if element instanceof TextBox: true
// ts-base\theory\S02\4.inheritance-cast.ts:131
//     button.click()
//            ^
// TypeError: button.click is not a function

console.log("\n--------Casting and Interfaces--------\n")

// What about casting and interfaces?
// Its possible to change type of an object.

interface card {
    owner: string
    balance: number
}

interface transaction {
    owner: string
    balance: number
    date: string
}

function printCard(cardData: card): void {
    console.log("Card:", cardData)
}

function printTransaction(transactionData: transaction): void {
    console.log("Transaction:", transactionData)
}

const cardA: card = {
    balance: 10,
    owner: "Dale C"
}

console.log("-- Example with casting Card to Transaction:")

printCard(cardA)
const transactionA = cardA as transaction

printTransaction(transactionA)
console.log("Transaction A typeof:", typeof transactionA)

// on console 👀 you will get:
// Card: { balance: 10, owner: 'Dale C' }
// Transaction: { balance: 10, owner: 'Dale C' }
// Transaction A typeof: object

// ⚠️ Not all fields were added to transactionA after casting!

console.log("-- Example with casting Transaction to Card:")

const transactionB: transaction = {
    balance: 10,
    owner: "Dale C",
    date: "10/10/2021"
}
const cardB = transactionB as card

printTransaction(transactionB)
printCard(cardB)
console.log("Card B typeof:", typeof cardB)

// on console 👀 you will get:
// Transaction: { balance: 10, owner: 'Dale C', date: '10/10/2021' }
// Card: { balance: 10, owner: 'Dale C', date: '10/10/2021' }
// Card B typeof: object

// ⚠️ Field date was added to card object!

// Ignore this line - used to be able to redeclare variables in this project
export {}
