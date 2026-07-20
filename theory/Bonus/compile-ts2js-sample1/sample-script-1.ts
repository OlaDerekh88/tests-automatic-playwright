console.log("> Running TypeScript...")

interface human {
    name: string
    age: number
    hair: string
    height: number
    weight: number
    currentStatus: status
}

enum status {
    resting,
    working
}

const names = ["Dale", "Harry S. Truman", "Hawk"]

const daleCooper: human = {
    name: "Dale Cooper",
    age: 40,
    hair: "black",
    height: 182,
    weight: 70,
    currentStatus: status.resting
}

function printList(list: string[]) {
    for (let index = 0; index < list.length; index++) {
        const element = list[index]
        console.log(`${index}: ${element}`)
    }
}

function printHuman(human: any) {
    console.log(`${human.name}, age: ${human.age}`)
}

printList(names)
printHuman(daleCooper)

// Ignore this line - used to be able to redeclare variables in this module
export {}
