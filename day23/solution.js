// problem 1 : isomorphic strings
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character but a character may map to itself.
// For example, "egg" and "add" are isomorphic because 'e' can be replaced with 'a' and 'g' can be replaced with 'd'.
var isIsomorphic = function(s, t) {
    let curr = 0;
    let seen = {};
    while (curr < s.length) {
        if (!seen[s[curr]]) {
            console.log({v : Object.values(seen)})
            if (Object.values(seen).includes(t[curr])){
                return false;
            }
            seen[s[curr]] = t[curr];
            ++curr;
        } else {
            if (seen[s[curr]] !== t[curr]){
                return false;
            }
            ++curr;
        }
    }
    return true;
};

// better solution or optimized solution
// time complexity: O(n) 
// space complexity: O(n) wrong in the below solution it's not O(1) because we are using two hashmaps
var isIsomorphic = function(s, t) {
    let mapStoT = {};
    let mapTtoS = {};
    for (let i=0; i<s.length; i++){
        if (!mapStoT[s[i]] && !mapTtoS[t[i]]){
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        } else if (mapTtoS[t[i]] !== s[i]){
            return false;
        } else if (mapStoT[s[i]] !== t[i]){
            return false;
        }
    }
    return true;
};

// problem 2 : group anagrams
// Given an array of strings strs, group the anagrams together.
// time complexity: O(n * k log k) where n is the number of strings and k is the maximum length of a string
// space complexity: O(n * k) where n is the number of strings and k is the maximum length of a string
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// For example, "eat", "tea", and "tan" are anagrams of each other.
var groupAnagrams = function(strs) {
    let map = new Map();
    for (let i=0; i<strs.length; i++){
        let sortedItem = strs[i].split('').sort().join();
        if (!map[sortedItem]){
            map[sortedItem] = [strs[i]];
        } else {
            map[sortedItem].push(strs[i]);
        }
    }
    return [...Object.values(map)];
};

// OR second solution 
// create keys using hashmap
// time complexity: O(n * k) where n is the number of strings and k is the maximum length of a string
// space complexity: O(n * k) where n is the number of strings and k is the maximum length of a string
// This solution uses a frequency array to create a unique key for each anagram.
// The key is a string that contains the character and its frequency in the string.
var groupAnagrams = function(strs) {
    // create key
    let map = {}
    for (let i = 0; i < strs.length; i++){
        let freqArr = Array(26).fill(0);
        let s = strs[i];
        for (let j=0; j < s.length; j++){
            let index = s[j].charCodeAt() - "a".charCodeAt();
            ++freqArr[index];
        }
        let key = "";
        for (let k=0; k<26; k++){
            key = key + String.fromCharCode(k + "a".charCodeAt(0)) + freqArr[k];
        }
        // fill the map
        if (!map[key]){
            map[key] = [s];
        } else {
            map[key].push(s);
        }

    }
    return [...Object.values(map)];
};