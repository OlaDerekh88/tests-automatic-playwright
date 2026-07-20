console.log("\n--------Enums--------\n")

// Enums allow us to define a collection of related values.
// They can be numbers or strings as a set of named constants.
// Simple enum example:

enum Direction {
    Up,
    Down
}

console.log("Direction:", Direction)
console.log("Direction.Down:", Direction.Down)
console.log("Direction.Up:", Direction.Up)

// on console 👀 you will get:
// Direction: { '0': 'Up', '1': 'Down', Up: 0, Down: 1 }
// Direction.Down: 1
// Direction.Up: 0

console.log("\n--------Enums and values--------\n")

// We can also assign value to each enum value:

enum UserResponse {
    No = 0,
    Yes = 1
}

console.log("UserResponse:", UserResponse)
console.log("UserResponse.No:", UserResponse.No)
console.log("UserResponse.Yes:", UserResponse.Yes)
console.log("UserResponse[1]:", UserResponse[1])
console.log("UserResponse[0]", UserResponse[0])
console.log("UserResponse[2]", UserResponse[2])

// on console 👀 you will get:
// UserResponse: { '0': 'No', '1': 'Yes', No: 0, Yes: 1 }
// UserResponse.No: 0
// UserResponse.Yes: 1
// UserResponse[1]: Yes
// UserResponse[0] No

enum MyEnum {
    Up = "UP",
    Down = "DOWN"
}

console.log("MyEnum:", MyEnum)
console.log("MyEnum.Up:", MyEnum.Up)
console.log("MyEnum.Down:", MyEnum.Down)

// on console 👀 you will get:
// MyEnum: { Up: 'UP', Down: 'DOWN' }
// MyEnum.Up: UP
// MyEnum.Down: DOWN

console.log("\n--------Example without Enum--------\n")

function moveByString(direction: string): void {
    switch (direction) {
        case "up":
            console.log("> We go up!")
            break
        case "down":
            console.log("> We go down!")
            break
        default:
            console.log("> We don't know where to go!")
            break
    }
}

moveByString("up") // this is ok ✅
// on console 👀 you will get:
// > We go up!

moveByString("down") // this is ok ✅
// on console 👀 you will get:
// > We go down!

moveByString("Up") // this is not ok ⛔
// on console 👀 you will get:
// > We don't know where to go!

console.log("\n--------Enums and functions--------\n")

// Enums can be used to narrow values passed to function:
function move(direction: MyEnum): void {
    switch (direction) {
        case MyEnum.Up:
            console.log("> We go up!")
            break
        case MyEnum.Down:
            console.log("> We go down!")
            break
        default:
            console.log("> We don't know where to go!")
            break
    }
}

move(MyEnum.Down) // this is ok ✅
// on console 👀 you will get:
// > We go down!

move(MyEnum.Up) // this is ok ✅
// on console 👀 you will get:
// > We go up!

// move("up") // this is not ok ⛔

// Other values will not work!
// you will get error:
// Conversion of type 'number' to type 'MyEnum' may be a mistake because neither type sufficiently overlaps with the other.
// If this was intentional, convert the expression to 'unknown' first.ts(2352)
// move(1 as MyEnum) // TODO: uncomment to see error in IDE ⛔

console.log("\n--------Enums with different types - Heterogeneous enums--------\n")

// We can mix types in one enum its called "Heterogeneous enums":
enum MyOtherEnum {
    Up = "UP",
    Down = "DOWN",
    Stop = 0
}

console.log("MyOtherEnum:", MyOtherEnum)
console.log("MyOtherEnum.Up:", MyOtherEnum.Up)
console.log("MyOtherEnum.Stop:", MyOtherEnum.Stop)

// on console 👀 you will get:
// MyOtherEnum: { '0': 'Stop', Up: 'UP', Down: 'DOWN', Stop: 0 }
// MyOtherEnum.Up: UP
// MyOtherEnum.Stop: 0

// Enums exists in TypeScript but not in JavaScript!
// 💡TIP: Enums - 🔗 https://www.typescriptlang.org/docs/handbook/enums.html
