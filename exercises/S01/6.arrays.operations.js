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