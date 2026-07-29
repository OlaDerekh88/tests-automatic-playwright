export function getBiggestNumber(values: number[]): number {
  let largest = values[0]
    for (let index = 0; index < values.length; index++) {
        if(values[index] > largest) {
            largest = values[index]
        }
    }
    return largest
}

export function getBiggestNumber2(values: number[]): number {
    console.log(values)
    console.log(...values)

    return Math.max(...values)
}

// export function getBiggestNumberFast(values: number[]) : number {
//     console.log("values:", values)
   
//     console.log("values spread:", ...values)
//     // Spread syntax (...)
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//     return Math.max(...values)
// }


// or 

// export function getBiggestNumberSort(values: number[]): number {
//     return [...values].sort((a,b) => b - a)[0]
// }


