// problem 1: return the length of the last word in a string
// time and space complexity: O(n) and O(n)
function lengthOfLastWord(s) {
    // Trim the string to remove leading and trailing spaces
    s = s.trim();
    // Split the string by spaces to get all words
    const words = s.split(' ');
    // Return the length of the last word
    return words[words.length - 1].length;
} // not good solution for interviews

// better solution 
// time and space complexity: O(n) and O(1)
var lengthOfLastWord = function(s) {
    let count = 0;
    let i = s.length - 1;

    // Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Count characters in the last word
    while (i >= 0 && s[i] !== ' ') {
        count++;
        i--;
    }

    return count;
};

// OR
function check(s) {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            count++;
        } else if (count > 0) {
            break;
        }
    }
    return count;
}

// problem 2 : find the words containing a specific character
// time and space complexity: O(n) and O(n)
var findWordsContaining = function(words, x) {
    let result = [];
    for (let i=0; i< words.length ; i++){
        if (words[i].includes(x)){
            result.push(i);
        }
    }
    return result;
};

// OR
    var findWordsContaining = function(words, x) {
        let result = [];
        for (let i=0; i< words.length ; i++){
           for (let j =0; j < words[i].length; j++){
                if (words[i][j] === x){
                    result.push(i);
                    break;
                }
           }
        }
        return result;
    };

// problem 3 : find the number of jewels in stones
// time and space complexity: O(n*m) and O(1)
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let i=0; i < stones.length; i++){
        for (let j=0; j<jewels.length; j++){
            if (stones[i] === jewels[j]){
                count++;
                break;
            }
        }
    }
    return count;
};  

// optimized solution
// time and space complexity: O(n) and O(n)
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    const jewelSet = new Set(jewels); // Create a set for O(1) lookups
    for (let stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }
    return count;
}

// problem 4 : return the maximum frequency of vowels and consonants in a string
// Given a string s, return the sum of the maximum frequency of vowels and consonants in s.
// time and space complexity: O(n) and O(1)
var maxFreqSum = function(s) {
    const vowels = new Set(['a','e','i','o','u']);
    let constFrequency = 0;
    let vowelFrequency = 0;
    let constMap = new Map();
    let vowelMap = new Map();

    for(let char of s){
        if(vowels.has(char)){
            const charFreq = (vowelMap.get(char) || 0) + 1;
            vowelMap.set(char, charFreq)
            vowelFrequency = Math.max(vowelFrequency, charFreq)
        }
        else{
            const charFreq = (constMap.get(char) || 0)+1;
            constMap.set(char, charFreq)
            constFrequency = Math.max(constFrequency, charFreq)
        }
    }

    return vowelFrequency + constFrequency
}; 
// OR
var maxFreqSum = function(s) {
    let map = {};
    for (let i =0; i < s.length; i++){
        if (map[s[i]]){
            ++map[s[i]];
        } else {
            map[s[i]] = 1;
        }
    }
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonantCount = 0;
    for (let i=0; i< s.length; i++){
        if (vowels.includes(s[i])){
            if (map[s[i]] > vowelCount){
                vowelCount = map[s[i]];
            }
        } else {
            if (map[s[i]] > consonantCount){
                consonantCount = map[s[i]];
            }
        }
    }
    return vowelCount+consonantCount;
};

