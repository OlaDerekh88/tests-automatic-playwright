// Operacje na listach, takie jak filter, find, some, są używane do łatwego przetwarzania danych w tablicach.
// Dzięki nim możemy w prosty sposób wyszukiwać, filtrować i weryfikować dane, bez konieczności pisania pętli for lub while na własną rękę.

// Metoda filter
// Opis:
// Metoda filter tworzy nową tablicę, zawierającą elementy, które spełniają podany warunek (funkcję testującą).
// Jeżeli żaden element nie przejdzie testu, zwrócona tablica będzie pusta.

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
// Przykład z obiektami:

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const adults = people.filter(person => person.age >= 30);
console.log(adults);
// [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
// Zwróć uwagę, że filter nie modyfikuje oryginalnej tablicy people, a zwraca nową z elementami spełniającymi warunek.

// Metoda find
// Opis:
// Metoda find zwraca pierwszy element spełniający warunek.
// Jeśli żaden element nie pasuje do kryteriów, zwraca undefined.

const numbers = [10, 20, 30, 40];
const firstAboveTwenty = numbers.find(num => num > 20);
console.log(firstAboveTwenty); // 30
// Przykład z obiektami:

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob' }
// To wygodne rozwiązanie, gdy potrzebujemy wyszukać konkretny obiekt – zamiast iterować w pętli, możemy wprost użyć find.

// Metoda some
// Opis:
// Metoda some zwraca wartość true, jeżeli przynajmniej jeden element w tablicy spełnia zadany warunek. W przeciwnym wypadku zwraca false.

const ages = [18, 22, 15, 30];
const hasMinor = ages.some(age => age < 18);
console.log(hasMinor); // true
// Przykład z obiektami:

const tasks = [
  { title: 'Task 1', completed: false },
  { title: 'Task 2', completed: true }
];
const hasCompleted = tasks.some(task => task.completed);
console.log(hasCompleted); // true
// Dzięki some możemy łatwo sprawdzić, czy w kolekcji występuje chociaż jeden element pasujący do interesującej nas cechy.

// Dodatkowe uwagi
// filter - zwraca wszystkie pasujące elementy jako nową tablicę.
// find - zwraca pierwszy (i tylko pierwszy!) pasujący element.
// some - zwraca true lub false, w zależności od tego, czy co najmniej jeden element spełnia warunek.
// Wszystkie trzy metody wykorzystują funkcję zwrotną, która przyjmuje element (i ewentualnie indeks oraz oryginalną tablicę) i zwraca warunek (prawdę lub fałsz).
