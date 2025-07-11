// problem 1: two sum with indices from a sorted array
// example: arr = [2,7,11,15], target = 9
// time complexity: O(n) and space complexity: O(1)
var twoSum = function(arr, target) {
    let i=0; 
    let j=arr.length-1;
    while (i<j){
        if ((arr[i]+arr[j]) === target) {
            return [i+1,j+1];
        } else if ((arr[i]+arr[j]) > target){
            --j;
        } else {
            ++i;
        }
    }
};

// problem 2 : s strings is subsequence of t strings
// example: s = "abc", t = "ahbgdc"
// time complexity: O(n) and space complexity: O(1)
var isSubsequence = function(s, t) {
    let i=j=0;
    while (j < t.length){
        if (s[i] === t[j]){
            ++i;
        }
        ++j;
    }
    return i === s.length;
};

// problem 3 : find the index of the first occurrence of a substring in a string
// example: haystack = "hello", needle = "ll"
// time complexity: O(n*2) and space complexity: O(1)
// uses sliding window technique
var strStr = function(haystack, needle) {
    let h = haystack.length;
    let n = needle.length;
    for (let i=0; i<=h-n; i++){
    let j = 0;
        for (j= 0;j < n; j++){
            if (haystack[i+j] !== needle[j]){
                break;
            }
        }
        if (j === n){
            return i;
        }
    }
    return -1;
};

// another approach using kmp's algorithm
var strStr = function(haystack, needle) {
    let h = haystack.length; 
    let n = needle.length;
    // filling up the lps array
    let i=0;
    let j=1;
    let lps = [0];
    while (j< n){
        if (needle[i] === needle[j]){
            lps[j] = i+1;
            ++i; ++j;
        } else {
            if (i=== 0){
                lps[j] = 0;
                ++j;
            } else {
                i = lps[i-1];
            }
        }
    }
    // lps array filled now move to searching string
    i=j=0;
    while (i<h){
        if (haystack[i] === needle[j]){
            ++i;++j;
        } else {
            if (j==0){
                ++i;
            } else {
                j = lps[j-1];
            }
        }
        if (j === n){
            return i-n;
        }
    }
    return -1;
};