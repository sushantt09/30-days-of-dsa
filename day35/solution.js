// problem 1: find the longest substring without repeating characters
// time complexity: O(n) and space complexity: O(n)
// approach: use a sliding window technique with a hashmap to track the last index of each character
// if a character is found that is already in the current window, move the start of the
// window to the right of the last occurrence of that character
// this ensures that the substring remains unique and we can calculate the maximum length
var lengthOfLongestSubstring = function(s) {
    let i=0; 
    let j=0;
    let maxLength = 0;
    let map = {};
    while (j<s.length){
        if (map[s[j]] !== undefined && map[s[j]] >= i){
            i = map[s[j]] + 1;
        }
        map[s[j]] = j;
        let window = j-i+1;
        maxLength = Math.max(window, maxLength);
        j++;
    }
    return maxLength;
};

// problem 2 : find the longest repeating character in a string
// time complexity: O(n) and space complexity: O(1)
// approach: use a sliding window technique to find the longest repeating character
var characterReplacement = function(s, k) {
    let i = j =0;
    let map = {};
    map[s[0]] = 1;
    let maxWindow = 0;
    while (j < s.length){
        if (isValidWindow(map, k)){
            maxWindow = Math.max(maxWindow, j-i+1);
            ++j;
            map[s[j]] = !map[s[j]] ? 1 : ++map[s[j]];
        } else {
            --map[s[i]];
            ++i;
        }
    }
    return maxWindow;
};

var isValidWindow = function (map, k) {
    let maxCount = 0;
    let totalCount = 0;
    for (let i=0; i<26; i++){
        let char = String.fromCharCode(i+65);
        if (map[char]){
            totalCount = totalCount + map[char];
            maxCount = Math.max(maxCount, map[char]);
        }
    }
    return (totalCount - maxCount <= k);
}

// using array to store the count of characters
var characterReplacementArray = function(s, k) {
    let i = j = 0;
    let count = new Array(26).fill(0);
    count[s.charCodeAt(0) - 65] = 1;
    let maxWindow = 0;
    while (j < s.length){
        if (isValidWindowArray(count, k)){
            maxWindow = Math.max(maxWindow, j-i+1);
            ++j;
            count[s.charCodeAt(0) - 65]++;
        } else {
            count[s.charCodeAt(0) - 65]--;
            ++i;
        }
    }
    return maxWindow;
}
var isValidWindowArray = function (count, k) {
    let maxCount = 0;
    let totalCount = 0;
    for (let i=0; i<26; i++){
        if (count[i]){
            totalCount += count[i];
            maxCount = Math.max(maxCount, count[i]);
        }
    }
    return (totalCount - maxCount <= k);
}