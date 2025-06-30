// Problem 1 : print stars in square pattern
function printSquareStars(n){
    for (let i=0; i<n; i++){
        let row = '';
        for (let j=0; j<n;j++){
            row += '*';
        }
    }
    console.log(row);
}

// Problem 2 : print stars in right angled triangle pattern
function printRightAngledTriangleStars(n){
    for (let i=0; i <n; i++){
        let row = '';
        for (let j=0; j<=i; j++){
            row += '*';
        }
        console.log(row);
    }
}

// Problem 3 : print stars in inverted right angled triangle pattern
function printInvertedRightAngledTriangleStars(n){
    for (let i=n; i>0; i--){
        let row = '';
        for (let j=0; j<i; j++){
            row += '*';
        }
        console.log(row);
    }
}   

// Problem 4 : print stars in pyramid pattern
function printPyramidStars(n){
    for (let i=0; i<n; i++){
        let row = '';
        for (let j=0; j<n-i-1; j++){
            row += ' ';
        }
        for (let k=0; k<2*i+1; k++){
            row += '*';
        }
        console.log(row);
    }
}
 // better solution for pyramid pattern
// Problem 4 : print stars in pyramid pattern (optimized)
// This solution uses string repeat method to create spaces and stars
// space and time complexity is O(n^2)
 function printPyramidStars(n){
    for (let i=0; i<n; i++){
        const spaces = " ".repeat(n-(i+1));
        const stars = "*".repeat((2 * i) + 1);
        console.log(spaces, stars);
    }
}

// problem 5: inverted pyramid pattern
 function printInvertedPyramidStars(n){
    for (let i=n-1; i >= 0; i--){
        const spaces = " ".repeat(n-(i+1));
        const stars = "*".repeat((2 * i) + 1);
        console.log(spaces, stars);
    }
 }

 // problem 6 : function returning a count of number of digits in a number

function countDigits(num) {
    if (num < 0) {
        num = -num; // Handle negative numbers
    }
    if (num === 0) {
        return 1; // Special case for zero
    }
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10); // Remove the last digit
        count++;
    }
    return count;
}

// problem 7: function to check palindrome number
// space and time complexity is O(n)
function isPalindrome(num) {
    if (num < 0) {
        return false; // Negative numbers are not palindromes
    }
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// other solution for palindrome number
function isPalindrome(num) {
    if (num < 0) {
        return false; // Negative numbers are not palindromes
    }
    let original = num;
    let reversed = 0;
    while (num > 0) {
        const digit = num % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Build the reversed number
        num = Math.floor(num / 10); // Remove the last digit
    }
    return original === reversed;
}
