// Struktury danych to sposoby organizowania, przechowywania i zarządzania danymi.

// W JavaScript do najważniejszych struktur należą m.in. tablice (Array), obiekty (Object), a także wprowadzone w nowszych wersjach Map, Set, WeakMap, WeakSet i specjalne Typed Arrays.

// W tej lekcji przyjrzymy się tym strukturom, omówimy ich cechy, porównamy je do odpowiedników w innych językach (Java, C#, Python) oraz przedstawimy przykłady użycia.

// TIP: Jako tester znajomość struktur danych ułatwi Ci zrozumienie logiki aplikacji, tworzenie skutecznych testów oraz szybsze diagnozowanie problemów. Wiedza o tym, jak dane są przechowywane i przetwarzane, pozwoli lepiej komunikować się z zespołem developerskim 😉
// Porównanie z innymi językami
// W innych językach (Java, C#, Python) struktury danych często mają swoje odpowiedniki, ale mogą różnić się szczegółami:

// Tablice w JS są dynamiczne i mogą zawierać różne typy danych. W Javie i C# klasyczne tablice mają stałą długość, choć są dostępne kolekcje takie jak ArrayList czy List.
// Object w JS to podstawowa struktura klucz-wartość. W Pythonie odpowiednikiem jest dict, w Javie HashMap, a w C# Dictionary.
// Map i Set w JS wprowadzają dodatkowe możliwości. Podobne struktury to HashMap i HashSet w Javie, Dictionary i HashSet w C# oraz dict i set w Pythonie.
// WeakMap i WeakSet to bardziej zaawansowane konstrukcje pozwalające na automatyczne zwalnianie pamięci, gdy obiekt-klucz nie jest już używany. To unikalne dla JS podejście, choć inne języki mają swoje mechanizmy słabych referencji.
// TIP: W znacznej większości przypadków spotkasz się ze strukturami takimi jak: tablice, obiekty, set, a rzadziej z map.
// Jeszcze rzadziej spotkasz w testach automatycznych WeakMap oraz WeakSet.

// Array (Tablica)
// Charakterystyka:

// Indeksowane od 0
// Dynamiczne, mogą zawierać różne typy danych
// Szeroki zestaw metod: push, pop, map, filter, reduce, itd.
// Tworzenie i wykorzystanie
const fruits = ['apple', 'banana', 'cherry'];
fruits.push('orange'); // ['apple', 'banana', 'cherry', 'orange']
const lastFruit = fruits.pop(); // zwróci 'orange', fruits = ['apple', 'banana', 'cherry']
// Iteracja po elementach tablicy
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
// Filtrowanie danych
const mixed = [1, '2', false, 3, 'hello'];
const onlyNumbers = mixed.filter(item => typeof item === 'number'); // [1, 3]

// Object (Obiekt)
// Charakterystyka:

// Kolekcja par klucz-wartość
// Klucze zazwyczaj stringi lub symbole
// Podstawa wielu konstrukcji w JS (np. JSON)
// Tworzenie obiektu i dostęp do jego właściwości
const person = { name: 'John', age: 30 };
console.log(person.name); // 'John'
console.log(person['age']); // 30
// Dodawanie i usuwanie kluczy
const car = { brand: 'Toyota' };
car.model = 'Corolla';
delete car.brand;
console.log(car); // { model: 'Corolla' }
// Iteracja po kluczach
const user = { name: 'Alice', role: 'admin', active: true };
for (let key in user) {
	console.log(key, user[key]);
}
// name Alice
// role admin
// active true

// Map
// Charakterystyka:

// Kolekcja klucz-wartość z dowolnym typem kluczy (np. obiekt)
// Metody: set, get, has, delete, łatwa iteracja
// TIP: Pamiętaj, że Map to specjalistyczna struktura klucz-wartość, która pozwala używać dowolnych typów jako kluczy, łatwo iterować po elementach i szybko odczytywać ich liczbę.
// Object jest bardziej uniwersalny, ale w praktyce sprawdza się lepiej jako struktura opisująca cechy obiektu, a nie jako elastyczna mapa klucz-wartość.

// Tworzenie i manipulacja
const map = new Map();
map.set('name', 'Bob');
const ob = { id: 1 };
map.set(ob, 'User object');
console.log(map.get('name')); // 'Bob'
console.log(map.get(ob)); // 'User object'
console.log(map.get({ id: 1 })); // undefined
// TIP: W powyższym przykładzie użycie zmiennej ob, która przechowuje obiekt, jako klucza w Map pokazuje potężną funkcjonalność tej struktury – możliwość stosowania kluczy dowolnego typu, w tym obiektów.
// W przeciwieństwie do zwykłego obiektu (Object), gdzie klucze są zazwyczaj łańcuchami znaków, Map pozwala mapować dane do konkretnych instancji obiektów, co ułatwia zarządzanie danymi związanymi z poszczególnymi elementami aplikacji.

// TIP: W wywołaniu map.get({ id: 1 }), w zapisie { id: 1 } tworzymy nowy obiekt, który ma taką samą strukturę co ob.
// Jednak jest to inna instancja, czyli inna referencja w pamięci.
// W Map klucze obiektowe porównywane są po referencji, a nie po wartościach pól.

// W efekcie nowo utworzony obiekt { id: 1 } nie jest tym samym kluczem, który wcześniej ustawiliśmy w mapie, dlatego rezultat to undefined.

// Sprawdzanie istnienia klucza i usuwanie
const map2 = new Map([
	['key1', 'value1'],
	['key2', 'value2'],
]);
console.log(map2.has('key1')); // true
map2.delete('key2');
console.log(map2.has('key2')); // false
// Iteracja po Map
const map3 = new Map([
	['a', 1],
	['b', 2],
	['c', 3],
]);
for (let [key, value] of map3) {
	console.log(key, value);
}
// a 1
// b 2
// c 3
// Set
// Charakterystyka:

// Zbiór unikalnych wartości
// Metody: add, has, delete
// Tworzenie i dodawanie elementów
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // zignorowane, duplikat
console.log(set.size); // 2
// Sprawdzanie i usuwanie elementów
const set2 = new Set(['apple', 'banana', 'cherry']);
console.log(set2.has('banana')); // true
set2.delete('banana');
console.log(set2.has('banana')); // false
// Iteracja po Set
const set3 = new Set([10, 20, 30]);
for (let value of set3) {
	console.log(value);
}
// 10
// 20
// 30


// WeakMap
// Charakterystyka:

// Podobna do Map, ale klucze mogą być tylko obiektami
// Obiekty-klucze mogą zostać zwolnione z pamięci, jeśli nie są nigdzie indziej używane
// Brak możliwości iteracji po wszystkich elementach
// Przechowywanie danych
const weakMap = new WeakMap();
let obj = { name: 'Test' };
weakMap.set(obj, 'some data');
console.log(weakMap.get(obj)); // 'some data'
// dane mogą zostać zwolnione
obj = null;
console.log(weakMap.get(obj)); // undefined
// Bezpieczeństwo danych
let userObj = { id: 123 };
const userData = new WeakMap();
userData.set(userObj, { lastLogin: Date.now() });
console.log(userData.get(userObj)); // { "lastLogin": 1734298047471 }
// dane mogą zostać zwolnione
userObj = null;
console.log(userData.get(userObj)); // undefined
// WeakSet
// Charakterystyka:

// Podobna do Set, ale przechowuje tylko obiekty
// Elementy mogą zostać usunięte przez Garbage Collector, gdy nie są nigdzie indziej referencjonowane
// Brak iteracji po całym zbiorze
// Tworzenie WeakSet i dodawanie obiektu
const weakSet = new WeakSet();
let obj2 = { data: 123 };
weakSet.add(obj2);
console.log(weakSet.has(obj2)); // true
obj2 = null;
console.log(weakSet.has(obj2)); // false
