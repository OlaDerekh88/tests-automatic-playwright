console.log("> Running JavaScript...")

const names = ["Dale", "Harry S. Truman", "Hawk"]

const human = {
    name: "Dale Cooper",
    age: 40,
    hair: "black",
    height: 182,
    weight: 70
}

function printList(list) {
    for (let index = 0; index < list.length; index++) {
        const element = list[index]
        console.log(`${index}: ${element}`)
    }
}

function printHuman(human) {
    console.log(`${human.name}, age: ${human.age}`)
}

printList(names)
printHuman(human)

// Ignore this line - used to be able to redeclare variables in this module
export {}
