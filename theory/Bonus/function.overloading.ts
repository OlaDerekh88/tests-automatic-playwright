// Przeciążanie funkcji
// Przeciążanie funkcji w TypeScript umożliwia zdefiniowanie wielu sygnatur (innymi słowy – definicji) dla jednej funkcji. Każda sygnatura opisuje inny sposób wywołania funkcji. Wymaga to jednak jednej wspólnej implementacji, która obsłuży wszystkie te przypadki.

// Przykład: Formatuj
// Funkcja formatuj pozwala na różne sposoby formatowania danych. Jeśli przekazany jest tekst, funkcja dodaje do niego prefiks Tekst:, a jeśli liczba – zaokrągla ją do dwóch miejsc po przecinku i zwraca z prefiksem Liczba:.

function formatuj(tekst: string): string;
function formatuj(liczba: number): string;
function formatuj(wartosc: string | number): string {
  if (typeof wartosc === "string") {
    return `Tekst: ${wartosc}`;
  }
  if (typeof wartosc === "number") {
    return `Liczba: ${wartosc.toFixed(2)}`;
  }
  throw new Error("Nieprawidłowy typ argumentu");
}
console.log(formatuj("Hello")); // "Tekst: Hello"
console.log(formatuj(123.456)); // "Liczba: 123.46"
// Przykład: Konwertuj
// Funkcja konwertuj pozwala na zamianę liczb na tekst oraz tekstu na liczby. Dzięki przeciążeniu możemy łatwo obsłużyć oba scenariusze.

function konwertuj(liczba: number): string;
function konwertuj(tekst: string): number;
function konwertuj(wartosc: number | string): number | string {
  if (typeof wartosc === "number") {
    return wartosc.toString(); // Konwersja liczby na string
  }
  if (typeof wartosc === "string") {
    return parseInt(wartosc, 10); // Konwersja stringa na liczbę
  }
  throw new Error("Nieobsługiwany typ");
}
console.log(konwertuj(42)); // "42"
console.log(konwertuj("123")); // 123
// Przeciążanie metod
// Podobnie jak funkcje, metody w klasach mogą być przeciążane w celu obsługi różnych scenariuszy. Dzięki temu klasy mogą być bardziej uniwersalne.

// Przykład: Oblicz
// Metoda oblicz w klasie Kalkulator może dodawać liczby lub łączyć teksty. Dzięki przeciążeniu użytkownik klasy nie musi martwić się o typy – metoda obsłuży je automatycznie.

class Kalkulator {
  oblicz(a: number, b: number): number;
  oblicz(a: string, b: string): string;
  oblicz(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a + b;
    }
    throw new Error("Nieprawidłowe argumenty");
  }
}
const kalkulator = new Kalkulator();
console.log(kalkulator.oblicz(10, 5)); // 15
console.log(kalkulator.oblicz("Hello", " World")); // "Hello World"
// Przykład: Parsowanie
// Metoda parse w klasie Parser umożliwia rozdzielenie stringów na tablicę liter oraz liczb na tablicę cyfr.

class Parser {
  parse(input: string): string[];
  parse(input: number): number[];
  parse(input: string | number): string[] | number[] {
    if (typeof input === "string") {
      return input.split(""); // Rozdzielenie stringa na litery
    }
    if (typeof input === "number") {
      return Array.from(String(input), Number); // Rozdzielenie liczby na cyfry
    }
    throw new Error("Nieprawidłowe dane wejściowe");
  }
}
const parser = new Parser();
console.log(parser.parse("Hello")); // ["H", "e", "l", "l", "o"]
console.log(parser.parse(123)); // [1, 2, 3]
// Przeciążanie konstruktorów
// Przeciążanie konstruktorów w klasach pozwala na inicjalizację obiektów w różny sposób, w zależności od potrzeb. TypeScript wymaga jednak, aby implementacja obsługiwała wszystkie możliwe sygnatury.

// Przykład: Poprawna i niepoprawna implementacja przeciążenia konstruktora
// Konstruktor klasy Person umożliwia utworzenie osoby z nazwą i opcjonalnie wiekiem.

// W tym przykładzie przyjrzyj się dokładnie implementacji konstruktora.
// Zauważ, że pole age? jest opcjonalne. Dzięki temu implementacja konstruktora pasuje do obu sygnatur!

// class Person {
//   name: string;
//   age: number;
//   // Sygnatura 1
//   constructor(name: string, age: number);
//   // Sygnatura 2
//   constructor(name: string);
 
//   // Rzeczywista implementacja - zwróć uwagę na opcjonalny parametr age:
//   constructor(name: string, age?: number) {
//     this.name = name;
//     this.age = age ?? 0;
//   }
// }
// const person1 = new Person("Alice", 30);
// console.log(person1); // { name: 'Alice', age: 30 }
// const person2 = new Person("Bob");
// console.log(person2); // { name: 'Bob', age: 0 }
// Natomiast błędny będzie taki przypadek implementacji:

// class Person {
//   name: string;
//   age: number;
//   // Sygnatura 1
//   constructor(name: string, age: number);
//   // Sygnatura 2
//   // Dostaniemy błąd:
//   // This overload signature is not compatible with its implementation signature.(2394)
//   // bo implementacja ma wymagany age
//   constructor(name: string);
 
  // Implementacja, która NIE obsługuje wszystkich przypadków
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const person1 = new Person("Alice", 30);
// console.log(person1); // { name: 'Alice', age: 30 }
// const person2 = new Person("Bob");
// console.log(person2); // { name: 'Bob', age: 0 }
// Przykład: Produkt
// Konstruktor klasy Produkt umożliwia utworzenie produktu z nazwą i opcjonalnie ceną. Dzięki przeciążeniu możemy zainicjalizować różne wersje obiektu w zależności od danych wejściowych.

class Produkt {
  nazwa: string;
  cena?: number;
  constructor(nazwa: string);
  constructor(nazwa: string, cena: number);
  constructor(nazwa: string, cena?: number) {
    this.nazwa = nazwa;
    if (cena !== undefined) {
      this.cena = cena;
    }
  }
  description(): string {
    return this.cena
      ? `${this.nazwa} kosztuje ${this.cena} zł.`
      : `${this.nazwa} nie ma podanej ceny.`;
  }
}
const produkt1 = new Produkt("Jabłko");
console.log(produkt1.description()); // "Jabłko nie ma podanej ceny."
const produkt2 = new Produkt("Gruszka", 3.5);
console.log(produkt2.description()); // "Gruszka kosztuje 3.5 zł."
// Przykład: Konto
// Konstruktor klasy Konto umożliwia utworzenie konta z domyślną nazwą lub niestandardową nazwą. Dzięki temu użytkownik ma swobodę w inicjalizacji obiektu.

class Konto {
  id: number;
  name: string;
  constructor(id: number);
  constructor(id: number, name: string);
  constructor(id: number, name?: string) {
    this.id = id;
    this.name = name|| "Domyślne konto";
  }
  description(): string {
    return `Konto ID: ${this.id}, Nazwa: ${this.name}`;
  }
}
const konto1 = new Konto(1);
console.log(konto1.description()); // "Konto ID: 1, Nazwa: Domyślne konto"
const konto2 = new Konto(2, "Osobiste");
console.log(konto2.description()); // "Konto ID: 2, Nazwa: Osobiste"
// Podsumowanie
// W tej lekcji poznaliśmy przeciążanie funkcji, metod i konstruktorów w TypeScript, co jest przydatne w sytuacjach, gdy chcemy umożliwić wiele różnych sposobów wywołania tej samej funkcji lub metody. Dzięki temu kod staje się elastyczniejszy i czytelniejszy – zamiast wykorzystywać parametry uniwersalne lub opcjonalne, możemy wyraźnie określić, jakie warianty wywołania są wspierane.

// Zalety przeciążania

// Czytelność
// Jednoznacznie widać, jakie sygnatury są dostępne i jakich parametrów należy używać.
// Elastyczność
// Różne sygnatury pozwalają obsłużyć różne typy lub liczby argumentów bez tworzenia skomplikowanych instrukcji warunkowych w kodzie.
// Wady przeciążania

// Złożoność
// Nadmiar różnych sygnatur może utrudnić szybką orientację w kodzie.
// Ryzyko duplikowania logiki
// Jeśli każda wersja przeciążenia jest do siebie podobna, łatwo powielać ten sam kod.
// Dobre praktyki

// Przejrzyste nazwy i dokumentacja
// Opisuj dokładnie każdą sygnaturę, aby użytkownicy wiedzieli, jak i kiedy jej używać.
// Jedna wspólna implementacja
// Umieść kod wykonywalny w jednej funkcji obsługującej wszystkie przypadki, aby uniknąć powielania.
// Rozważ alternatywy
// Jeśli przeciążeń jest zbyt wiele, zastanów się nad użyciem typów unii, generyków lub parametrów opcjonalnych.
// Testowanie
// Sprawdzaj każdy wariant wywołania, aby mieć pewność, że logika działa poprawnie w różnych scenariuszach.
// Umiejętne stosowanie przeciążeń pozwala tworzyć kod, który jest zarówno zwięzły, jak i zrozumiały. Warto korzystać z tej funkcjonalności, ale z umiarem – tak, aby kod nie stał się niepotrzebnie skomplikowany. Pamiętaj o odpowiednim dokumentowaniu i testowaniu poszczególnych sygnatur!