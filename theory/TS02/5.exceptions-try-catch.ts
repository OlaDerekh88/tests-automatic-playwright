console.log("\n--------Try... Catch--------\n")

// Try... Catch is a construction to catch Errors

// What are Errors?
// Error occurs when the code encounters an unexpected condition or behavior during execution.

// How to invoke an Error?
// - trying to access not existing method or fields

// lets look at example below were were we prepare code that throws an error:

try {
    const emptyArray: string[] = []
    // Now lets try to access not existing element from list:
    console.log("The result of 'emptyArray[1]' is:", emptyArray[1])
    // Now lets try to access not existing element of not existing element from list:
    console.log("The result of 'emptyArray[1][1]' is:", emptyArray[1][1]) // we expect an error here
} catch {
    console.log("An error occurred!")
}

// what if we want to print error?

console.log("\n--------Catch error and print it!--------\n")

// we can add `catch (error)`:

try {
    const emptyArray: string[] = []
    // Now lets try to access not existing element from list:
    console.log("The result of 'emptyArray[1]' is:", emptyArray[1])
    // Now lets try to access not existing element of not existing element from list:
    console.log("The result of 'emptyArray[1][1]' is:", emptyArray[1][1]) // we expect an error here
} catch (error) {
    console.log("An error occurred!")
    console.log(error)
}

// on console 👀 you will get:
// The result of 'emptyArray[1]' is: undefined
// An error occurred!
// TypeError: Cannot read properties of undefined (reading '1')
//     at <anonymous> (c:\Projects\ts-base\theory\TS02\5.exceptions-try-catch.ts:34:69)
//     at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
//     at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
//     at async loadESM (node:internal/process/esm_loader:28:7)
//     at async handleMainPromise (node:internal/modules/run_main:113:12)

console.log("\n--------Readable Errors--------\n")

// We can make errors more readable by casting cached error to Error:

try {
    const emptyArray: string[] = []
    // Now lets try to access not existing element from list:
    console.log("The result of 'emptyArray[1]' is:", emptyArray[1])
    // Now lets try to access not existing element of not existing element from list:
    console.log("The result of 'emptyArray[1][1]' is:", emptyArray[1][1])
} catch (error) {
    console.log("An error occurred!")
    let errorTyped = error as Error // we cast error as Error...
    console.log(errorTyped.message) // ...and now we have access to its properties
}

// on console 👀 you will get:
// The result of 'emptyArray[1]' is: undefined
// An error occurred!
// Error message: Cannot read properties of undefined (reading '1')

console.log("\n--------Own Errors--------\n")

// We can easily throw an Error using "throw" keyword:

try {
    throw new Error("My custom message for an Error")
} catch (error) {
    console.log("An error occurred!")
    let errorTyped = error as Error // we cast error as Error...
    console.log("Error message:", errorTyped.message) // ...and now we have access to its properties
}

// on console 👀 you will get:
// An error occurred!
// Error message: My custom message for an Error

console.log("\n--------Catching only selected types of Errors--------\n")

// each error has a type:
// TypeError
// RangeError
// more You can find here: 🔗 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types

try {
    const emptyArray: string[] = []
    // Now lets try to access not existing element from list:
    console.log("The result of 'emptyArray[1]' is:", emptyArray[1])
    // Now lets try to access not existing element of not existing element from list:
    console.log("The result of 'emptyArray[1][1]' is:", emptyArray[1][1])
} catch (error) {
    if (error instanceof TypeError) {
        console.log("An error of type TypeError occurred!")
    } else {
        console.log("An unknown error occurred!")
    }
    let errorTyped = error as Error // we cast error as Error...
    console.log(errorTyped.message) // ...and now we have access to its properties
}

// Ignore this line - used to be able to redeclare variables in this project
export {}



function divideNumbers(a: number, b: number): number {
  if (b === 0) {
      throw new Error("Division by zero is not allowed!");
  }
  return a / b;
}

function performDivision(a: number, b: number): number {
  try {
      return divideNumbers(a, b);
  } catch (error) {
      let errorTyped = error as Error
      console.error("An error occurred:", errorTyped.message);

      return NaN; // Return a special value to indicate an error
  }
}

const num1 = 10;
const num2 = 0;

const result = performDivision(num1, num2);

if (isNaN(result)) {
  console.log("Division failed!");
} else {
  console.log("Result:", result);
}



// try {
//   // Kod, który może rzucić błąd
// } catch (error) {
//   if (error instanceof SpecificErrorType) {
//     // Obsługa błędu dla określonego typu
//   } else {
//     // Obsługa ogólna dla innych typów błędów lub rethrow
//     throw error;
//   }
// }

// try {
//   // Kod, który może rzucić błąd
// } catch (error) {
//   // Obsługa błędu
//   if (canHandleError(error)) {
//     // Obsługa błędu w tym bloku
//   } else {
//     // Rethrow oryginalny błąd
//     throw error;
//   }
// }