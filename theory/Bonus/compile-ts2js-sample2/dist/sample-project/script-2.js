// Helper function to calculate the average of an array of numbers
export function calculateAverage(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
    return average;
}
// Helper function to calculate the factorial of a number
export function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// Helper function to check if a number is prime
export function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// Helper function to calculate the nth Fibonacci number
export function fibonacci(n) {
    if (n <= 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    let prev = 0;
    let current = 1;
    for (let i = 2; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }
    return current;
}
