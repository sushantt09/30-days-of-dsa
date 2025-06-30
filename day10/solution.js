// problem 1 : find an element in an array using linear search
// time complexity: O(n) and space complexity: O(1)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i;
        }
    }
    return -1
};

// binary search implementation
// time complexity: O(log n) and space complexity: O(1)
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (r >= l) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }    
    return -1;
};

// problem 2 : implementation of bubble sort
// time complexity: O(n^2) and space complexity: O(1)
function bubbleSort(arr) {
    let swap; let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;   
            }
        }
        // optimization: if no swaps were made, the array is already sorted
        if (swap === undefined) {
            break;
        } else {
            swap = undefined; // reset swap for next iteration
        }
    }
    return arr;
}

// problem 3 : implementation of selection sort
// time complexity: O(n^2) and space complexity: O(1);
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let min = i;
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

// problem 4 : implementation of insertion sort
// time complexity: O(n^2) and space complexity: O(1);
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++){
        let curr = arr[i];
        let prev = i - 1;
        while (prev >= 0 && arr[prev] > curr) { // when prev = -1 so for that we need prev>=0 condition
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;
    }
    return arr;
}
// or another bad approach 
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++){
        for (let j = i-1; j > 0; j--){
            if (arr[j+1] < arr[j]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}