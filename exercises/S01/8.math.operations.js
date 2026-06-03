// npm run es1e8

//Dodawanie (+):
const suma1 = 5 + 3;
console.log(suma1); // wynik na konsoli: 8

const suma2 = 0 + 10;
console.log(suma2); // wynik na konsoli: 10

const suma3 = -5 + 7;
console.log(suma3); // wynik na konsoli: 2

//Odejmowanie (-):
const roznica1 = 5 - 3;
console.log(roznica1); // wynik na konsoli: 2

const roznica2 = 10 - 5;
console.log(roznica2); // wynik na konsoli: 5

const roznica3 = 0 - 4;
console.log(roznica3); // wynik na konsoli: -4

//Mnożenie (*):
const produkt1 = 5 * 3;
console.log(produkt1); // wynik na konsoli: 15

const produkt2 = 7 * 0;
console.log(produkt2); // wynik na konsoli: 0

const produkt3 = -1 * 8;
console.log(produkt3); // wynik na konsoli: -8

//Dzielenie (/):
const iloraz1 = 10 / 2;
console.log(iloraz1); // wynik na konsoli: 5

const iloraz2 = 45 / 5;
console.log(iloraz2); // wynik na konsoli: 9

const iloraz3 = 1 / 4;
console.log(iloraz3); // wynik na konsoli: 0.25

//Reszta z dzielenia (modulo) (%):
const reszta1 = 10 % 3;
console.log(reszta1); // wynik na konsoli: 1

const reszta2 = 15 % 4;
console.log(reszta2); // wynik na konsoli: 3

const reszta3 = 18 % 7;
console.log(reszta3); // wynik na konsoli: 4

//Inkrementacja i dekrementacja:

// Inkrementacja, czyli zwiększenie wartości o 1 (++):

let x1 = 5; x1++;
console.log(x1); // wynik na konsoli: 6

let x2 = -1; x2++;
console.log(x2); // wynik na konsoli: 0

let x3 = 0; x3++;
console.log(x3); // wynik na konsoli: 1

//Dekrementacja, czyli zmniejszenie wartości o 1 (-- – dwa minusy):

let y1 = 5; y1--;
console.log(y1); // wynik na konsoli: 4

let y2 = 3; y2--;
console.log(y2); // wynik na konsoli: 2

let y3 = 1; y3--;
console.log(y3); // wynik na konsoli: 0

//3. Operacje matematyczne w obiekcie Math:

// Potęgowanie – Math.pow(x, y):

console.log(Math.pow(2, 3)); // wynik na konsoli: 8
console.log(Math.pow(3, 2)); // wynik na konsoli: 9
console.log(Math.pow(5, 0)); // wynik na konsoli: 1

//Pierwiastek – Math.sqrt(x): korin kwadratnyj

console.log(Math.sqrt(16)); // wynik na konsoli: 4
console.log(Math.sqrt(25)); // wynik na konsoli: 5
console.log(Math.sqrt(49)); // wynik na konsoli: 7

//Wartość bezwzględna – Math.abs(x):

console.log(Math.abs(-5)); // wynik na konsoli: 5
console.log(Math.abs(-12)); // wynik na konsoli: 12
console.log(Math.abs(2)); // wynik na konsoli: 2

//Zaokrąglenie wartości dziesiętnej do góry do pełnej wartości – Math.ceil(x):

console.log(Math.ceil(4.1)); // wynik na konsoli: 5
console.log(Math.ceil(6.3)); // wynik na konsoli: 7
console.log(Math.ceil(-3.2)); // wynik na konsoli: -3

//Zaokrąglenie wartości dziesiętnej w dół do pełnej wartości – Math.floor(x):
console.log(Math.floor(4.9)); // wynik na konsoli: 4
console.log(Math.floor(6.7)); // wynik na konsoli: 6
console.log(Math.floor(-3.7)); // wynik na konsoli: -4

//Zaokrąglenie wartości dziesiętnej do pełnej wartości – Math.round(x):

console.log(Math.round(4.5)); // wynik na konsoli: 5
console.log(Math.round(6.2)); // wynik na konsoli: 6
console.log(Math.round(-3.5)); // wynik na konsoli: -3

//Wartość najmniejsza z podanych liczb – Math.min(...):

console.log(Math.min(5, 6, 2, 3, 7)); // wynik na konsoli: 2
console.log(Math.min(12, 3, 6)); // wynik na konsoli: 3
console.log(Math.min(-1, -3, 0)); // wynik na konsoli: -3

//Wartość największa z podanych liczb – Math.max(...):

console.log(Math.max(5, 6, 2, 3, 7)); // wynik na konsoli: 7
console.log(Math.max(1, 3, 2)); // wynik na konsoli: 3
console.log(Math.max(-5, -2, -8)); // wynik na konsoli: -2

//Losowa wartość z przedziału 0 i 1 – Math.random():

console.log(Math.random()); // wynik na konsoli: losowa liczba między 0 a 1
console.log(Math.random()); // wynik na konsoli: losowa liczba między 0 a 1
console.log(Math.random()); // wynik na konsoli: losowa liczba między 0 a 1

//Trygonometria:
//Math.sin(x):

console.log(Math.sin(Math.PI / 2)); // wynik na konsoli: 1
console.log(Math.sin(Math.PI)); // wynik na konsoli: 0
console.log(Math.sin(3 * Math.PI / 2)); // wynik na konsoli: -1

//Math.cos(x):
console.log(Math.cos(Math.PI)); // wynik na konsoli: -1
console.log(Math.cos(2 * Math.PI)); // wynik na konsoli: 1
console.log(Math.cos(Math.PI / 2)); // wynik na konsoli: 0

//Math.tan(x):

console.log(Math.tan(Math.PI / 4)); // wynik na konsoli: 1
console.log(Math.tan(0)); // wynik na konsoli: 0
console.log(Math.tan(Math.PI)); // wynik na konsoli: 0

//Logarytmy:
//Math.log(x):

console.log(Math.log(Math.E)); // wynik na konsoli: 1
console.log(Math.log(1)); // wynik na konsoli: 0
console.log(Math.log(10)); // wynik na konsoli: 2.302585092994046

//Math.log10(x):

console.log(Math.log10(100)); // wynik na konsoli: 2
console.log(Math.log10(1000)); // wynik na konsoli: 3
console.log(Math.log10(10)); // wynik na konsoli: 1

//Konwersja między stopniami a radianami:
//Stopnie na radiany:

const radians1 = 180 * (Math.PI / 180);
console.log(radians1); // wynik na konsoli: π
const radians2 = 90 * (Math.PI / 180);
console.log(radians2); // wynik na konsoli: π/2
const radians3 = 360 * (Math.PI / 180);
console.log(radians3); // wynik na konsoli: 2π

//Radiany na stopnie:

const degrees1 = Math.PI * (180 / Math.PI);
console.log(degrees1); // wynik na konsoli: 180
const degrees2 = (Math.PI / 2) * (180 / Math.PI);
console.log(degrees2); // wynik na konsoli: 90
const degrees3 = (2 * Math.PI) * (180 / Math.PI);
console.log(degrees3); // wynik na konsoli: 360