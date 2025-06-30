// problem 1 : recursive function 
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// problem 2 : sum of n numbers through recursion
function sumOfN(n) {
    if (n === 0) {
        return 0;
    }
    return n + sumOfN(n - 1);
}
// another approach
let arr = [1, 2, 3, 4, 5]; // example array
function sum (n) {
    if (n === 0) return arr[n];
    return arr[n] + sum(n - 1);
} 

// problem 3 : add odd numbers in an array using recursion
//let arr = [1, 2, 3, 4, 5]; // example array
function sum(n) {
    if (n === 0) return arr[n] % 2 !== 0 ? arr[n] : 0;
    let result = arr[n] % 2 !== 0 ? arr[n] + sum(n - 1) : sum(n - 1);
    return result;
} 
console.log(sum(arr.length - 1));

// problem 4 : is power of 2 using recursion
function isPowerOfTwo(n){
    if (n<1) return false;
    if (n === 1) return true;
    if (n%2 !== 0) return false;
    return isPowerOfTwo(n/2);
}

// problem 5 : to find a nth fibonacci number using recursion
function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
