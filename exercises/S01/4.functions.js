// Your task:
// 1. Create new function with three string parameters where one is optional with default value '!'
// 2. Inside this function concat (join) all parameters values with space between values
// 3. Function must return the result of joining string
// 4. Print the result using console.log
// 5. Create readable names for variables and function

// to test your solution in terminal You can run following command:
// npm run es1e4


//// TODO:
// here place your solution:
function joinStrings1(string1, string2, string3 = '!0') {
    return string1 + ' ' + string2 + ' ' + string3
};

const result1 = joinStrings1('Hello', 'World');
console.log(result1);

// or

function joinStrings2(string4, string5, string6 = '!') {
    return `${string4} ${string5} ${string6}`
};

const result2 = joinStrings2('Hello', 'World');
console.log(result2);





//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Expected output:
// After passing values 'Hello' and 'World' as a result on console You should display:
// Hello World !