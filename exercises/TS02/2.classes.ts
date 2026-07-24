// your task:
// 1. Declare class with following details:
// - name: TransactionData
// - with property id of type string
// - with property version of type number
// - with constructor:
// --- that needs one parameter to set value of property id
// --- and sets version to 0
// - with one method:
// --- name: doOperation()
// --- prints information about property version value
// --- method increase value of property version by 1
// --- returns value of version
// 2. Create object from class TransactionData
// 3. Invoke method doOperation() 4 times
// 4. Print return value of last invoked doOperation()

// TIP: Remember about types!

// to test your solution in terminal you can run following command:
// npm run ex2-2

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------
class TransactionData {
    id: string
    version: number

    constructor(id:string) {
        this.id = id
        this.version = 0
    }
doOperation(): number {
    console.log("Last version value: ",this.version)
    this.version++
    return this.version
   }
   }

const transaction = new TransactionData("abc")
transaction.doOperation()
transaction.doOperation()
transaction.doOperation()

const version = transaction.doOperation()
console.log(version) 


//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see:
// Last value of version: 0
// Last value of version: 1
// Last value of version: 2
// Last value of version: 3
// 4
