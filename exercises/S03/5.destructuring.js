// Destrukturyzacja to prosty sposób na wyciąganie danych z obiektów i tablic w JavaScript.

// Wyobraź sobie, że masz pudełko z kilkoma przedmiotami (danymi).

// Zamiast za każdym razem wyjmować rzeczy z pudełka pojedynczo, destrukturyzacja pozwala Ci od razu przypisać każdą z tych rzeczy do odpowiednich zmiennych. To tak, jakbyś jednym ruchem ręki posegregował zawartość pudełka na osobne kupki – bardzo wygodne i szybkie!

// Dzięki destrukturyzacji możesz łatwiej pracować z danymi, które są zgrupowane razem w obiektach lub tablicach, bez pisania długich i skomplikowanych linii kodu.
// Destrukturyzacja obiektów pozwala na wyciąganie wartości z obiektu i przypisywanie ich do zmiennych o takiej samej nazwie jak klucze w obiekcie.

// Przykład 1: Podstawowa destrukturyzacja

const person = {
  firstName: "Anna",
  lastName: "Kowalska",
  age: 30,
};
const { firstName, lastName, age } = person;
console.log(firstName); // "Anna"
console.log(lastName);  // "Kowalska"
console.log(age);     // 30
// W tym przykładzie mamy obiekt o nazwie person, który zawiera informacje o osobie: jej imię (firstName), nazwisko (lastName) oraz wiek (age). Normalnie, aby uzyskać dostęp do tych danych, musielibyśmy za każdym razem odwoływać się do obiektu w taki sposób:

person.firstName
person.lastName
person.age
// Jednak dzięki destrukturyzacji, możemy łatwo “wyciągnąć” wartości z obiektu i przypisać je bezpośrednio do zmiennych o tych samych nazwach co klucze w obiekcie.

// W linijce:

const { firstName, lastName, age } = person;
// Mówimy JavaScriptowi: “Weź wartości z obiektu person o kluczach firstName, lastName i age, a następnie przypisz je do zmiennych o tych samych nazwach.”

// To sprawia, że możemy teraz bezpośrednio korzystać z tych zmiennych:

console.log(firstName); // Zwraca "Anna"
console.log(lastName);  // Zwraca "Kowalska"
console.log(age);     // Zwraca 30
// Dzięki destrukturyzacji oszczędzamy czas i linijki kodu, a kod jest bardziej czytelny i łatwiejszy do zrozumienia.
// Zmiana nazw zmiennych
// Możemy przypisać wartości do zmiennych o innych nazwach niż klucze w obiekcie.

// Przykład 2: Przypisanie do zmiennych o innych nazwach

const { firstName: imie, lastName: nazwisko } = person;
console.log(imie);   // "Anna"
console.log(nazwisko); // "Kowalska"
// W tym przykładzie, zamiast przypisywać wartości z obiektu person bezpośrednio do zmiennych o takich samych nazwach jak klucze (firstName i lastName), przypisujemy je do zmiennych o innych nazwach (imie i nazwisko).

// W linijce:

const { firstName: imie, lastName: nazwisko } = person;
// Robimy coś podobnego do poprzedniego przykładu, ale tym razem mówimy JavaScriptowi: “Weź wartość z obiektu person pod kluczem firstName i przypisz ją do zmiennej o nazwie imie, a wartość z klucza lastName przypisz do zmiennej nazwisko.” Dzięki temu możemy używać własnych nazw zmiennych, które bardziej nam odpowiadają.

// Następnie możemy odwoływać się do tych zmiennych:

console.log(imie);   // Zwraca "Anna"
console.log(nazwisko); // Zwraca "Kowalska"
// Destrukturyzacja z przypisywaniem do innych nazw zmiennych pozwala nam na większą elastyczność w pracy z danymi, szczególnie w sytuacjach, gdy chcemy używać bardziej opisowych nazw lub uniknąć konfliktów z innymi zmiennymi w naszym kodzie.

// Domyślne wartości
// Jeśli klucz nie istnieje w obiekcie, możemy ustawić domyślną wartość. To oznacza, że jeśli obiekt nie ma danego klucza, przypiszemy zmiennej domyślną wartość, którą sami określimy.

// Przykład 3: Ustawianie domyślnych wartości

const { nationality = "Polska" } = person;
console.log(nationality); // "Polska"
// W tym przykładzie obiekt person nie zawiera klucza nationality. Dzięki destrukturyzacji z domyślną wartością, zmiennej nationality przypisano wartość “Polska”, zamiast pozostawienia jej niezdefiniowaną.

// Dodatkowy przykład: Domyślna wartość dla wieku

const { age = 18 } = person;
console.log(age); // Jeśli w obiekcie person nie ma klucza "age", zwróci 18
// Tutaj zastosowaliśmy podobną technikę, ale dla klucza age. Jeśli obiekt person nie posiada klucza age, zmiennej age zostanie przypisana domyślna wartość 18.

// Destrukturyzacja zagnieżdżonych obiektów
// Destrukturyzacja może być stosowana do zagnieżdżonych obiektów.

// Przykład 4: Destrukturyzacja zagnieżdżonych obiektów

const employee = {
  id: 1,
  name: "Jan",
  position: { title: "Developer", department: "IT" },
};
const {
  position: { title, department },
} = employee;
console.log(title);    // "Developer"
console.log(department); // "IT"
// W tym przykładzie obiekt employee zawiera zagnieżdżony obiekt position, który przechowuje dane o tytule stanowiska (title) i dziale (department).

// Dzięki destrukturyzacji możemy “rozpakować” te zagnieżdżone dane bezpośrednio, uzyskując dostęp do wartości title i department.

// Dodatkowy przykład: Destrukturyzacja zagnieżdżonych obiektów z lokalizacją

const company = {
  name: "Tech Corp",
  location: { city: "Warsaw", country: "Poland" }
};
const {
  location: { city, country },
} = company;
console.log(city);  // "Warsaw"
console.log(country); // "Poland"
// W dodatkowym przykładzie mamy obiekt company, który zawiera zagnieżdżony obiekt location. Zastosowaliśmy destrukturyzację, aby uzyskać dostęp do wartości city i country bez konieczności odwoływania się do całego obiektu location.

// Destrukturyzacja w funkcjach
// Destrukturyzacja jest szczególnie przydatna przy przekazywaniu obiektów jako argumentów funkcji.

// Przykład 5: Destrukturyzacja w parametrach funkcji

function greet({ firstName, lastName }) {
  console.log(`Witaj, ${firstName} ${lastName}!`);
}
greet(person); // "Witaj, Anna Kowalska!"
// W tym przykładzie funkcja greet przyjmuje jako argument obiekt, w którym od razu destrukturyzujemy klucze firstName i lastName. Dzięki temu możemy bezpośrednio korzystać z tych wartości wewnątrz funkcji, zamiast odwoływać się do całego obiektu.

// Dodatkowy przykład: Funkcja z obiektem książki

const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford"
};
function displayBookInfo({ title, author }) {
  console.log(`Tytuł: ${title}, Autor: ${author}`);
}
displayBookInfo(book); // "Tytuł: JavaScript: The Good Parts, Autor: Douglas Crockford"
// W dodatkowym przykładzie mamy obiekt book, który zawiera informacje o książce. Funkcja displayBookInfo destrukturyzuje obiekt, aby uzyskać bezpośredni dostęp do tytułu i autora książki.

// Dodatkowy przykład: Wykorzystanie jednego argumentu

const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford"
};
function displayAuthor({ author }) {
  console.log(`Autor: ${author}`);
}
displayAuthor(book); // "Autor: Douglas Crockford"
// W tym przykładzie funkcja displayAuthor destrukturyzuje obiekt book, ale wyciąga tylko jeden argument, author, i wyświetla tylko informację o autorze książki.

// TIP: Jeśli planujesz automatyzować testy z Playwright – to konstrukcję destrukturyzacji obiektu powinieneś szczególnie zapamiętać 😉
import { test, expect } from '@playwright/test';
test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__title');
  expect(name).toBe('Playwright');
});
// W powyższym teście z Playwright, destrukturyzacja jest użyta w parametrze funkcji test!

// Zamiast przekazywać cały obiekt kontekstu, destrukturyzujemy go, wyciągając tylko page. Dzięki temu bezpośrednio pracujemy z obiektem page, co upraszcza kod testu. W testach automatycznych destrukturyzacja często pozwala na bardziej przejrzyste i czytelne zarządzanie kontekstem testów 😉

// Jeśli interesuje Cię automatyzacja testów, to polecamy nasze materiały Praktyczne wprowadzenie do testów automatycznych z Playwright.

// A także język TypeScript, który jest rozszerzeniem języka JavaScript – TypeScript dla Testera

// Łączenie z operatorami rest i spread
// Destrukturyzacja może być łączona z operatorami rest (...) i spread. Operator rest pozwala zebrać pozostałe wartości obiektu, które nie zostały przypisane do zmiennych w destrukturyzacji.

// Przykład 6: Użycie operatora rest

const { firstName, ...otherDetails } = person;
console.log(firstName);  // "Anna"
console.log(otherDetails); // { lastName: "Kowalska", age: 30 }
// W tym przykładzie z obiektu person wyciągamy wartość firstName i przypisujemy ją do zmiennej firstName. Pozostałe klucze (w tym przypadku lastName i age) zostają zebrane w obiekt otherDetails za pomocą operatora rest (...).

// Dzięki temu, gdy mamy dużą liczbę kluczy w obiekcie, możemy wyciągnąć tylko te, które nas interesują, a pozostałe umieścić w osobnym obiekcie bez potrzeby ręcznego przepisywania każdego z nich.

// Przykład z życia:
// Wyobraź sobie, że masz formularz z danymi kontaktowymi klienta. Zamiast ręcznie przepisywać każdą informację, możesz szybko wyciągnąć potrzebne dane i przypisać je do zmiennych, co ułatwia dalsze przetwarzanie.

// Destrukturyzacja tablic
// Destrukturyzacja tablic pozwala na przypisywanie elementów tablicy do zmiennych na podstawie ich pozycji w tablicy.

// Przykład 1: Podstawowa destrukturyzacja tablicy

const colors = ["czerwony", "zielony", "niebieski"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);  // "czerwony"
console.log(secondColor); // "zielony"
console.log(thirdColor);  // "niebieski"
// W tym przykładzie mamy tablicę colors, która zawiera trzy kolory: “czerwony”, “zielony” i “niebieski”. Destrukturyzacja przypisuje wartości z tablicy do zmiennych firstColor, secondColor i thirdColor, zgodnie z ich pozycją w tablicy.

// Pierwszy element tablicy (kolor “czerwony”) zostaje przypisany do zmiennej firstColor, drugi element (“zielony”) do zmiennej secondColor, a trzeci (“niebieski”) do zmiennej thirdColor. Dzięki destrukturyzacji możemy szybko przypisać elementy tablicy do zmiennych, bez konieczności pisania wielu osobnych linii kodu.

// Pominięcie elementów
// Możemy pominąć wybrane elementy tablicy, używając przecinków.

// Przykład 2: Pomijanie elementów

const [, , thirdColor] = colors;
console.log(thirdColor); // "niebieski"
// W tym przykładzie wykorzystujemy destrukturyzację tablicy, aby pominąć pierwsze dwa elementy tablicy colors i przypisać tylko trzeci element (“niebieski”) do zmiennej thirdColor.

// Przecinki w destrukturyzacji sygnalizują pominięcie danych. Dwa przecinki na początku oznaczają, że pierwszy i drugi element tablicy zostają pominięte, a zmienna thirdColor otrzymuje wartość trzeciego elementu. Jest to szczególnie przydatne, gdy potrzebujemy tylko niektórych elementów z tablicy, bez potrzeby tworzenia dodatkowych zmiennych dla pominiętych wartości.

// Operator reszty
// Za pomocą operatora reszty (...) możemy zebrać pozostałe elementy tablicy.

// Przykład 3: Operator reszty

const [firstColor, ...otherColors] = colors;
console.log(firstColor);  // "czerwony"
console.log(otherColors); // ["zielony", "niebieski"]
// W tym przykładzie używamy operatora reszty (...), aby zebrać wszystkie elementy tablicy colors, które znajdują się po pierwszym elemencie.

// Pierwszy element tablicy (“czerwony”) zostaje przypisany do zmiennej firstColor, natomiast wszystkie pozostałe elementy (“zielony” i “niebieski”) są zebrane do nowej tablicy otherColors za pomocą operatora rest. Operator rest jest bardzo przydatny, gdy chcemy pobrać część elementów z tablicy, a pozostałe elementy zebrać do osobnej zmiennej, bez konieczności ręcznego przypisywania każdego z nich.

// Domyślne wartości
// Możemy ustawić domyślne wartości dla elementów, które mogą być niezdefiniowane. Jest to przydatne, gdy chcemy, aby nasze zmienne miały pewne wartości, nawet jeśli niektóre elementy tablicy są pominięte.

// Przykład 4: Domyślne wartości

const numbers = [1];
const [a = 10, b = 20] = numbers;
console.log(a); // 1
console.log(b); // 20
// W tym przykładzie używamy domyślnych wartości podczas destrukturyzacji tablicy. Nasza tablica numbers zawiera tylko jeden element, czyli 1.

// Zmienna a otrzymuje wartość 1 z tablicy, ponieważ jest pierwszym elementem.
// Zmienna b otrzymuje wartość domyślną 20, ponieważ w tablicy numbers brakuje drugiego elementu.
// Dzięki tej technice domyślnych wartości nasze zmienne mogą mieć sensowne wartości nawet wtedy, gdy odpowiednie elementy w tablicy są pominięte.

// Przykład 4b: Gdy obie wartości są obecne w tablicy

const numbers = [1, 2];
const [a = 10, b = 20] = numbers;
console.log(a); // 1
console.log(b); // 2
// W tym przypadku tablica numbers zawiera dwa elementy: 1 i 2.

// Zmienna a przyjmuje wartość 1 z tablicy.
// Zmienna b przyjmuje wartość 2 z tablicy, więc domyślna wartość 20 nie jest używana.
// Kiedy wszystkie wartości są dostępne w tablicy, domyślne wartości pozostają nieużywane.

// Destrukturyzacja zagnieżdżonych tablic
// Destrukturyzacja może być stosowana do zagnieżdżonych tablic.

// Przykład 5: Destrukturyzacja zagnieżdżonych tablic

const coordinates = [
  [1, 2],
  [3, 4],
];
const [[x1, y1], [x2, y2]] = coordinates;
console.log(x1, y1); // 1 2
console.log(x2, y2); // 3 4
// W tym przykładzie mamy zagnieżdżoną tablicę coordinates, która zawiera dwie tablice. Pierwsza tablica ma wartości 1 i 2, druga zawiera 3 i 4.

// Podczas destrukturyzacji wyciągamy wartości z obu zagnieżdżonych tablic jednocześnie. Zmienna x1 otrzymuje wartość 1, a y1 wartość 2. Podobnie x2 i y2 są przypisane do wartości 3 i 4.

// Dzięki destrukturyzacji zagnieżdżonych tablic możemy łatwo pracować z danymi o bardziej złożonej strukturze, bez potrzeby ręcznego dostępu do każdego elementu tablicy.

// Zamiana wartości zmiennych
// Destrukturyzacja pozwala na łatwą zamianę wartości dwóch zmiennych bez użycia zmiennej tymczasowej.

// Przykład 6: Zamiana wartości zmiennych

let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(x); // 10
console.log(y); // 5
// W tym przykładzie destrukturyzacja pozwala nam zamienić wartości zmiennych x i y w jednej linii kodu, bez potrzeby korzystania z dodatkowej zmiennej tymczasowej.

// Zmienna x, która miała początkową wartość 5, otrzymuje teraz wartość 10, a zmienna y — wartość 5.

// Dzięki destrukturyzacji zamiana wartości dwóch zmiennych staje się prostsza i bardziej czytelna w porównaniu do tradycyjnego podejścia, które wymagałoby użycia zmiennej pośredniej do tymczasowego przechowywania jednej z wartości.

// Przykład z życia:
// Wyobraź sobie, że masz listę zadań i chcesz przypisać pierwsze zadanie do siebie, a pozostałe rozdzielić między zespół. Destrukturyzacja tablicy pozwala to zrobić szybko i efektywnie.

// Destrukturyzacja stringów
// Stringi w JavaScript mogą być traktowane jak tablice znaków, co umożliwia ich destrukturyzację.

// Przykład 1: Podstawowa destrukturyzacja stringu

const greeting = "Cześć";
const [firstChar, secondChar, ...restChars] = greeting;
console.log(firstChar);  // "C"
console.log(secondChar); // "z"
console.log(restChars);  // ["e", "ś", "ć"]
// W tym przykładzie traktujemy string greeting (“Cześć”) jak tablicę, gdzie każdy znak jest elementem tej tablicy. Destrukturyzacja pozwala nam wyciągnąć pierwszy znak (firstChar), drugi znak (secondChar), a resztę znaków zebrać w tablicy restChars za pomocą operatora rest (...).

// Pierwszy znak “C” zostaje przypisany do firstChar, drugi “z” do secondChar, a pozostałe znaki “e”, “ś” i “ć” zostają zebrane w tablicę restChars. Dzięki destrukturyzacji możemy łatwo pracować ze stringami w taki sam sposób, jak z tablicami.

// Destrukturyzacja w funkcjach
// Destrukturyzację stringów można wykorzystać w funkcjach do łatwego rozbicia tekstu.

// Przykład 2: Destrukturyzacja w funkcji

function getInitials(fullName) {
  const [firstName, lastName] = fullName.split(" ");
  const [firstInitial] = firstName;
  const [lastInitial] = lastName;
  return `${firstInitial}.${lastInitial}.`;
}
console.log(getInitials("Jan Kowalski")); // "J.K."
// W tym przykładzie funkcja getInitials przyjmuje pełne imię i nazwisko w postaci stringu. Używamy metody split(), aby rozdzielić ten string na dwie części: imię i nazwisko.

// Następnie, za pomocą destrukturyzacji, wyciągamy pierwszą literę z imienia (firstInitial) oraz pierwszą literę z nazwiska (lastInitial).

// Na koniec funkcja zwraca inicjały w formacie J.K., tworząc nowy string z wyciągniętych inicjałów. Destrukturyzacja w tym przypadku pozwala na prostą i elegancką obsługę imion i nazwisk, bez potrzeby ręcznego odwoływania się do każdego znaku.

// Łączenie z metodami stringów
// Destrukturyzacja może być łączona z metodami stringów dla bardziej zaawansowanych operacji.

// Przykład 3: Destrukturyzacja i metody stringów

const phrase = "JavaScript jest super";
const [firstWord, ...otherWords] = phrase.split(" ");
console.log(firstWord);   // "JavaScript"
console.log(otherWords);  // ["jest", "super"]
// W tym przykładzie używamy metody split() na stringu phrase, aby rozdzielić go na słowa, tworząc z nich tablicę. Następnie za pomocą destrukturyzacji przypisujemy pierwsze słowo do zmiennej firstWord, a pozostałe słowa zbieramy w tablicę otherWords za pomocą operatora rest (...).

// Zmienna firstWord otrzymuje wartość “JavaScript”, a zmienna otherWords przechowuje pozostałe słowa: “jest” i “super”. Dzięki połączeniu destrukturyzacji i metody split(), możemy łatwo manipulować tekstem i rozdzielać go na części w bardziej zaawansowany sposób.

// Przykład z życia:
// Jeśli masz zdanie i chcesz znać jego pierwsze słowo oraz resztę, możesz to łatwo osiągnąć poprzez destrukturyzację połączoną z metodą split().

// Exercises

// Utwórz obiekt car, który zawiera następujące właściwości: brand, model, year. Następnie użyj destrukturyzacji, aby wyciągnąć wartości tych właściwości i wypisz je w konsoli.

// Oczekiwany wynik:

// "Toyota", "Corolla", 2020
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

const { brand, model, year } = car;

console.log(brand); // "Toyota"
console.log(model); // "Corolla"
console.log(year);  // 2020


// Treść zadania 2:
// Masz tablicę z trzema liczbami: numbers = [10, 20, 30]. Użyj destrukturyzacji, aby przypisać każdą z liczb do zmiennych a, b i c, a następnie wypisz je w konsoli.

// Oczekiwany wynik: 10, 20, 30


const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// Treść zadania 3:
// Masz tablicę values = [5]. Użyj destrukturyzacji, aby przypisać pierwszą wartość do zmiennej x, a drugą do zmiennej y. Jeśli druga wartość nie istnieje, przypisz do y domyślną wartość 10. Wypisz obie zmienne w konsoli.

// Oczekiwany wynik:5, 10
const values = [5];

const [x, y = 10] = values;

console.log(x); // 5
console.log(y); // 10

// Treść zadania 4:
// Masz tablicę fruits = ["jabłko", "banan", "pomarańcza", "gruszka"]. Użyj destrukturyzacji, aby przypisać pierwszy owoc do zmiennej firstFruit, a pozostałe owoce do zmiennej otherFruits. Wypisz te zmienne w konsoli.

// Oczekiwany wynik: "jabłko", ["banan", "pomarańcza", "gruszka"]
// Rozwiązanie
const fruits = ["jabłko", "banan", "pomarańcza", "gruszka"];

const [firstFruit, ...otherFruits] = fruits;

console.log(firstFruit);   // "jabłko"
console.log(otherFruits);  // ["banan", "pomarańcza", "gruszka"]

// Treść zadania 5:
// Masz obiekt student z zagnieżdżonym obiektem address:

// const student = {
//   name: "Ewa",
//   address: {
//   city: "Warszawa",
//   street: "Miodowa"
//   }
// };
// Użyj destrukturyzacji, aby wyciągnąć nazwę ulicy i wypisz ją w konsoli.

// Oczekiwany wynik: "Miodowa"
const student = {
  name: "Ewa",
  address: {
  city: "Warszawa",
  street: "Miodowa"
  }
};

const { address: { street } } = student;

console.log(street); // "Miodowa"

// Treść zadania 6:
// Utwórz funkcję displayCarInfo, która przyjmuje obiekt z informacjami o samochodzie (brand, model, year) i wypisuje je w konsoli, używając destrukturyzacji w parametrach funkcji.

// Oczekiwany wynik:

// "Toyota", "Corolla", 2020
function displayCarInfo({ brand, model, year }) {
  console.log(brand);  // "Toyota"
  console.log(model);  // "Corolla"
  console.log(year);   // 2020
}

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

displayCarInfo(car);