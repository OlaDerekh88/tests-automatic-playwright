"use strict";
// Define a class representing a Person
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to introduce the person
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
// Create instances of the Person class
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);
// Call the introduce method on the instances
person1.introduce();
person2.introduce();
