// problem 1 : permutation in string 
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.
// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba"). 
// time complexity: O(n) and space complexity: O(1) since we are using a fixed size array of 26 elements for the hash table.                      
var checkInclusion = function(s1, s2) {
    let hashW = Array(26).fill(0);
    let hashS = Array(26).fill(0);
    let window_length = s1.length;
    for (let i=0; i<window_length ;i++) {
        ++hashS[s1.charCodeAt(i) - 97];
        ++hashW[s2.charCodeAt(i) - 97];
    }
    let i=0; j = window_length -1;
    while (j < s2.length){
        if (isSameHash(hashW, hashS)){
            return true;
        } else {
            --hashW[s2.charCodeAt(i) - 97];
            ++i;
            ++j;
            ++hashW[s2.charCodeAt(j) - 97];
        }
    }
    return false;
};

function isSameHash(hashW, hashS) {
    for (let i=0; i< 26; i++){
        if (hashW[i] !== hashS[i]){
            return false;
        }
    }
    return true;
}

// problem 2 : find the sliding window maximum
// Given an array nums, there is a sliding window of size k which is moving from the
// very left of the array to the very right. You can only see the k numbers in
// the window. Each time the sliding window moves right by one position.
// Return the max sliding window.
// Example 1:
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3 5 3 67       3
// 1 [3  -1 -3] 5 3     3                   
// 1 3 [-1 -3 5] 3 6 7       5
// 1 3 -1 [-3 5 3] 6 7     5    
// 1 3 -1 -3 [5 3 6] 7       6
// 1 3 -1 -3 5 [3 6 7]       7
// time complexity: O(n) and space complexity: O(k) since we are using a
// deque to store the maximum elements of the sliding window.
// We can use a deque to store the indices of the elements in the sliding window.
// The elements in the deque are in decreasing order, so the front of the deque
// will always be the maximum element of the sliding window.
// When we move the sliding window, we remove the elements that are out of the window
// from the front of the deque, and we add the new elements to the back of the deque.
// We also remove the elements from the back of the deque that are smaller than the new element
// since they will not be the maximum element of the sliding window anymore.
var maxSlidingWindow = function(arr, k) {
    let q = []; // dequeue ds
    let i = 0; let j = 0;
    let res = [];
    // always maintain max value of a window at the front of the stack
    while (j < arr.length){
        while (q.length && arr[j] > q[q.length -1]){q.pop()} 
        q.push(arr[j]);
        
        if (j >= k-1){
            res.push(q[0]);
            // if the left most element of the current window is the largest then remove it
            arr[i] === q[0] && q.shift();
            ++i;
        }
        j++;
    }
    return res;
};