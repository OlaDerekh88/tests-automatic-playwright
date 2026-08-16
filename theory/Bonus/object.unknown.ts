// Typ unknown vs typ object

// Typy unknown i object w TypeScript pozwalają na operowanie na wartościach o nieznanej lub ogólnej strukturze. Choć mogą wydawać się podobne, różnią się istotnie w kontekście bezpieczeństwa typów i sposobu ich użycia.

// TIP: Chcesz szybko przetestować kod podany w przykładach z tej lekcji? 🤔
// Możesz skorzystać z Edytora Online (pamiętaj tylko, aby nie testować wrażliwych danych!)

// Więcej o edytorach online znajdziesz w specjalnej lekcji Jak szybko testować skrypty w TypeScript?

// Typ object
// Typ object w TypeScript odnosi się do wszystkiego, co nie jest typem prymitywnym (czyli nie jest string, number, boolean, null, undefined ani symbol).

// Przykład
// let dane: object;
// dane = { imie: "Krzysztof" }; // poprawnie
// dane = [1, 2, 3]; // poprawnie
// dane = new Date(); // poprawnie
// dane = "tekst"; // ❌ błąd kompilacji
// dane = 123; // ❌ błąd kompilacji
// Ograniczenia
// Typ object nie pozwala na dostęp do właściwości bez dodatkowego określenia struktury obiektu. Jest bardzo ogólny – możesz przypisać mu wiele rzeczy, ale nie możesz z nimi nic zrobić bez rzutowania lub doprecyzowania typu.

// let dane: object = { imie: "Krzysztof" };
// // console.log(dane.imie); ❌ Błąd – TypeScript nie wie, że dana właściwość istnieje
// Zastosowanie:
// Ogólne typowanie obiektów, bez dostępu do ich struktury.
// Ograniczenie do danych nieprymitywnych (czyli tylko obiektów).
// Typ unknown
// Typ unknown oznacza, że nie wiadomo, co dokładnie zawiera dana zmienna – może to być dowolny typ, także prymitywny. Jest to bardziej elastyczny odpowiednik typu any, ale z wymuszoną weryfikacją typu przed użyciem.

// Przykład
let dane: unknown;
dane = 123; // poprawnie
dane = "tekst"; // poprawnie
dane = { imie: "Krzysztof" }; // poprawnie
// Jednak zanim użyjesz tej wartości – musisz sprawdzić jej typ:

if (typeof dane === "string") {
  console.log(dane.toUpperCase()); // poprawnie
}
if (typeof dane === "object" && dane !== null) {
  console.log("To obiekt!");
}
// Kluczowe zalety typu unknown

// Bezpieczny – nie pozwala na przypadkowe operacje bez wcześniejszej walidacji typu.
// Uniwersalny – może przechowywać każdy rodzaj danych, nie tylko obiekty.
// Elastyczny – umożliwia typowanie danych wejściowych o nieznanej strukturze.
// Zastosowanie
// Obsługa danych wejściowych z API, formularzy, plików itp.
// Bezpieczne typowanie funkcji przyjmujących dane z zewnątrz.