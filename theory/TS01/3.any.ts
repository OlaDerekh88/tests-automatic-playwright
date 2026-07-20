console.log("\n--------Type 'any'--------\n")

// there is a special type in TypeScript
// any type
// any type means... any type!

// you declare it as nay other type:
let someValue: any

// and then you can assign different values of different type:
someValue = 1
console.log("Type of someValue:", typeof someValue) // Type of someValue: number

someValue = "1"
console.log("Type of someValue:", typeof someValue) // Type of someValue: string

// TypeScript will detect assigned type, but still you can assign different types

// 💡TIP: type "any" in many cases might be treated as anti pattern❗
// The point of using TypeScript is to have types in variables and functions.
// So we should use them wherever we can.
// With 'any' type we are loosing TypeScript advantage, that are types.

// 💡TIP: Type "any" - 🔗 https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any
// This can be very helpful when you are first migrating a JavaScript project to TypeScript as you can set the type for stuff you haven’t migrated yet as any.
// But in a full TypeScript project you are disabling type checking for any parts of your program that use it.
