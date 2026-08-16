// Typ any vs unknown
// Typ any
// Typ any pozwala na przypisanie do zmiennej dowolnej wartości i wyłącza sprawdzanie typów przez TypeScript. Daje to dużą swobodę, ale niesie ze sobą ryzyko błędów.

// Przykład:
// let zmienna: any;
// zmienna = 42;
// console.log(zmienna); // działa poprawnie
// zmienna = "tekst";
// console.log(zmienna); // działa poprawnie
// zmienna.metodaNieistniejąca(); // brak błędu na etapie kompilacji, ale otrzymamy błąd w trakcie działania kodu
// UWAGA: Używanie any nie zapewnia żadnych zabezpieczeń! Brak weryfikacji typów może prowadzić do błędów, które pojawiają się w trakcie działania skryptów.
// Zastosowanie:
// Szybkie prototypowanie, gdzie typy są nieznane na etapie początkowym.
// Praca z zewnętrznymi bibliotekami, które nie mają odpowiednich typów.
// Typ unknown
// Typ unknown w TypeScript umożliwia przypisanie do zmiennej dowolnej wartości (tak jak typ any), ale różni się tym, że wymaga dodatkowej weryfikacji typu przed użyciem tej wartości.

// W jakim sensie wymaga?

// Kompilator TypeScript już na etapie pisania kodu (przed uruchomieniem!) podkreśli Ci i sygnalizuje miejsca niebezpieczne przed którymi musisz dodać odpowiednią weryfikację.
// Oznacza to, że zanim wykonasz operację na zmiennej typu unknown, musisz upewnić się, że jej typ jest zgodny z tym, czego oczekuje Twoja logika programu.

// Dlaczego to bezpieczniejsze?

// W przypadku typu any, TypeScript “przestaje patrzeć” na to, co robisz z wartością. Możesz wykonać dowolną operację, nawet jeśli jest nieprawidłowa, i błąd pojawi się dopiero w czasie wykonywania skryptów. Z kolei w przypadku typu unknown, TypeScript wymaga, abyś przed użyciem sprawdził, co dokładnie znajduje się w tej zmiennej, co minimalizuje ryzyko błędów.

// Przykład:
// let zmienna: unknown;
// zmienna = 42;
// console.log(zmienna); // działa poprawnie
// zmienna = "tekst";
// console.log(zmienna); // działa poprawnie
// // weryfikacja
// if (typeof zmienna === "string") {
//   console.log(zmienna.toUpperCase()); // działa poprawnie
// }
// // Przykład z porównaniem z any
// let zmienna: any = "tekst";
// console.log(zmienna.toUpperCase()); // działa poprawnie
// zmienna = 42;
// console.log(zmienna.toUpperCase()); // błąd w runtime: "toUpperCase is not a function"
// Powyżej TypeScript pozwala Ci na wykonanie metody toUpperCase, nawet jeśli w drugim przypadku zmienna zawiera liczbę, co prowadzi do błędu w trakcie działania programu.

let zmienna: unknown = "tekst";
// Przed użyciem sprawdź typ:
if (typeof zmienna === "string") {
  console.log(zmienna.toUpperCase()); // działa poprawnie
} else {
  console.log("Zmienna nie jest tekstem");
}
zmienna = 42;
// Ponowna weryfikacja:
if (typeof zmienna === "string") {
  console.log(zmienna.toUpperCase());
} else {
  console.log("Zmienna nie jest tekstem");
}
// W przypadku typu unknown, TypeScript wymaga, abyś sam sprawdził, czy zmienna ma odpowiedni typ, zanim na niej operujesz. Dzięki temu unikasz sytuacji, w której próbujesz użyć metody niedostępnej dla danego typu, co czyni Twój kod bardziej odpornym na błędy.

// Kluczowe zalety typu unknown
// Bezpieczeństwo: Zmusza Cię do weryfikacji typu przed użyciem wartości, co zapobiega błędom.
// Przejrzystość: Kod staje się bardziej czytelny, ponieważ weryfikacja typu jasno pokazuje, jakiego rodzaju danych spodziewasz się w danym miejscu.
// Kontrola: Pozwala zachować elastyczność w pracy z dynamicznymi danymi, ale w sposób kontrolowany i przewidywalny.
// Podsumowując: unknown łączy elastyczność typu any z wymuszonym bezpieczeństwem typów, dzięki czemu jest doskonałym wyborem w sytuacjach, gdy dane wejściowe mogą pochodzić z niepewnych źródeł, takich jak API, dane użytkownika czy testy.

// Zastosowanie:
// Praca z danymi wejściowymi, których typy mogą być różne.
// Zabezpieczanie kodu przed błędami wynikającymi z nieoczekiwanych typów.