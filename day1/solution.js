//problem 1 : print the alternate elements in an array.
// space and time complexity is O(n) and O(1) respectively.
let exampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function printAlternate(arr) {
    let flag = true;
    let res = [];
    for (let i = 0; i < arr.length; i++){ // or this approach i=i+2
        if (flag) {
            res.push(arr[i]);
        }
            flag = !flag;
    }
    return res;
};

let result = printAlternate(exampleArr);
console.log({ result });

// problem 2 : print the alternate elements in an array using recursion.

function printAlternateRecursion (arr, index = 0, res = []) {
    if (index >= arr.length ){
        return res;
    }
    res.push(arr[index]);
    return printAlternateRecursion(arr, index+2, res);
}

// problem 3 : // remove duplicates from an array

const arr = [0, 1, 1, 2, 3, 1, 4, 2, 3, 6, 7, 9, 4];

function removeDuplicates(arr) {
    let res = new Set([]);
    for (let i = 0; i < arr.length; i++){
        if (!res.has(arr[i])) {
            res.add(arr[i]);
        }
    }
    return res;
}

// problem 4 : remove duplicates from an array using recursion
// space and time complexity is O(n) and O(n) respectively.
function removeDuplicatesRecursion(arr, index = 0, res = new Set()) {
    if (index >= arr.length) {
        return Array.from(res); // convert Set(is an iterable but not a array) to Array
    }
    res.add(arr[index]);  //duplicates are automatically handled by Set means ignored
    return removeDuplicatesRecursion(arr, index + 1, res);
}

// problem 5 : remove duplicates from an array using filter
// space and time complexity is O(n) and O(n^2) respectively.
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// problem 6 : find the second largest element in an array
// const arr = new Array(...[0, 1, 1, 2, 3, 1, 4, 2, 3, 6, 7, 9, 4]);

function secondlargestElement(arr) {
    let secLargest = -Infinity;
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (largest < arr[i]) {
            secLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secLargest && arr[i] !== largest) {
            secLargest = arr[i];
        }
    }
    return secLargest === -Infinity ? null : secLargest;
}

// problem 7 : find the second largest element in an array using recursion
// space and time complexity is O(n) and O(1) respectively.
function secondLargestRecursion(arr, index = 0, largest = -Infinity, secLargest = -Infinity) {
    if (index >= arr.length) {
        return secLargest === -Infinity ? null : secLargest;
    }
    if (arr[index] > largest) {
        secLargest = largest;
        largest = arr[index];
    } else if (arr[index] > secLargest && arr[index] !== largest) {
        secLargest = arr[index];
    }
    return secondLargestRecursion(arr, index + 1, largest, secLargest);
}

// problem 8 : rotate an array by k elements to the right
// space and time complexity is O(1) and O(n) respectively.

function reverse (arr, start, end) {
    while (start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function rotateArrayRight (arr, k) {
    let n = arr.length;
    let k = k % n; // handle cases where k is greater than array length
    if (k === 0) return arr; // no rotation needed
    reverse(arr, 0, n-1);
    reverse(arr,0, k-1);
    reverse(arr, k-1, n-1);
    return arr;
}
