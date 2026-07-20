// your task:
// 1. Run code from this script - You should see exception:
//     Result for: [1, 1] 22
//     file:///ts-base/exercises/TS02/4.try-catch.ts:12
//         return anArray[primaryIndex][secondaryIndex]
//                                 ^
//     TypeError: Cannot read properties of undefined (reading '1')
//         at getRandomValue (file:///ts-base/exercises/TS02/4.try-catch.ts:12:33)
//         at getRandomValueProxy (file:///ts-base/exercises/TS02/4.try-catch.ts:19:12)
//         at file:///ts-base/exercises/TS02/4.try-catch.ts:26:35
//         at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
// 2. Modify only getRandomValueProxy() function to get results from Expected output
// 3. Use try... catch... to handle error

// to test your solution in terminal you can run following command:
// npm run ex2-4

function getRandomValue(primaryIndex: number, secondaryIndex: number): string {
    const anArray = [
        ["11", "12"],
        ["21", "22"]
    ]
    return anArray[primaryIndex][secondaryIndex]
}

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

function getRandomValueProxy(primaryIndex: number, secondaryIndex: number): string {
    return getRandomValue(primaryIndex, secondaryIndex)
}

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

console.log("Result for: [1, 1]", getRandomValueProxy(1, 1))
console.log("Result for: [3, 1]", getRandomValueProxy(3, 1))
console.log("Result for: [111, 421]", getRandomValueProxy(111, 421))
console.log("Result for: [2, 2]", getRandomValueProxy(2, 2))
console.log("Result for: [0, 0]", getRandomValueProxy(0, 0))

// Expected output:
// On console 👀 you should see:
// Result for: [1, 1] 22
// An error occurred!
// Result for: [3, 1] error!
// An error occurred!
// Result for: [111, 421] error!
// An error occurred!
// Result for: [2, 2] error!
// Result for: [0, 0] 11
