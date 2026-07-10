// Przykład – Przekazywanie funkcji jako parametru. Funkcja executer przyjmuje jako pierwszy parametr inną funkcję, a następnie wywołuje ją wewnątrz siebie.

// Definicja funkcji, którą chcemy przekazać
function sayHello() {
	console.log('Cześć!');
}
// Funkcja przyjmująca inną funkcję jako parametr
function executer(actionFunction) {
	console.log('Zaraz wywołam funkcję przekazaną w parametrze:');
	actionFunction(); // wywołanie przekazanej funkcji
}
// Wywołanie
executer(sayHello);

// na consoli:
// Zaraz wywołam funkcję przekazaną w parametrze:
// Cześć!

// Przykład – Funkcje anonimowe jako parametry. W praktyce często nie definiujemy funkcji wcześniej po nazwie, tylko przekazujemy je wprost w miejscu wywołania, np. jako funkcje anonimowe (czyli takie, które nie mają nazwy).

function executer(actionFunction) {
	console.log('Zaraz wywołam przekazaną funkcję:');
	actionFunction();
}

// Przekazujemy funkcję anonimową
executer(function () {
	console.log('Funkcja anonimowa mówi: Cześć!');
});

// Możemy też użyć arrow function (skrócona składnia w JavaScript)
executer(() => {
	console.log('Arrow function mówi: Hej!');
});

// na consoli:

// Zaraz wywołam przekazaną funkcję:
// Funkcja anonimowa mówi: Cześć!
// Zaraz wywołam przekazaną funkcję:
// Arrow function mówi: Hej!

// Przykład – Zwracanie funkcji z innej funkcji. Kolejnym krokiem jest zwracanie funkcji z innej funkcji. Daje nam to jeszcze większe możliwości tworzenia wzorców projektowych, np. w formie fabryk funkcji (czyli funkcji, które generują inne funkcje).

function createGreeter(name) {
	return function () {
		console.log('Cześć, jestem ' + name);
	};
}

const greeterA = createGreeter('Ania');
const greeterB = createGreeter('Bartek');
const greeterC = createGreeter('Bogus');

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
	console.log('Rozpoczynam pobieranie danych...');

	// Symulujemy opóźnienie np. 2 sekundy
	setTimeout(() => {
		const data = { id: 123, name: 'Test user' };
		console.log('Dane pobrane!');
		// Po pobraniu danych wywołujemy przekazaną funkcję (callback)
		callback(data);
	}, 2000);
}

// Funkcja, która zostanie przekazana jako callback
function processData(data) {
	console.log('Otrzymane dane:', data);
	// Tutaj możesz przetwarzać pobrane dane, np. wyświetlić je w interfejsie
}

// Użycie:
fetchData(processData);
console.log('Program działa dalej...');

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
		console.log('Aktualna wartość licznika: ' + count);
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
		console.log(prefix + ': ' + message);
	};
}

// Tworzymy dwie różne funkcje-loggery
const infoLogger = createLogger('INFO');
const errorLogger = createLogger('ERROR');

// Użycie
infoLogger('To jest wiadomość informacyjna');
infoLogger('To jest nowa wiadomość');
errorLogger('To jest komunikat o błędzie');

// Na konsoli otrzymamy:
// INFO: To jest wiadomość informacyjna
// INFO: To jest nowa wiadomość
// ERROR: To jest komunikat o błędzie

// Metody dla ciągów znaków (String)
// Zwracanie znaku o określonym indeksie – charAt()
// Przykłady:

const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`); // Expected output: "The character at index 4 is q"
// Znajdowanie indeksu pierwszego wystąpienia tekstu – indexOf()
// Przykłady:

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The first occurrence of "${word}" is at index ${sentence.indexOf(word)}`); // Expected output: "The first occurrence of "fox" is at index 16"
// Znajdowanie indeksu ostatniego wystąpienia tekstu – lastIndexOf()
// Przykłady:

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'the';
console.log(`The last occurrence of "${word}" is at index ${sentence.lastIndexOf(word)}`); // Expected output: "The last occurrence of "the" is at index 31"
// Wyodrębnianie części ciągu – slice()
// Przykłady:

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.slice(4, 9)); // Expected output: "quick"
// Rozdzielanie ciągu znaków na tablicę ciągów znaków – split()
// Przykłady:

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.split(' ')); // Expected output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
// Zmiana wszystkich znaków ciągu na wielkie litery – toUpperCase()
// Przykłady:

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toUpperCase()); // Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
// Zmiana wszystkich znaków ciągu na małe litery – toLowerCase()
// Przykłady:

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toLowerCase()); // Expected output: "the quick brown fox jumps over the lazy dog."
// Usuwanie białych znaków z początku i końca ciągu – trim()
// Przykłady:

const sentence = ' The quick brown fox jumps over the lazy dog. ';
console.log(sentence.trim()); // Expected output: "The quick brown fox jumps over the lazy dog."
// Metody dla tablic (Array)
// Dodawanie elementu na koniec tablicy – push()
// Przykłady:

const array = [1, 2, 3];
array.push(4);
console.log(array); // Expected output: [1, 2, 3, 4]
// Usuwanie ostatniego elementu z tablicy – pop()
// Przykłady:

const array = [1, 2, 3, 4];
const lastElement = array.pop();
console.log(lastElement); // Expected output: 4
console.log(array); // Expected output: [1, 2, 3]
// Usuwanie pierwszego elementu z tablicy – shift()
// Przykłady:

const array = [1, 2, 3, 4];
const firstElement = array.shift();
console.log(firstElement); // Expected output: 1
console.log(array); // Expected output: [2, 3, 4]
// Dodawanie elementów na początek tablicy – unshift()
// Przykłady:

const array = [2, 3, 4];
array.unshift(1);
console.log(array); // Expected output: [1, 2, 3, 4]
// Zwracanie fragmentu tablicy – slice()
// Przykłady:

const array = [1, 2, 3, 4, 5];
console.log(array.slice(1, 3)); // Expected output: [2, 3]
// Dodawanie/usuwanie elementów z tablicy – splice().
// Przykłady:

const array = [1, 2, 3, 4, 5];
array.splice(2, 1, 'a', 'b');
// What are those values (2, 1, 'a', 'b')?
// 2 - starting index
// 1 - number of elements to delete
// 'a', 'b' - elements to add in place of deleted element(s)
console.log(array); // Expected output: [1, 2, "a", "b", 4, 5]
const array = [1, 2, 3, 4, 5];
const deletedElement = array.splice(2, 1, 'a', 'b');
console.log(deletedElement); // Expected output: [3]
console.log(array); // Expected output: [1, 2, "a", "b", 4, 5]
// Sortowanie elementów tablicy – sort()
// Przykłady:

const array = [1, 3, 2, 5, 4];
array.sort();
console.log(array); // Expected output: [1, 2, 3, 4, 5]
// Inny przykład:

const users = [
	{ name: 'Alice', age: 30 },
	{ name: 'Bob', age: 25 },
	{ name: 'Charlie', age: 35 },
];
users.sort((a, b) => a.age - b.age);
console.log(users);
// Output:
// [ { name: 'Bob', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Charlie', age: 35 } ]
// Odwracanie kolejności elementów w tablicy – reverse()
// Przykłady:
const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // Expected output: [5, 4, 3, 2, 1]
// Tworzenie nowej tablicy z wynikami wywoływania określonej funkcji na każdym elemencie tablicy – map().
// Innymi słowy – ta funkcja pozwala przekształcić każdy element listy według określonych zasad i zwrócić nową listę z wynikami tych przekształceń.

// Przykłady:

// Chcemy uzyskać listę tych samych imion, ale każde napisane wielkimi literami.
let names = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve'];
let upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames); // Expected output: ['ALICE', 'BOB', 'CAROL', 'DAVE', 'EVE']
// Chcemy uzyskać listę tych samych liczb, ale żeby każda z nich była podniesiona do kwadratu.
const array = [1, 2, 3, 4, 5];
const doubled = array.map(x => x ** 2);
console.log(doubled); // Expected output: [1, 4, 9, 16, 25]
// Chcemy uzyskać listę cen tych samych produktów, ale każda cena z dodanym podatkiem VAT.
let pricesWithoutVAT = [10.0, 20.0, 30.0, 40.0, 50.0];
let VAT = 0.23; // 23% VAT
let pricesWithVAT = pricesWithoutVAT.map(price => price * (1 + VAT));
console.log(pricesWithVAT); // Expected output: [12.3, 24.6, 36.9, 49.2, 61.5]
// Tworzenie nowej tablicy ze wszystkimi elementami, które przechodzą test określony w przekazywanej funkcji – filter()
// Funkcja filter() w JavaScript pomaga wybrać tylko te elementy z listy (tablicy), które spełniają określone warunki.

// Przykłady:

// Chcemy wybrać z listy liczby większe od 10.
let numbers = [5, 11, 8, 23, 4, 15];
let greaterThanTen = numbers.filter(number => number > 10);
console.log(greaterThanTen); // Expected output: [11, 23, 15]
// Chcemy wybrać z listy tylko element o nazwie jabłka.
let fruits = ['jabłko', 'banan', 'pomarańcza', 'jabłko', 'gruszka'];
let apples = fruits.filter(fruit => fruit === 'jabłko');
console.log(apples); // Expected output: ['jabłko', 'jabłko']
// Masz listę liczb: [1, 2, 3, 4, 5]. Chcesz z tej listy wybrać tylko parzyste liczby:
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Expected output: [2, 4]
// Stosowanie funkcji akumulującej do elementów tablicy, aby zredukować ją do pojedynczej wartości – reduce()
// Pozwala na przetwarzanie elementów listy (tablicy) w celu uzyskania jednej skumulowanej wartości. To narzędzie świetnie nadaje się do operacji, takich jak sumowanie wszystkich liczb na liście, łączenie ciągów tekstowych, czy obliczanie produktu elementów.
// Przykłady:

// Mamy listę liczb i chcemy obliczyć ich sumę.
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Expected output: 15
// Chcemy obliczyć średnią arytmetyczną z listy liczb.
let numbers = [5, 10, 15, 20, 25];
let total = numbers.reduce((accumulator, current, index, array) => {
	accumulator += current;
	if (index === array.length - 1) {
		return accumulator / array.length; // dzieli sumę przez liczbę elementów na końcu iteracji
	}
	return accumulator; // zwraca sumę do następnego wywołania
});
console.log(total); // Expected output: 15
// Chcemy połączyć słowa z listy w jedno zdanie.
let words = ['Hello', 'world', 'from', 'ChatGPT'];
let sentence = words.reduce((accumulator, current) => accumulator + ' ' + current);
console.log(sentence); // Expected output: "Hello world from ChatGPT"
