//Konstruktor to specjalna metoda klasy, która wykonuje się automatycznie w momencie tworzenia obiektu.
// Używamy jej do inicjalizacji danych, które są częścią każdej instancji klasy (np. imię użytkownika, lista zadań, konfiguracja).

class Contact {
	constructor(name, phone) {
		this.name = name;
		this.phone = phone;
	}
}
const jan = new Contact('Jan Kowalski', '123456789');
console.log(jan.name);

// W powyższym przykładzie:

// this.name i this.phone to zmienne (właściwości) przypisane do nowo utworzonego obiektu.
// Każdy obiekt utworzony z klasy Contact będzie miał własne dane, niezależne od innych kontaktów.
// Inicjalizacja zmiennych typu prostego
// To najprostszy i najczęściej używany sposób inicjalizacji:

class Book {
	constructor(title, author) {
		this.title = title; // wartość typu string
		this.author = author; // wartość typu string
	}
}
const book1 = new Book('Wiedźmin', 'Andrzej Sapkowski');
console.log(book1.title);

// Wyjaśnienie:

// this.title i this.author są tworzone podczas tworzenia obiektu.
// Dzięki nim każdy obiekt klasy Book przechowuje własne dane.

// Inicjalizacja pustej tablicy
// Często chcemy, aby każda instancja miała własną listę (np. zadań, kontaktów), która będzie dynamicznie uzupełniana:
class Group {
	constructor(groupName) {
		this.groupName = groupName;
		this.contacts = []; // każdy obiekt Group ma własną tablicę
	}
}

const friends = new Group('Przyjaciele');
console.log(friends.contacts); // []

// Dlaczego to ważne?

// Jeśli nie zainicjalizujesz tablicy, możesz dostać błąd przy this.contacts.push(...), bo contacts nie istnieje!

// Typowe błędy: właściwość (property / pole) nie istnieje
// Częsty problem:
class BrokenGroup {
	constructor(groupName) {
		this.groupName = groupName; // this.contacts NIE została zdefiniowana
	}

	addContact(contact) {
		this.contacts.push(contact); // ❌ Błąd! contacts is undefined
	}
}

const friends = new BrokenGroup('Przyjaciele');
console.log(friends.contacts); // undefined
friends.addContact('Jan Kowalski'); // ❌ Błąd! contacts is undefined

// Jak naprawić ten błąd?

// Przykładowe rozwiązanie – inicjalizacja listy wk onstruktorze;
class FixedGroup {
	constructor(groupName) {
		this.groupName = groupName;
		this.contacts = []; // ✅ Inicjalizacja
	}
	addContact(contact) {
		this.contacts.push(contact);
	}
}

const family = new FixedGroup('Rodzina');
console.log(family.contacts); // []
family.addContact('Anna Kowalska');
console.log(family.contacts); // ["Anna Kowalska"]

// Inicjalizacja z domyślną strukturą obiektu
// Czasem warto od razu stworzyć “szkielet” danych:
class Settings {
	constructor() {
		this.options = {
			theme: 'light',
			notifications: true,
		};
	}
}

const userSettings = new Settings();
console.log(userSettings.options.theme); // "light"

// Przykład użycia:
const userSettings2 = new Settings();
console.log(userSettings2.options.theme); // "light"
console.log(userSettings2.options.notifications); // true
console.log(userSettings2.options.language); // undefined - bo nie zdefiniowane

// Przykład użycia z modyfikacją
userSettings2.options.theme = 'dark';
console.log(userSettings2.options.theme); // "dark"

// Zalety tego podejścia:

// Możemy później łatwo modyfikować zawartość options.
// Każdy użytkownik ma swoją kopię ustawień – zmiana w jednym obiekcie nie wpływa na inne.

// Właściwości zależne od siebie
// Możesz wyliczyć jedną właściwość na podstawie innych:
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.area = width * height; // wyliczamy na starcie
	}
}

const rect = new Rectangle(4, 5);
console.log(rect.area); // 20
console.log(rect.width); // 4
console.log(rect.height); // 5

// Możemy zmienić pole, ale nie możemy zmienić szerokości i wysokości
rect.area = 30;
console.log(rect.area); // 30
console.log(rect.width); // 4
console.log(rect.height); // 5

// A co jeśli chcemy zmienić width?
rect.width = 10;
console.log(rect.area); // 30
console.log(rect.width); // 10
console.log(rect.height); // 5
// Teraz musimy też zmienić height, żeby pole się zgadzało!
// To podejście jest przydatne, gdy chcemy mieć dostęp do obliczonej wartości bez potrzeby tworzenia osobnej metody.
// Inicjalizacja z wartością domyślną
// W JavaScript możesz ustawić domyślne wartości parametrów, gdy nie zostaną przekazane:
class User {
	constructor(name = 'Nieznany') {
		this.name = name;
	}
}

const unknownUser = new User();
console.log(unknownUser.name); // "Nieznany"
// Inicjalizacja z opcjonalnym obiektem
// Można też przekazać opcjonalny obiekt z konfiguracją:
class Config {
	constructor(options = {}) {
		this.apiUrl = options.apiUrl || 'https://playwright.info/';
		this.language = options.language || 'pl';
		this.debug = options.debug ?? false;
	}
}

const config1 = new Config({ apiUrl: 'https://playwright.dev/' });
console.log(config1.apiUrl); // "https://playwright.dev/"
console.log(config1.language); // "pl"
console.log(config1.debug); // false

const config2 = new Config({ language: 'en', debug: true });
console.log(config2.apiUrl); // "https://playwright.info/"
console.log(config2.debug); // true
console.log(config2.language); // "en"
// Uwaga: Operator ?? (nullish coalescing) ustawia wartość tylko wtedy, gdy parametr jest null lub undefined (a nie np. false lub 0).

// Bonus: Klasy i dziedziczenie
// Dziedziczenie w JavaScript pozwala na tworzenie nowych klas na podstawie istniejących klas (klas bazowych). Nowa klasa, zwana klasą pochodną, może dziedziczyć właściwości i metody klasy bazowej, dzięki czemu może korzystać z istniejącego kodu bez potrzeby jego ponownego pisania.

// W JavaScript dziedziczenie jest realizowane za pomocą słowa kluczowego extends. Dzięki temu mechanizmowi klasa pochodna może:

// Korzystać z metod i właściwości klasy bazowej.
// Nadpisywać metody klasy bazowej, aby dostosować ich działanie.

// Dziedziczenie w prostych słowach i na przykładach
// Dziedziczenie to pojęcie w programowaniu, które oznacza, że jedna “rzecz” (klasa) może przejąć cechy i umiejętności innej “rzeczy” (klasy).

// Dzięki temu nie musisz pisać tego samego kodu wiele razy.
// Nowa klasa “dziedziczy” wszystko, co miała klasa, po której jest zrobiona, i może dodawać coś od siebie lub zmieniać to, co już jest.

// Przykłady z życia:

// Dziedziczenie w rodzinie
// Wyobraź sobie, że rodzice mają pewne cechy, np. kolor oczu, a dzieci dziedziczą te cechy od rodziców. Dzieci mogą mieć taki sam kolor oczu jak rodzice, ale jednocześnie mogą mieć swoje unikalne cechy, takie jak inny kolor włosów.
// Rodzice: Kolor oczu – brązowe.
// Dziecko: Dziedziczy brązowy kolor oczu, ale może mieć blond włosy, co jest jego własną cechą.
// Dziedziczenie u zwierząt
// Pomyśl o psie i zwierzęciu. Każde zwierzę może oddychać i jeść, a pies to też zwierzę, więc dziedziczy te umiejętności (oddychanie i jedzenie). Ale pies ma dodatkową umiejętność, np. szczekanie, której inne zwierzęta mogą nie mieć.
// Zwierzę: Oddycha, je.
// Pies: Dziedziczy oddychanie i jedzenie, ale może też szczekać.
// Przykład dziedziczenia w JavaScript
// Przykład dziedziczenia może wyglądać w następujący sposób:

// Klasa bazowa
class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} makes a sound.`);
	}
}

// Klasa pochodna dziedziczy po klasie bazowej Animal
class Dog extends Animal {
	// Nadpisujemy metodę speak() dla klasy Dog
	speak() {
		console.log(`${this.name} barks.`);
	}
}

const dog = new Dog('Buddy');
dog.speak(); // "Buddy barks."

// Omówienie kodu krok po kroku:

// Klasę bazową (nadrzędną) definiujemy za pomocą słowa class

class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} makes a noise.`);
	}
}
// Konstruktor Animal: Konstruktor inicjalizuje właściwość name, która będzie dostępna we wszystkich instancjach klasy Animal.
// Metoda speak(): Metoda speak() wyświetla wiadomość wskazującą, że zwierzę wydaje dźwięk.
// Klasa pochodna dziedziczy po klasie bazowej za pomocą słowa kluczowego extends
class Dog extends Animal {
	speak() {
		console.log(`${this.name} barks.`);
	}
}
const dog = new Dog('Buddy');
dog.speak(); // "Buddy barks."
// Konstrukcja class Dog extends Animal: Klasa Dog dziedziczy właściwości i metody klasy Animal.
// Nadpisywanie metody speak(): Klasa Dog nadpisuje metodę speak() z klasy Animal, aby wypisać, że pies szczeka (zamiast ogólnego “wydaje dźwięk”).

// Co to jest super() w dziedziczeniu?
// Klasa pochodna może także wywołać metody klasy bazowej za pomocą słowa kluczowegosuper.

// Przykładowo:

// Klasa bazowa
class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} makes a sound.`);
	}
}
// Klasa pochodna dziedziczy po klasie bazowej Animal
class Cat extends Animal {
	// Nadpisujemy metodę speak(), ale wywołujemy też metodę z klasy bazowej
	speak() {
		super.speak(); // Wywołuje metodę speak() z klasy bazowej
		console.log(`${this.name} meows.`);
	}
}
const cat = new Cat('Whiskers');
cat.speak();
// "Whiskers makes a sound."
// "Whiskers meows."
// Omówienie kodu krok po kroku:

// Użycie super() w klasie pochodnej
class Cat extends Animal {
	constructor(name, color) {
		super(name); // Wywołanie konstruktora klasy nadrzędnej (Animal)
		this.color = color;
	}
	speak() {
		console.log(`${this.name} meows.`);
	}
}
const cat = new Cat('Whiskers', 'black');
cat.speak(); // "Whiskers meows."
// super(): Wywołuje konstruktor klasy bazowej, umożliwiając przekazanie parametrów (w tym przypadku name) do klasy Animal.
// Dodatkowa właściwość color: Klasa Cat dodaje nową właściwość color. Dzięki temu to co oferuje klasa bazowa Animal jest rozszerzone o dodatkowe elementy – czyli klasa Cat rozszerza Animal o nowe pole (atrybut/właściwość).
// Dziedziczenie właściwości
// Dziedziczenie pozwala również na przenoszenie właściwości z klasy bazowej do klasy pochodnej. Klasa pochodna może rozbudować konstruktor klasy bazowej o dodatkowe właściwości.

// Przykładowo:
// Klasa bazowa
class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} makes a sound.`);
	}
}

// Klasa pochodna, która dodaje nowe właściwości
class Bird extends Animal {
	constructor(name, color) {
		// Wywołuje konstruktor klasy bazowej
		super(name);
		this.color = color; // Dodajemy nową właściwość
	}

	// Metoda specyficzna dla klasy Bird
	describe() {
		console.log(`${this.name} is a ${this.color} bird.`);
	}
}

const bird = new Bird('Tweety', 'yellow');
bird.speak(); // "Tweety makes a sound."
bird.describe(); // "Tweety is a yellow bird."
// Kod przedstawia dziedziczenie w JavaScript, gdzie klasa pochodna Bird dziedziczy po klasie bazowej Animal i dodaje dodatkowe właściwości oraz metody.

// Klasa bazowa Animal
class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} makes a sound.`);
	}
}
// Konstruktor klasy Animal: Inicjalizuje właściwość name, która jest przypisywana do instancji klasy.
// Metoda speak(): Wyświetla komunikat, który mówi, że zwierzę o danym imieniu wydaje dźwięk.
// Klasa pochodna Bird, która rozszerza klasę Animal
class Bird extends Animal {
	constructor(name, color) {
		// Wywołanie konstruktora klasy bazowej z parametrem name
		super(name);
		this.color = color; // Dodanie nowej właściwości 'color'
	}
	describe() {
		console.log(`${this.name} is a ${this.color} bird.`);
	}
}
// Konstruktor Bird:
// Wywołuje konstruktor klasy bazowej Animal przy pomocy super(name), a następnie dodaje nową właściwość color, która jest specyficzna dla klasy Bird.
// Metoda describe():
// Specyficzna dla klasy Bird, wypisuje informacje o kolorze ptaka oraz jego imieniu.
// Tworzenie instancji klasy Bird oraz wywoływanie metod
const bird = new Bird('Tweety', 'yellow');
bird.speak(); // "Tweety makes a sound."
bird.describe(); // "Tweety is a yellow bird."
// Instancja bird:
// Tworzymy obiekt Bird o imieniu 'Tweety' i kolorze 'yellow'. Konstruktor klasy bazowej przypisuje name, a konstruktor klasy Bird dodaje właściwość color.
// Wywołanie metody speak():
// Używa metody odziedziczonej po klasie bazowej Animal, która wypisuje komunikat, że ptak wydaje dźwięk.
// Wywołanie metody describe():
// Wypisuje szczegółowy opis ptaka, w tym jego imię oraz kolor, korzystając z dodatkowej metody dostępnej w klasie Bird.

// Bonus: Klasy abstrakcyjne

// Klasy abstrakcyjne w JavaScript to taki rodzaj klasy, której nie możesz bezpośrednio użyć do tworzenia obiektów. Zamiast tego służy ona jako baza (szablon) dla innych klas, które ją dziedziczą.

// Klasa abstrakcyjna często zawiera ogólne metody (funkcje) lub właściwości, które będą wykorzystywane w klasach pochodnych, ale nie musi mieć pełnej implementacji. Często ma także metody, które muszą zostać zdefiniowane przez klasy dziedziczące.

// W skrócie: klasa abstrakcyjna to plan, który mówi, jakie funkcje lub właściwości muszą mieć inne klasy, ale nie daje pełnych odpowiedzi, jak te funkcje mają działać.

// Klasa abstrakcyjna w prostych słowach i na przykładach
// Klasa abstrakcyjna to taki rodzaj klasy, która nie jest kompletną “rzeczą” sama w sobie. Jest jak plan lub wzór, z którego inne klasy mogą korzystać. Nie możesz stworzyć czegoś konkretnego bezpośrednio z klasy abstrakcyjnej, ale inne klasy mogą z niej dziedziczyć i dodawać brakujące szczegóły.

// Klasa abstrakcyjna zawiera metody (funkcje), które muszą być zdefiniowane w klasach dziedziczących, ale nie podaje dokładnie, jak mają działać. Zmusza inne klasy do “dokończenia” tych metod.

// Przykłady z życia:

// Plany budowy domu:
// Wyobraź sobie, że masz koncept budowy domu. Ogólne wytyczne i szkice.
// To jest jak klasa abstrakcyjna – mówi np. że każdy dom musi mieć fundamenty, ściany i dach, ale nie określa dokładnie, jak te elementy mają wyglądać.

// Gdy zaczynasz projektować konkretne domy, każdy z nich bazuje na tym ogólnym planie.
// Ale dodajesz szczegóły, np. kolor dachu, liczba okien, właściwości (grubość) ścian.
// Po tak sprecyzowanym szkicu i ogólnych wytycznych powstaje plan domu, który można następnie wykorzystać na budowie.

// Te ogólne wytyczne/szkice to właśnie klasa abstrakcyjna, a konkretne plany domów (już gotowe do wykorzystania na budowie) to klasy dziedziczące.

// Klasa abstrakcyjna jest bardzo podobna do zwykłej klasy.
// Ale nie jest w pełni gotowa do użycia. To tak, jakbyś miał ogólny plan, który mówi, jakie rzeczy powinny być w środku, ale nie podaje wszystkich szczegółów.

// Klasa abstrakcyjna jest jak szkic, który muszą dokończyć inne klasy.

// Główna różnica między klasą a klasą abstrakcyjną jest taka, że klasy abstrakcyjnej nie można użyć samodzielnie do tworzenia obiektów. Inne klasy muszą ją dziedziczyć i dodać brakujące szczegóły, zanim staną się “kompletne” i będą mogły być użyte.

// Krótko mówiąc, klasa abstrakcyjna to bardzo zbliżona koncepcja do klasy, ale jej celem jest dostarczenie szkieletu, który inne klasy muszą rozbudować.

// Jak zasymulować klasy abstrakcyjne w JavaScript?
// W czystym JavaScript nie ma bezpośredniego wsparcia dla klas abstrakcyjnych, jak to ma miejsce w językach takich jak TypeScript czy Java. JavaScript nie ma wbudowanego słowa kluczowego abstract, ani mechanizmu do bezpośredniego tworzenia klas abstrakcyjnych.

// Jednak koncepcję klas abstrakcyjnych można w JavaScript symulować przy pomocy kilku technik.

// Przykład:

class Animal {
	constructor(name) {
		if (new.target === Animal) {
			throw new Error('Cannot instantiate an abstract class');
		}
		this.name = name;
	}
	speak() {
		throw new Error("Method 'speak' must be implemented");
	}
}
class Dog extends Animal {
	speak() {
		console.log(`${this.name} says: Woof!`);
	}
}
const dog = new Dog('Buddy');
dog.speak(); // "Buddy says: Woof!"
// Tutaj Animal to klasa abstrakcyjna, a Dog to klasa dziedzicząca, która implementuje metodę speak.

// Analiza kodu krok po kroku
// Przeanalizujmy dokładnie implementację i wykorzystanie takiej klasy:

// Klasa Animal
class Animal {
	constructor(name) {
		// Sprawdzamy, czy obiekt jest tworzony bezpośrednio z klasy Animal
		if (new.target === Animal) {
			// Jeśli tak, rzucamy błąd, aby zapobiec tworzeniu instancji klasy Animal
			throw new Error('Cannot instantiate an abstract class');
		}
		// Przypisujemy wartość do pola name
		this.name = name;
	}
	// Metoda abstrakcyjna, która rzuca błąd, jeśli nie zostanie nadpisana w klasach pochodnych
	speak() {
		throw new Error("Method 'speak' must be implemented");
	}
}
// Konstruktor Animal:
// Konstruktor ma jeden parametr name, który jest przypisywany do właściwości this.name w obiekcie.

// new.target === Animal: Jest to mechanizm dostępny w JavaScript, który pozwala sprawdzić, czy klasa Animal jest używana bezpośrednio do stworzenia obiektu. Jeśli tak (czyli gdy ktoś próbuje utworzyć instancję klasy Animal), rzuca błąd. To symuluje zachowanie klasy abstrakcyjnej, której nie można instancjonować.
// Jeśli ktoś spróbuje zrobić const animal = new Animal('name');, zostanie wyrzucony błąd “Cannot instantiate an abstract class”.
// Metoda speak():
// Ta metoda ma zostać nadpisana przez klasy dziedziczące (Dog w tym przypadku).

// W klasie Animal jest tylko zdefiniowana, ale nie ma implementacji. Próba jej wywołania w klasie Animal rzuci błąd: “Method ‘speak’ must be implemented”.

// Celem tego jest zmuszenie klas dziedziczących do zapewnienia swojej własnej wersji tej metody.
// Klasa Dog (klasa pochodna)
class Dog extends Animal {
	// Nadpisujemy metodę speak, aby mieć specyficzną implementację dla klasy Dog
	speak() {
		console.log(`${this.name} says: Woof!`);
	}
}
// Klasa Dog dziedziczy z klasy Animal za pomocą słowa kluczowego extends. Dzięki temu Dog automatycznie posiada wszystkie właściwości i metody Animal (takie jak name i speak), ale może je nadpisywać.
// Metoda speak():
// Klasa Dog nadpisuje metodę speak(), aby zdefiniować, co pies powinien “mówić”. W tym przypadku metoda wypisuje komunikat, który mówi, że dany pies (z imieniem this.name) szczeka: ${this.name} says: Woof!.
// Tworzenie instancji klasy Dog i wywołanie metody speak()
const dog = new Dog('Buddy');
dog.speak(); // "Buddy says: Woof!"
const dog = new Dog('Buddy');
// Tworzymy instancję klasy Dog, przekazując jako argument 'Buddy'. Konstruktor klasy Animal (ponieważ Dog dziedziczy po Animal) przypisuje imię Buddy do właściwości this.name.
// dog.speak();:
// Wywołujemy metodę speak() dla obiektu dog. Ponieważ klasa Dog nadpisała tę metodę, zostanie wypisany komunikat: “Buddy says: Woof!”.
