// to export objects and functions from module - use export:
export const sampleArray = ["Python", "Java", "JavaScript", "C#"]

export function printDataOnConsole(data: string): void {
    console.log("printDataOnConsole:", data)
}

function printArrayOnConsoleWithForeach(array: string[]): void {
    array.forEach((element) => {
        console.log("printArrayOnConsoleWithForeach:", element)
    })
}

function printArrayOnConsoleWithFor(array: string[]): void {
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        console.log("printArrayOnConsoleWithFor:", element)
    }
}

const userName = "sample.user@test.test"

// if you want to export multiple object at once - use following construction:
export { printArrayOnConsoleWithForeach, printArrayOnConsoleWithFor, userName }
