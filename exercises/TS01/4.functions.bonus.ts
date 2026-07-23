// Funkcji i callbacks

// TypeScript pozwala definiować typy dla funkcji, co ułatwia ich wykorzystanie w bardziej zaawansowanych scenariuszach.

// Przykład:

// Typ funkcji
type Operation = (a: number, b: number) => number
// Implementacja
const subtract: Operation = (a, b) => a - b
console.log(subtract(10, 4)) // 6
// Typ Operation opisuje funkcję przyjmującą dwa parametry typu number (a i b) i zwracającą wartość typu number. Dzięki temu mamy pewność, że każda funkcja przypisana do tego typu spełni określone wymagania.

// Dla przykładu – poniżej napisaliśmy 2 funkcje, na dodawanie i odejmowanie, które spełniają zadeklarowany typ:

// Typ funkcji
// type Operation = (a: number, b: number) => number
// // Implementacja
// const subtract: Operation = (a, b) => a - b
// const sum: Operation = (a, b) => a + b
// console.log(subtract(10, 4)) // 6
// console.log(sum(10, 4)) // 14

// Przeciążanie funkcji - (Перевантаження функцій) в TypeScript — це можливість оголосити одну й ту саму функцію, яка може приймати різні типи (або кількість) аргументів і повертати різний результат залежно від того, що саме в неї передали.Простими словами: замість того, щоб створювати три різні функції (наприклад, getUserById, getUserByEmail, getUserByName), ти створюєш одну функцію getUser, але описуєш кілька варіантів ("сигнатур"), як саме її можна викликати.
// Якщо передаємо get('/users') - повертає список користувачів.
// Якщо передаємо get('/users', { id: 5 }) - повертає одного користувача.

// TypeScript wspiera przeciążanie funkcji, co oznacza, że możemy definiować różne wersje tej samej funkcji przyjmujące różne zestawy parametrów.

// Przykład:

function format(value: string): string
function format(value: number): string
function format(value: string | number): string {
    if (typeof value === "string") {
        return `String: ${value}`
    } else {
        return `Number: ${value}`
    }
}
console.log(format("hello")) // String: hello
console.log(format(123)) // Number: 123
// Dzięki przeciążeniu możemy definiować funkcje elastyczne, dostosowane do różnych rodzajów danych, przy jednoczesnym zachowaniu bezpieczeństwa typów.

// Funkcje generyczne
// Generyki pozwalają na tworzenie funkcji, które działają z różnymi typami danych, ale nadal zachowują typowanie.

// Przykład:

function identity<T>(value: T): T {
    return value
}
console.log(identity(42)) // 42
console.log(identity("Hello")) // Hello
// W tym przykładzie funkcja identity przyjmuje parametr dowolnego typu T i zwraca wartość tego samego typu. TypeScript automatycznie wnioskuje typ na podstawie przekazanej wartości.

// Przekazywanie funkcji jako argumentów
// W TypeScript, podobnie jak w JavaScript, funkcje mogą być przekazywane jako argumenty do innych funkcji. Jednak TypeScript pozwala dodatkowo określić typy tych funkcji!
// Callback — це функція, яку ти передаєш усередину іншої функції як параметр.

// Вона виконується не одразу, а тоді, коли її покличе перша функція ("назад / зворотний виклик").
// Przykład kodu:

// Typ callbacka
type Callback = (message: string) => void
// Funkcja, która przyjmuje callback
function greet(name: string, callback: Callback): void {
    const greeting = `Hello, ${name}!`
    callback(greeting)
}
// Implementacja callbacka
const logMessage = (message: string): void => {
    console.log(message)
}
// Wywołanie
greet("John", logMessage) // Hello, John!
// W powyższym przykładzie funkcja greet przyjmuje dwa argumenty: nazwę użytkownika i callback. Callback jest funkcją typu (message: string) => void, co oznacza, że przyjmuje ciąg znaków jako argument i nic nie zwraca.

// Callback to funkcja, którą przekazujesz jako argument do innej funkcji, aby została wywołana w określonym momencie, np. po zakończeniu jakiegoś zadania.

// TIP: Dosłowne tłumaczenie słowa callback to wywołanie zwrotne.
// W kontekście programowania, callback odnosi się do funkcji, którą program/skrypt “wywołuje z powrotem” w określonym momencie, najczęściej po zakończeniu innej operacji.
// W języku polskim jednak rzadko używa się tego tłumaczenia – najczęściej mówi się po prostu “callback”.

// Prosty przykład:
// Wyobraź sobie, że prosisz kogoś o wykonanie zadania (funkcja główna), a na koniec tej pracy ta osoba ma Cię poinformować (callback).

// W kodzie:
// Callback to po prostu sposób na powiedzenie “Kiedy skończysz, wywołaj tę funkcję”.

// Funkcje anonimowe jako callbacki
// W JavaScript i TypeScript callbacki są często używane w operacjach asynchronicznych, takich jak pobieranie danych czy ustawianie opóźnień, co pozwala na łatwiejsze zarządzanie kolejnymi krokami działania programu.

// Przykład 1 – Callback w funkcji synchronizującej
// W tym przykładzie używamy callbacka do przekazania funkcji, która przetwarza dane, gdy są one już dostępne.

// Definiujemy typ callbacka
type ProcessDataCallback = (data: string) => void
// Funkcja, która przyjmuje callback
// function fetchData(callback: ProcessDataCallback): void {
//     const data = "Sample Data"
//     console.log("Dane zostały pobrane.")
//     callback(data) // Wywołujemy callback z danymi
// }
// // Funkcja przetwarzająca dane
// const processData = (data: string): void => {
//     console.log(`Otrzymane dane: ${data}`)
// }
// Wywołanie
// fetchData(processData)
// Wynik w konsoli:

// Dane zostały pobrane.
// Otrzymane dane: Sample Data
// Przykład 2 – Callback do obsługi błędów
// Callbacki mogą być używane również do obsługi błędów. W tym przykładzie mamy funkcję, która przyjmuje dwa callbacki: jeden dla poprawnego wyniku, a drugi dla błędów.

// Typy callbacków
type SuccessCallback = (result: string) => void
// type ErrorCallback = (error: string) => void
// // Funkcja symulująca operację z możliwością błędu
// function performOperation(success: SuccessCallback, error: ErrorCallback): void {
//     const isSuccess = Math.random() > 0.5 // Losowa szansa na sukces
//     if (isSuccess) {
//         success("Operacja zakończona sukcesem!")
//     } else {
//         error("Wystąpił błąd podczas operacji.")
//     }
// }
// Callbacki
const onSuccess = (message: string): void => {
    console.log(`Sukces: ${message}`)
}
const onError = (error: string): void => {
    console.error(`Błąd: ${error}`)
}
// Wywołanie
// performOperation(onSuccess, onError)
// Przykładowy wynik w konsoli (w zależności od losowości):

// W przypadku sukcesu:
// Sukces: Operacja zakończona sukcesem!
// // W przypadku błędu:
// Błąd: Wystąpił błąd podczas operacji.
// Callbacki w operacjach asynchronicznych
// TypeScript, podobnie jak JavaScript, wspiera callbacki w operacjach asynchronicznych, takich jak setTimeout czy pobieranie danych.

// Przykład:

// Typ callbacka
type DataCallback = (data: { id: number; name: string }) => void
// Funkcja symulująca pobieranie danych
function fetchData(callback: DataCallback): void {
    console.log("Rozpoczynam pobieranie danych...")
    setTimeout(() => {
        const data = { id: 1, name: "Sample User" }
        console.log("Dane pobrane!")
        callback(data)
    }, 2000)
}
// Implementacja callbacka
const processData = (data: { id: number; name: string }): void => {
    console.log("Otrzymane dane:", data)
}
// Wywołanie
fetchData(processData)
// W tym przykładzie funkcja fetchData przyjmuje callback, który zostanie wywołany po zakończeniu asynchronicznej operacji setTimeout. Dzięki typowaniu DataCallback mamy pewność, że przekazana funkcja spełni wymagania dotyczące struktury danych.

// Zwracanie funkcji z innej funkcji
// Możemy także zwracać funkcje z innych funkcji, co pozwala na bardziej zaawansowane zastosowania, takie jak fabryki funkcji czy dynamiczne logowanie.

// Przykład:

// Funkcja, która zwraca inną funkcję
function createLogger(prefix: string): (message: string) => void {
    return (message: string) => {
        console.log(`${prefix}: ${message}`)
    }
}
// Tworzenie loggerów
const infoLogger = createLogger("INFO")
const errorLogger = createLogger("ERROR")
// Użycie
infoLogger("To jest informacja.") // INFO: To jest informacja.
errorLogger("To jest błąd.") // ERROR: To jest błąd.
// W powyższym przykładzie funkcja createLogger zwraca inną funkcję, która zapamiętuje wartość prefiksu dzięki mechanizmowi closure.

// Podsumowanie
// TypeScript wprowadza wiele mechanizmów, które czynią pracę z funkcjami bardziej bezpieczną i elastyczną. Typowanie parametrów, wartości zwracanych, przeciążenia oraz generyki to tylko niektóre z możliwości, które usprawniają pisanie bardziej czytelnego kodu. D
// Dzięki typom trudniej o pomyłkę w wartościach, jakie przekazujemy do funkcji 😉

// Przekazywanie funkcji jako argumentów oraz ich zwracanie z innych funkcji to ważny koncept programowania funkcyjnego, które zyskują dodatkową wartość dzięki typowaniu w TypeScript.
