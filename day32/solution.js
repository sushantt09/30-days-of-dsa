// problem 1: find the peak index in a mountain array
// A mountain array is defined as an array that has a peak element such that all elements to the left of the peak are strictly increasing and all elements to the right of the peak are strictly decreasing
// Example: [0, 2, 1, 0] has a peak at index 1
// time complexity: O(log n) and space complexity: O(1)
var peakIndexInMountainArray = function(arr) {
    let l=0; 
    let r=arr.length -1;
    while (l<=r){
        let m = l + Math.floor((r-l)/2);
        if (arr[m] > arr[m-1] && arr[m] > arr[m+1]){
            return m;
        }
        if (arr[m] > arr[m-1]) l = m;
        if (arr[m] > arr[m+1]) r = m;
    }
};

// problem 2 : find the single element in a sorted array
// optimized solution using binary search with O(log n) time complexity and O(1) space complexity
var singleNonDuplicate = function(arr) {
    let l = 0;
    let r = arr.length -1;
    while (l<=r) {
        let m = l + Math.floor((r-l)/2);
        if (arr[m+1] === arr[m]){
            let leftLen = m-l;
            if (leftLen % 2 !== 0){
                r = m-1;
            } else {
                l = m+2;
            }
        } else if (arr[m-1] === arr[m]){
            let leftLen = m-1-l;
            if (leftLen % 2 !== 0){
                r = m-2;
            } else {
                l = m+1;
            }
        } else {
            return arr[m];
        }
    }
};

// problem 3: find closest element in a sorted array
// example: arr = [1, 2, 3, 4, 5], target = 3.6, output = 4
// using brute force approach with O(n) time complexity and O(1) space complexity
var findClosestElements = function(arr, k, x) {
    let i=0; 
    let ans = [];
    while (i <= arr.length-k){
        ans = [];
        if ( Math.abs(arr[i]-x) < Math.abs(arr[i+k]-x) 
        || (Math.abs(arr[i]-x) === Math.abs(arr[i+k]-x) && arr[i] < arr[i+k])
        ){
            let j = i;
            for (let j=i; j<i+k; j++){
                ans.push(arr[j]);
            }
            return ans;
        } else {
            i++;
        }
    }
    return arr.slice(arr.length - k);;
};

// optimized solution using binary search with O(log n) time complexity and O(1) space complexity
var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length -1;
    while (l<r){
        let m = l + Math.floor((r-l)/2);
        if (arr[m+k]-x < x-arr[m]){
            l = m+1;
        } else {
            r = m;
        }
    }
    return arr.slice(l,l+k);
};

// problem 4: find the twoSum in a array and return the indices of the two numbers such that they add up to a specific target
// using brute force approach with O(n^2) time complexity and O(1) spacecomplexity
var twoSum = function(arr, target) {
    for (let i=0; i<arr.length-1; i++){
        for (let j=i+1; j<arr.length; j++){
            if (arr[i] + arr[j] === target){
                return [i, j];
            }
        }
    }
}

// better solution using hashmap with O(n) time complexity and O(n) space complexity
var twoSum = function(arr, target) {
    let map = new Map();
    for (let i=0; i<arr.length; i++){
        if (map.has(target - arr[i])){
            return [map.get(target - arr[i]), i];
        }
        map.set(arr[i], i);
    }
}
// or 
var twoSum = function(arr, target) {
    let map = {}; let n = arr.length;
    // settings items to map O(n)
    for (let i=0; i<n; i++){
        map[arr[i]] = i;
    }
    // find values in map is O(1) operation
    for (let j=0; j<n; j++){
        let pairToFind = target - arr[j];
        if (map[pairToFind] && map[pairToFind] != j){
            return [j, map[pairToFind]];
        }
    }
};