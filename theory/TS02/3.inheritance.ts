console.log("\n--------Inheritance--------\n")

// Inheritance in programming refers to the ability of a class to inherit properties and behaviors from another class.
// It allows a new class, called the "derived class" or "subclass," to inherit the attributes and methods of an existing class, known as the "base class" or "superclass."

// First, lets define superclass (of base class):

class BasePage {
    baseUrl: string
    other = "value"

    constructor() {
        console.log("constructor from BasePage class")
        this.baseUrl = "myUniqueUrl"
    }

    openMenu(): void {
        console.log("Action openMenu from BasePage class")
    }
}

// Now lets define subclass.
// Inheritance is done by using keyword "extends"

class HomePage extends BasePage {
    constructor() {
        super() // this is needed to invoke constructor from BasePage class!
        console.log("constructor from HomePage class")
    }

    login(): void {
        console.log("Action login from HomePage class")
    }
}

const homePage = new HomePage()

// on console 👀 you will get:
// constructor from BasePage
// constructor from HomePage

// homePage has all methods and attributes from BaseClass:

homePage.login()
homePage.openMenu()
console.log("homePage.baseUrl:", homePage.baseUrl)
console.log("homePage.other:", homePage.other)

// on console 👀 you will get:
// Action login from HomePage
// Action openMenu from BasePage
// homePage.baseUrl: myUniqueUrl
// homePage.other: value

console.log("\n--------Inheritance with constructor with parameters--------\n")

// example of class, that constructor needs one parameter:

class ClassA {
    baseUrl: string

    constructor(url: string) {
        this.baseUrl = url
    }
}

// Now in sub class we have to use super():

class ClassB extends ClassA {
    constructor(url: string) {
        super(url) // this is needed to invoke constructor from BasePage class with parameters!
    }
}

const classB = new ClassB("some url")
console.log("classB.baseUrl:", classB.baseUrl)

// on console 👀 you will get:
// classB.baseUrl: some url

console.log("\n--------Inheritance - public, private and protected--------\n")

// example of class and private/protected

class ClassC {
    private version = 0
    protected age = 0

    increaseVersionInClassC(): void {
        this.version++ // this is ok ✅ - version is private in the same class!
    }

    getVersion(): number {
        return this.version
    }
}

class ClassD extends ClassC {
    increaseVersion(): void {
        // this.version++ // ⛔ Property 'version' is private and only accessible within class 'ClassC'.ts(2341)
    }

    increaseAge(): void {
        this.age++ // this is ok ✅
    }

    getAge(): number {
        return this.age
    }
}

const classD = new ClassD()
console.log("classD.getAge():", classD.getAge()) // this is ok ✅
// console.log("classD.version:", classD.version) // ⛔ Property 'version' is private and only accessible within class 'ClassC'.ts(2341)
// console.log("classD.age:", classD.age) // ⛔ Property 'age' is protected and only accessible within class 'ClassC' and its subclasses.ts(2445)

// Ignore this line - used to be able to redeclare variables in this project
export {}


// Dziedziczenie w TypeScript to mechanizm, który umożliwia tworzenie nowych klas na podstawie już istniejących klas, nazywanych klasami bazowymi lub rodzicami.

// Klasa, która dziedziczy po innej klasie, nazywana jest klasą pochodną lub dzieckiem (subclass). Dzięki dziedziczeniu, klasa dziecko automatycznie posiada wszystkie właściwości i metody swojego rodzica, a także może zdefiniować swoje własne właściwości i metody.

// W TypeScript dziedziczenie odbywa się za pomocą słowa kluczowego extends. W momencie, gdy klasa dziecko dziedziczy po klasie rodzica, uzyskuje ona dostęp do wszystkich publicznych i protected składowych rodzica. Natomiast składowe prywatne nie są dziedziczone i nie są widoczne w klasie dziecko.

// Parent class
class Animal {
  public species: string;
  private identifier: string;
  protected age: number;
  constructor(species: string, age: number) {
    this.species = species;
    this.age = age;
    this.identifier = 'UniqueAnimalID';
  }
  makeSound(): void {
    console.log('Unknown sound');
  }
  getIdentifier(): string {
    return this.identifier;
  }
}
// Child class inheriting from the Animal class
class Dog extends Animal {
  private breed: string;
  constructor(species: string, age: number, breed: string) {
    super(species, age); // Calling the parent class constructor
    this.breed = breed;
  }
  makeSound(): void {
    console.log('Woof Woof!');
  }
  getBreed(): string {
    return this.breed;
  }
}
// Using the classes
const dog = new Dog("mammal", 3, "shepherd");
console.log(dog.getBreed()); // Output: "shepherd"
dog.makeSound(); // Output: "Woof Woof!"
console.log(dog.species); // Output: "mammal" - 'species' is public and accessible
// console.log(dog.identifier); // ⛔ Error! 'identifier' is private and cannot be accessed from Dog or outside
// console.log(dog.age); // ⛔ Error! 'age' is protected and can only be accessed within the class and its subclasses
console.log(dog.getIdentifier()); // Output: "UniqueAnimalID" - Accessible through public method in Animal
// W tym przykładzie mamy dwie klasy: Animal i Dog. Klasa Dog dziedziczy po klasie Animal.

// Zobaczmy dokładny opis…

// Klasa Animal:
// Ma trzy pola:
// species (publiczne) – dostępne wszędzie.
// identifier (private) – dostępne tylko wewnątrz Animal.
// age (protected) – dostępne w Animal i klasach dziedziczących, ale nie spoza nich.
// Konstruktor Animal ustawia wartości pól species, age, i identifier.
// Metoda makeSound wypisuje “Unknown sound”.
// getIdentifier umożliwia dostęp do prywatnego identifier.
// Klasa Dog (dziedziczy po Animal):
// Dodaje prywatne pole breed, specyficzne dla psów.
// Konstruktor Dog przyjmuje species, age, i breed, przekazując species i age do konstruktora Animal.
// Nadpisuje makeSound, by wypisać “Woof Woof!” dla psa.
// getBreed umożliwia dostęp do breed spoza klasy.
// Tworzenie obiektu i korzystanie z metod:
// Tworzymy obiekt dog z wartościami species jako “mammal”, age jako 3, i breed jako “shepherd”.
// Wywołanie dog.getBreed() zwraca “shepherd”.
// dog.makeSound() wypisuje “Woof Woof!”.
// dog.species jest dostępne bezpośrednio, ale identifier i age są niedostępne bezpośrednio (ze względu na private i protected).
// dog.getIdentifier() umożliwia dostęp do identifier.
// Modyfikatory dostępu
// W TypeScript, public, private, i protected są modyfikatorami dostępu, które określają, gdzie możemy uzyskać dostęp do składowych (właściwości i metod) danej klasy. Oto ich znaczenie w prostych słowach:

// public: Składowa oznaczona jako public jest dostępna z każdego miejsca zarówno w obrębie klasy, jak i poza nią. Oznacza to, że można się do niej odwołać i używać jej z dowolnego miejsca w programie.
// private: Składowa oznaczona jako private jest dostępna tylko w obrębie samej klasy, w której została zadeklarowana. Nie można uzyskać do niej dostępu z zewnątrz klasy.
// protected: Składowa oznaczona jako protected jest dostępna w obrębie samej klasy oraz w klasach dziedziczących (potomnych) po tej klasie. Oznacza to, że można używać jej w klasach pochodnych, ale nie można bezpośrednio uzyskać do niej dostępu z zewnątrz klasy.
// Oto przykład kodu z wykorzystaniem modyfikatorów dostępu:

class Car {
  public brand: string;
  private model: string;
  protected year: number;
  constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
  }
  public startEngine(): void {
      console.log("Engine started!");
  }
  private displayModel(): void {
      console.log("Model:", this.model);
  }
  protected displayYear(): void {
      console.log("Year:", this.year);
  }
}
class SportsCar extends Car {
  constructor(brand: string, model: string, year: number) {
      super(brand, model, year);
  }
  public displayDetails(): void {
      console.log("Brand:", this.brand);
      // console.log("Model:", this.model); // ⛔ Error! 'model' is private and not accessible here.
      this.displayYear();
  }
}
const myCar = new Car("Toyota", "Corolla", 2020);
console.log("Brand:", myCar.brand); // ✅ Output: "Brand: Toyota"
// console.log("Model:", myCar.model); // ⛔ Error! 'model' is private and not accessible here.
// console.log("Year:", myCar.year); // ⛔ Error! 'year' is protected and not accessible here.
myCar.startEngine(); // Output: "Engine started!"
// myCar.displayModel(); // ⛔ Error! 'displayModel' is private and not accessible here.
const sportsCar = new SportsCar("Ferrari", "F430", 2022);
sportsCar.displayDetails(); // ✅ Output: "Brand: Ferrari" and "Year: 2022"
// sportsCar.displayModel(); // ⛔ Error! 'displayModel' is private and not accessible here.
// sportsCar.displayYear(); // ⛔ Error! 'displayYear' is protected and not accessible here.