let clearDatabase = 1

console.log('clearDatabase === 1 is:', clearDatabase === 1)

// in if we check if condition is true
if (clearDatabase === 1) {
  console.log('Database was cleared!')
} else {
  console.log('Database was not cleared!')
}

// Why we should use '===' instead of '=='?
// its more strict - eg.
// 1 === 1 will return true
// 1 === true will return false
// but...
// 1 == 1 will return true
// 1 == true will return... true!
// This one is complicated and in next lesson we will talks about it more.

// FOR NOW LETS ONLY USE '==='

// We can declare multiple cases:
let someNumber = 1

if (someNumber < 0) {
  console.log('someNumber < 0')
} else if (someNumber === 1) {
  console.log('someNumber is 1')
} else {
  console.log('someNumber > 1')
}

// If we have multiple cases... then we can use switch:
let someOtherNumber = 1

switch (someOtherNumber) {
  case 1:
    console.log('someOtherNumber is 1')
    break
  case 2:
  case 3:
    console.log('someOtherNumber is 2 or 3')
    break
  default:
    console.log('someOtherNumber is unknown (neither 1, 2 nor 3)')
}
// ... but in switch we can not use '>' or '<'!

// articles and links:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals


// x > 3 – czy x jest większy od 3,
// x >= 3 – czy x jest większy lub równy 3,
// x < 3 - czy x jest mniejszy niż 3,
// x <= 3 - czy x jest mniejszy lub równy 3,
// x !== 3 - czy x nie jest równy 3,
// x > 0 && x < 3 - czy x jest większy od 0 i mniejszy 3,
// x >= 0 && x <= 3 - czy x jest większy od 0 i mniejszy 3 (włącznie z wartościami granicznymi),
// x < 0 || x > 3 - czy x jest mniejszy od 0 lub większy od 3.
// Operatory && (który oznacza oraz) i || (który oznacza lub) służą do łączenia warunków.

// Praktyczna zasada

// if → gdy masz warunki, zakresy, logikę (>, <, &&, ||).
// switch → gdy jedna zmienna może przyjąć wiele konkretnych wartości ("admin", "user", "guest" itd.).
// W nowoczesnym JS często jeszcze lepiej:
// Zamiast długiego switch można użyć obiektu:

const rola = "user";
const roleActions = {
  admin: "Pełny dostęp",
  user: "Zwykły dostęp",
  guest: "Ograniczony dostęp"
};

console.log(roleActions["user"]);

switch (rola) {
  case "admin":
    console.log("Pełny dostęp");
    break;
  case "user":
    console.log("Zwykły dostęp");
    break;
  case "guest":
    console.log("Ograniczony dostęp");
    break;
}