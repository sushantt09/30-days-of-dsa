// problem 1: find the first bad version which leads to further bad versions
// time complexity: O(log n) and space complexity: O(1)
// The isBadVersion API is already defined for you.
return function(n) {
    let l = 1;
    let r = n;
    while (l < r){
        let m = l + Math.floor((r-l)/2);
        if (!isBadVersion(m)){
            l = m+1;
        } else {
            r = m;
        }
    }
    return r;
};

// problem 2 : find the peak element in an array
// time complexity: O(log n) and space complexity: O(1)
// A peak element is an element that is greater than its neighbors.
var findPeakElement = function(arr) {
    let l = 0;
    let r = arr.length -1;
    while (l < r){
        let m = l + Math.floor((r-l)/2);
        if (arr[m] < arr[m+1]) {
            l = m+1;
        } else {
            r = m;
        }
    }
    return l;
};

// problem 3 : find the minimun value in rotated sorted array 
// time complexity: O(log n) and space complexity: O(1)
var findMin = function(arr) {
    let l = 0;
    let r = arr.length -1;
    let min = arr[0];
    while (l <= r) {
        let m = l + Math.floor((r-l)/2);
        if (arr[m] < min){
            min = arr[m];
        }
        if (arr[r] < arr[m]){
            l = m+1;
        } else {
            r = m-1;
        }
    }
    return min;
};

// another way
var findMin = function(arr) {
    let l = 0;
    let r = arr.length -1;
    while (l <= r) {
        if (arr[l] <= arr[r]){
            return arr[l];
        }
        let m = l + Math.floor((r-l)/2);
        if (arr[m] < arr[m-1]){
            return arr[m];
        }
        if (arr[r] < arr[m]){
            l = m+1;
        } else {
            r = m-1;
        }
    }
};


// problem 4 : find the first and last position of an element in a non-decreasing sorted array
// time complexity: O(log n) and space complexity: O(1)
var searchRange = function(arr, target) {
    let l = 0;
    let r = arr.length -1;
    let ans = [-1, -1];
    while (l<r){
        let m = l + Math.floor((r-l)/2);
        if (arr[m] < target){
            l = m+1;
        } else {
            r = m;
        }
    }
    if (arr[l] === target) ans[0] = l;
    l=0; 
    r = arr.length -1;
    while (l<r){ // we are trying to find the last index of that element 
        let m = l + Math.ceil((r-l)/2);
        if (arr[m] > target) r = m-1;
        else l = m;
    }
    if (arr[l] === target) ans[1] = l;
    return ans;
};

// another way 
var searchRange = function(arr, target) {
    let l =0;
    let r = arr.length -1;
    let ans = [-1, -1];
    while (l <= r){
        let m = l + Math.floor((r-l)/2);
        if (arr[m] === target){
            ans[0] = m;
            r = m-1; // we are trying to find the first index of that element
        } else if (arr[m] < target){
            l = m+1;
        } else {
            r = m-1;
        }
    }
    l =0; r = arr.length -1;
    while (l<=r){
        let m = l + Math.ceil((r-l)/2);
        if (arr[m] === target){
            ans[1] = m;
            l = m+1; // we are trying to find the last index of that element
        } else if ( arr[m] < target) {
            l = m+1;
        } else{
            r = m-1;
        }
    }
    return ans;
};