// problem 1 : return total balanced substrings in a balanced string each substring has equal number of 'L' and 'R'
// time complexity: O(n) and space complexity: O(1)
// Example: "RLRRLLRLRL" -> 4 balanced substrings: "RL", "RRLL", "RL", "RL"
// Example: "RLRRRLLRLL" -> 2 balanced substrings: "RLRRLL", "RL", "RL"
var balancedStringSplit = function(s) {
    let substringCount = 0; let count = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i] === 'R'){
            ++count;
        } else {
            --count;
        }
        if (count === 0){
            substringCount++;
        }
    }
    return substringCount;
};

// problem 2 : reverse every k characters for every 2k characters in a string. if there are less than k characters
//  left, reverse all of them. if there are less than 2k but more than k characters, reverse the first k 
// characters and leave the rest as is. 
// time complexity: O(n) and space complexity: O(n)
// Example: "abcdefg", k = 2 -> "bacdfeg"
// Example: "abcdefg", k = 3 -> "cbadefg"
// time complexity: O(n) because we are jumping 4 characters in each iteration and reversing k characters which 
// takes O(k) time. and space complexity: O(n) because we are using an array to store the characters of the string.
// space O(1) if not converting string to an array.
var reverseStr = function(s, k) {
    s = s.split("");
    for (x = 0; x < s.length; x = x+(2*k)) {
     let n = k;
     let mid = Math.floor(n/2);
     for (let i=0; i < mid; i++){
         let temp = s[x+i];
         s[x+i] = s[x+n-i-1];
         s[x+n-i-1] = temp;
     }
    }
    return s.join("");
 };

 // problem 3 : check if a string is a valid palindrome. where removing non-alphanumeric chars and converting to lowercase.
// time complexity: O(n) and space complexity: O(n)
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let filteredString = '';
    for (let i=0; i < s.length; i++){
        if (s[i].match(/[a-z0-9]/i)){ // i = case insensitive in regex
            filteredString += s[i];  // to reverse use : rev = s[i] + rev;
        }
    }
    let rev = filteredString.split('').reverse().join('');
    return filteredString === rev;
};
// if you dont know regex, then you can use if condition (s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt()) || s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt() to check if the character is alphanumeric.

// another approach of space O(1) using two pointers
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,""); // replacing non-alphanumeric characters with empty string
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
};