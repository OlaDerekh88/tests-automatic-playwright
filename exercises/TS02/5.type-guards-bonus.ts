// Bonus

// Type Guards w TypeScript to mechanizm, który pozwala nam sprawdzić, jaki typ danych ma zmienna lub wartość w trakcie działania programu. Dzięki Type Guards TypeScript może bardziej precyzyjnie określić, jaki typ będzie miał obiekt w konkretnych sytuacjach, co pozwala na bezpieczniejsze operowanie na danych w trakcie działania programu.

// Typeof
// Typeof Type Guard:

function printLength(value: string | number): void {
  if (typeof value === "string") {
      console.log("Length of the string:", value.length);
  } else if (typeof value === "number") {
      console.log("Value is a number:", value);
  } else {
      console.log("Invalid type.");
  }
}
printLength("Hello"); // Output: "Length of the string: 5"
printLength(42);    // Output: "Value is a number: 42"
// Instanceof
// Instanceof Type Guard (do sprawdzania instancji klas):

class Cats {
  makeSound(): void {
      console.log("Miau Miau!");
  }
}
class Dog {
  makeSound(): void {
      console.log("Hau Hau!");
  }
}
function welcome(zwierze: Cats | Dog ): void {
  if (zwierze instanceof Cats) {
      console.log("Witaj, kotku!");
  } else if (zwierze instanceof Dog) {
      console.log("Witaj, psie!");
  } else {
      console.log("Witaj, nieznane stworzenie!");
  }
}
const cat = new Cats();
const dog = new Dog();
welcome(cat);  // Output: "Witaj, kotku!"
welcome(dog); // Output: "Witaj, psie!"
// in
// “in” Type Guard (do sprawdzania, czy obiekt posiada daną właściwość):

interface Car {
  brand: string;
  model: string;
}
interface Bike {
  brand: string;
  wheels: number;
}
function printVehicleInfo(vehicle: Car | Bike): void {
  console.log("Brand:", vehicle.brand);
  if ("model" in vehicle) {
      console.log("Model:", vehicle.model); // Only available if it's a Car
  } else if ("wheels" in vehicle) {
      console.log("Number of wheels:", vehicle.wheels); // Only available if it's a Bike
  }
}
const car: Car = { brand: "Toyota", model: "Corolla" };
const bike: Bike = { brand: "Honda", wheels: 2 };
printVehicleInfo(car);  // Output: "Brand: Toyota", "Model: Corolla"
printVehicleInfo(bike); // Output: "Brand: Honda", "Number of wheels: 2"
// Linki i zasoby
// Materiały dodatkowe:

// typeof type guards
// instanceof type guards
// Type Guards
// Type Guards
// Union types i Type Guards