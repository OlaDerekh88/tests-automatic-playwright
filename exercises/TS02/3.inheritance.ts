// your task:
// 1. Declare first class with following details:
// - name: Animal
// - with property type of type string
// - with protected property age of type number with default value 0
// - with constructor:
// --- that needs one parameter to set value of property type
// 2. Declare second class with following details:
// - name: Cat
// - this class inherits after Animal class
// - with constructor:
// --- that needs zero parameters
// --- that sets type to "cat" in super constructor
// - with method:
// --- name: increaseAge()
// --- this method increments value of age by one
// - with method:
// --- name: present()
// --- this should return string In this format: "My type is cat and my age is 2"
// 3. Create object from class Cat
// 4. Invoke method increaseAge() 2 times
// 5. Print return value of method present()

// to test your solution in terminal you can run following command:
// npm run ex2-3

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

class Animal {
    type: string;
    age: number = 0;
constructor(type: string) {
    this.type = type;
}
}
class Cat extends Animal {
    constructor() {
        super("cat");
    }
  increaseAge(): number {
    return this.age++;
  } 
  present(): string {
    return (`My type is "${this.type}" and my age is "${this.age}"`);
  } 
}
const myCat = new Cat();
myCat.increaseAge();
myCat.increaseAge();
console.log(myCat.present())

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see:
// My type is cat and my age is 2
