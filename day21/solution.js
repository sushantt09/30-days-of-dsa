// problem 1: find the maximum odd number substring in a string
// Given a string num representing a non-negative integer, return the largest odd integer (as a string) that can be formed by deleting some digits of num. If no odd integer exists, return an empty string "".
// time and space complexity: O(n) & O(1), where n is the length of the string num
var largestOddNumber = function(num) {
    if(Number(num)%2===1) return num;
    for(let i = num.length-1; i>=0; i--){
        if(Number(num[i])%2===1) {
            return num.slice(0,i+1)
        }
    }
    return ''
};

// problem 2: find the longest common prefix in an array of strings
// time and space complexity: O(n*m) & O(1), where n is the number of strings and m is the length of the shortest string
var longestCommonPrefix = function(strs) {
    let x = 0;
   while (x < strs[0].length) {
   let ch = strs[0][x];
       for (let i = 0; i < strs.length; i++){
           if (!strs[i][x]) return strs[0].substring(0, x);
           if (ch !== strs[i][x]) {
               return strs[0].substring(0, x);
           }
       }
       ++x;
   }
   return strs[0];
};