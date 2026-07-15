// Local Scope Example
function anotherFunction() {
    const localVariable = 5;
    console.log(localVariable);
}

anotherFunction(); // Displays 5

// You can not access localVariable:
// console.log(localVariable); // ❌ uncomment to see error: ReferenceError: localVariable is not defined



// Zakres Lokalny (Local Scope)
// Jest to obszar, w którym zmienne są dostępne tylko w określonym fragmencie kodu, np. wewnątrz funkcji.
// Zmienna zdefiniowana lokalnie jest dostępna tylko w obrębie tej funkcji.