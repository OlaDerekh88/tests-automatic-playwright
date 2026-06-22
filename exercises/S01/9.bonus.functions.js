// Przykład – Przekazywanie funkcji jako parametru. Funkcja executer przyjmuje jako pierwszy parametr inną funkcję, a następnie wywołuje ją wewnątrz siebie.

// Definicja funkcji, którą chcemy przekazać
function sayHello() {
  console.log("Cześć!");
}
// Funkcja przyjmująca inną funkcję jako parametr
function executer(actionFunction) {
  console.log("Zaraz wywołam funkcję przekazaną w parametrze:");
  actionFunction(); // wywołanie przekazanej funkcji
}
// Wywołanie
executer(sayHello);

// na consoli:
// Zaraz wywołam funkcję przekazaną w parametrze:
// Cześć!


// Przykład – Funkcje anonimowe jako parametry. W praktyce często nie definiujemy funkcji wcześniej po nazwie, tylko przekazujemy je wprost w miejscu wywołania, np. jako funkcje anonimowe (czyli takie, które nie mają nazwy).

function executer(actionFunction) {
  console.log("Zaraz wywołam przekazaną funkcję:");
  actionFunction();
}


// Przekazujemy funkcję anonimową
executer(function () {
  console.log("Funkcja anonimowa mówi: Cześć!");
});


// Możemy też użyć arrow function (skrócona składnia w JavaScript)
executer(() => {
  console.log("Arrow function mówi: Hej!");
});

// na consoli:

// Zaraz wywołam przekazaną funkcję:
// Funkcja anonimowa mówi: Cześć!
// Zaraz wywołam przekazaną funkcję:
// Arrow function mówi: Hej!



// Przykład – Zwracanie funkcji z innej funkcji. Kolejnym krokiem jest zwracanie funkcji z innej funkcji. Daje nam to jeszcze większe możliwości tworzenia wzorców projektowych, np. w formie fabryk funkcji (czyli funkcji, które generują inne funkcje).

function createGreeter(name) {
  return function () {
    console.log("Cześć, jestem " + name);
  };
}


const greeterA = createGreeter("Ania");
const greeterB = createGreeter("Bartek");
const greeterC = createGreeter("Bogus");

greeterA(); // Cześć, jestem Ania
greeterB(); // Cześć, jestem Bartek
greeterC(); // Cześć, jestem Bogus

// Na konsoli otrzymamy:

// Cześć, jestem Ania
// Cześć, jestem Bartek
// Cześć, jestem Bogus

// Przykład – Wywołanie funkcji jako parametru w kodzie asynchronicznym. W JavaScripcie często spotykamy się z operacjami asynchronicznymi, takimi jak wczytywanie danych z serwera czy opóźnione działania (np. setTimeout). Funkcje (tzw. callbacki) przyjmowane jako parametry umożliwiają nam określanie, co ma się stać po zakończeniu operacji.

// Funkcja symulująca pobieranie danych z serwera
function fetchData(callback) {
  console.log("Rozpoczynam pobieranie danych...");


  // Symulujemy opóźnienie np. 2 sekundy
  setTimeout(() => {
    const data = { id: 123, name: "Test user" };
    console.log("Dane pobrane!");
    // Po pobraniu danych wywołujemy przekazaną funkcję (callback)
    callback(data);
  }, 2000);
}


// Funkcja, która zostanie przekazana jako callback
function processData(data) {
  console.log("Otrzymane dane:", data);
  // Tutaj możesz przetwarzać pobrane dane, np. wyświetlić je w interfejsie
}


// Użycie:
fetchData(processData);
console.log("Program działa dalej...");

// Rozpoczynam pobieranie danych...
// Dane pobrane!
// Otrzymane dane: { id: 123, name: 'Test user' }
// fetchData(processData)
//         │
//         ├── console.log("Rozpoczynam pobieranie danych...")
//         │
//         ├── setTimeout(..., 2000)  ← ustawienie timera
//         │
//         └── funkcja kończy się od razu
//                  │
//                  │ (po 2 sekundach)
//                  ▼
//         callback(data)
//                  │
//                  ▼
//         processData(data)
//                  │
//                  ▼
//         console.log("Otrzymane dane:", data)


// closure (domknięcie).Wyobraź sobie, że wewnątrz funkcji A tworzysz kolejną funkcję – nazwijmy ją B – która korzysta z pewnych zmiennych zdefiniowanych w funkcji A. Kiedy wywołanie funkcji A się kończy, normalnie wszystkie jej zmienne znikają, bo przestaje istnieć ich zakres (ang. scope). Jednak dzięki closure, funkcja B pamięta i wciąż ma dostęp do tych zmiennych. 
function createCounter() {
  let count = 0;


  return function () {
    count++;
    console.log("Aktualna wartość licznika: " + count);
  };
}


const myCounter = createCounter();


// Mimo że createCounter się wykonało i teoretycznie zmienna count
// nie powinna być już dostępna, to closure sprawia,
// że "myCounter" wciąż ma do niej dostęp.
myCounter(); // Aktualna wartość licznika: 1
myCounter(); // Aktualna wartość licznika: 2
myCounter(); // Aktualna wartość licznika: 3

// Na konsoli otrzymamy:

// Aktualna wartość licznika: 1
// Aktualna wartość licznika: 2
// Aktualna wartość licznika: 3


// Funkcja zwracająca inną funkcję (z wykorzystaniem domknięcia)
// W tym przykładzie pokazujemy, jak w JavaScripcie można zwrócić funkcję z innej funkcji.
// Dodatkowo wykorzystujemy domknięcie (closure), dzięki czemu zwrócona funkcja zapamiętuje dostęp do zmiennej prefix. Funkcja createLogger zapisuje w pamięci wartość prefix, a następnie zwraca wewnętrzną funkcję, która wykorzystuje ten prefix do logowania wiadomości.Takie podejście jest często używane w celu tworzenia modułów logujących w skryptach. 

function createLogger(prefix) {
  // Zwracamy nową funkcję
  return function (message) {
    console.log(prefix + ": " + message);
  };
}


// Tworzymy dwie różne funkcje-loggery
const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");


// Użycie
infoLogger("To jest wiadomość informacyjna");
infoLogger("To jest nowa wiadomość");
errorLogger("To jest komunikat o błędzie");

// Na konsoli otrzymamy:
// INFO: To jest wiadomość informacyjna
// INFO: To jest nowa wiadomość
// ERROR: To jest komunikat o błędzie