// Your task:
// 1. Create new array with 3 elements: 'abc', 'def' and 'gh'
// 2. Add new element to array: 'xyz'
// 3. Print on console whole array
// 4. Concat (join) your array with new one: [1, 2, 3]
// 5. Print on console new array
// 6. Replace third ([2]) item in array with new value '555'
// 7. Print on console new array

// to test your solution in terminal You can run following command:
// npm run es1e6

//// TODO:
// here place your solution:

//1.
const arrayOfElements = ['abc', 'def', 'gh'];
//2.
arrayOfElements.push('xyz');
//3.
console.log(JSON.stringify(arrayOfElements).replace(/,/g, ', '));
//4. 
const newArrays = [1, 2, 3];
const newConcatArray = arrayOfElements.concat(newArrays);
//5.
console.log(JSON.stringify(newConcatArray).replace(/,/g, ', '));
//6.
newConcatArray[2] = '555';
//7.
console.log(JSON.stringify(newConcatArray).replace(/,/g, ', '));

//JSON.stringify(newConcatArray).replace(/,/g, ', ')) - formatowanie na JSON


//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Expected output:
// On console You should get:
// ['abc', 'def', 'gh', 'xyz']
// ['abc', 'def', 'gh', 'xyz', 1, 2, 3]
// ['abc', 'def', '555', 'xyz', 1, 2, 3]


// BONUS

//Dodawanie elementów do tablicy:
//Możesz dodawać nowe elementy na koniec tablicy za pomocą metody push().
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

//Usuwanie elementów z tablicy:
//Możesz usuwać elementy z tablicy za pomocą metod pop() (usuwanie z końca) lub shift() (usuwanie z początku).
let numbers = [1, 2, 3, 4, 5];
numbers.pop(); // Usuwa ostatni element
numbers.shift(); // Usuwa pierwszy element
console.log(numbers); // [2, 3, 4]

//Dostęp do elementów:
//Możesz uzyskać dostęp do elementów tablicy za pomocą indeksów.
let colors = ['red', 'green', 'blue'];
let firstColor = colors[0]; // Pierwszy element
let secondColor = colors[1]; // Drugi element
console.log(firstColor, secondColor); // 'red', 'green'

//Iteracja po tablicy:
//Możesz wykorzystać pętlę for, for...of lub metodę forEach() do iteracji po elementach tablicy.
let animals = ['dog', 'cat', 'rabbit'];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
for (let animal of animals) {
  console.log(animal);
}
animals.forEach(function(animal) {
  console.log(animal);
});

//Mapowanie i transformacja:
//Metoda map() pozwala na tworzenie nowej tablicy na podstawie istniejącej, przekształcając każdy element.
let threeNumbers = [1, 2, 3];
let doubledNumbers = threeNumbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6]

//Filtrowanie:
//Metoda filter() pozwala na tworzenie nowej tablicy zawierającej tylko elementy spełniające określony warunek.
let scores = [75, 90, 60, 85, 95];
let passingScores = scores.filter(function(score) {
  return score >= 70;
});
console.log(passingScores); // [75, 90, 85, 95]