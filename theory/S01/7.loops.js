// Simple for loop looks like this:

for (let index = 0; index < 3; index++) {
  console.log("index:", index);
}

// it will return following result on console:
// index: 0
// index: 1
// index: 2

// Loops are useful to do certain action for N times or to iterate through an array

const anArray = [1, 4, "test", false];

for (let index = 0; index < anArray.length; index++) {
  const element = anArray[index];
  console.log("element:", index, element);
}

// it will return following result on console:
// element: 0 1
// element: 1 4
// element: 2 test
// element: 3 false

// foreach is also a loop, and its mostly used to iterate through an array:
anArray.forEach((element) => {
  console.log("forEach element:", element);
});

// it will return following result on console:
// forEach element: 1
// forEach element: 4
// forEach element: test
// forEach element: false

// Expression "element =>" is shorter declaration of function:
anArray.forEach(function (element) {
  console.log("forEach element:", element);
});

// it will return following result on console:
// forEach element: 1
// forEach element: 4
// forEach element: test
// forEach element: false


// Loops - while


// Pętla while to jedna z podstawowych konstrukcji iteracyjnych w JavaScript. Jej zadaniem jest wykonywanie bloku kodu tak długo, jak długo jest spełniony (prawdziwy) określony warunek.

// Składnia
// while (warunek) {
//   // Kod do wykonania
// }
// Podczas każdej iteracji:

// JavaScript sprawdza, czy warunek jest prawdziwy.
// Jeśli tak – wykonuje blok kodu.
// Po zakończeniu bloku kodu ponownie sprawdza warunek.
// Proces kończy się, gdy warunek przyjmie wartość fałsz (false).
// UWAGA: Pętla while wymaga dokładnego określenia warunku kończącego. Jeśli warunek nigdy nie zostanie spełniony (np. brak zmiany zmiennej w warunku), pętla może prowadzić do nieskończonego wykonywania i zawieszenia programu 💥.
// Zawsze upewnij się, że:

// Warunek może zostać spełniony.
// Zmienne używane w warunku są poprawnie aktualizowane w ciele pętli.
// Rozważ użycie zabezpieczenia, np. break, aby uniknąć potencjalnych problemów.
// Przykłady

// Licznik od 0 do 4
let counter = 0;
while (counter < 5) {
  console.log(`Counter: ${counter}`);
  counter++;
}
// Na konsoli:
// Counter: 0
// Counter: 1
// ...
// Counter: 4
// W powyższym przykładzie pętla działa tak długo, aż counter osiągnie wartość równą 5 (wtedy warunek (counter < 5) staje się fałszem).
// Zwróć uwagę, że aktualizacja zmiennej counter (poprzez counter++) jest kluczowa, aby pętla w ogóle się zakończyła.

// Znajdowanie liczby większej niż 10
const numbers = [3, 7, 10, 12, 8];
let index = 0;
while (index < numbers.length) {
  if (numbers[index] > 10) {
    console.log(`Pierwsza liczba > 10: ${numbers[index]}`);
    break; // Przerywa pętlę natychmiast po znalezieniu pierwszej liczby > 10
  }
  index++;
}
// Na konsoli:
// Pierwsza liczba > 10: 12
// Tutaj pętla przechodzi przez tablicę numbers, sprawdza kolejne elementy i w momencie znalezienia pierwszej liczby większej niż 10 – wyświetla ją na konsoli, po czym używa break, by zakończyć pętlę.

// Iteracja po tablicy wielowymiarowej
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let row = 0;
while (row < matrix.length) {
  let col = 0;
  while (col < matrix[row].length) {
    console.log(`Element [${row},${col}]: ${matrix[row][col]}`);
    col++;
  }
  row++;
}
// Na konsoli:
// Element [0,0]: 1
// ...
// Element [2,2]: 9
// Jeśli potrzebujemy zagnieżdżonych pętli while, możemy je łączyć.
// Wewnętrzna pętla while przechodzi przez kolumny tablicy matrix[row], a zewnętrzna – przez kolejne wiersze matrix.

// Wczytywanie losowych liczb, dopóki nie pojawi się liczba parzysta
function getRandomNumber() {
  return Math.floor(Math.random() * 100); // losowa liczba z zakresu 0–99
}
let random = getRandomNumber();
while (random % 2 !== 0) {
  console.log(`Wylosowano liczbę nieparzystą: ${random}`);
  random = getRandomNumber(); // wylosuj następną
}
console.log(`Trafiliśmy na liczbę parzystą: ${random}`);
// W tym przykładzie pętla będzie wykonywać się tak długo, aż wylosowana liczba będzie parzysta. Każda kolejna iteracja wylosuje nową liczbę, dopóki warunek (random % 2 !== 0) będzie prawdziwy (tzn. random jest nieparzyste).

// Użycie continue w pętli while
let num = 0;
while (num < 10) {
  num++;
  if (num % 2 === 0) {
    continue; // pomiń resztę instrukcji i przejdź do kolejnej iteracji
  }
  console.log(`Liczba nieparzysta: ${num}`);
}
// Na konsoli:
// Liczba nieparzysta: 1
// Liczba nieparzysta: 3
// Liczba nieparzysta: 5
// Liczba nieparzysta: 7
// Liczba nieparzysta: 9
// Instrukcja continue pozwala opuścić dalszą część ciała pętli w danej iteracji i natychmiast przejść do sprawdzenia warunku (a jeśli jest on spełniony – do kolejnej iteracji).
// W powyższym kodzie pomijamy wyświetlanie liczb parzystych.

// TIP: Używaj while, gdy nie jesteś pewien, ile iteracji będzie wymagane (np. podczas przeszukiwania danych, czekania na dane asynchroniczne itp.).
// Jeśli znasz dokładną liczbę powtórzeń z góry, rozważ użycie pętli for.
// Podsumowanie
// Pętla while sprawdza warunek przed każdą iteracją i wykonuje blok kodu, dopóki warunek jest spełniony.
// Pamiętaj o aktualizowaniu zmiennych biorących udział w warunku pętli, aby uniknąć nieskończonej pętli.
// Dzięki instrukcji break możesz zakończyć pętlę w dowolnym momencie, a continue pozwala przejść do kolejnej iteracji z pominięciem dalszego kodu w aktualnej.
// Jeżeli nie wiesz, ile razy pętla powinna się powtórzyć, pętla while jest często lepszym wyborem niż for.
// Pętla while stanowi fundamentalną konstrukcję języka JavaScript – pozwala na dużą elastyczność, ale wymaga ostrożnego obchodzenia się z warunkiem iteracji i zmiennymi.
// W dalszej nauce zwróć uwagę również na pętlę do...while, która zawsze wykona się co najmniej raz, zanim sprawdzi warunek.