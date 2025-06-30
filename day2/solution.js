// Problem: Given an array, return all possible subarrays.
// time complexity is O(n^2) and space complexity is O(n^2). 
function subArray(arr) {
    let res = [];
    for (let start = 0; start < arr.length; start++){
        for (let end = start; end < arr.length; end++){
            res.push(arr.slice(start, end + 1));
        }
    }
    return res;
}

// problem 2 : using recursion
function subArray(arr, start, end, res) {
    if (end === arr.length) {
        return res;
    }
    if (start > end) { //move end ahead
        return subArray(arr, 0, end+1, res)
    }
    res.push(arr.slice(start, end + 1));
    subArray(arr, start + 1, end, res);  // move start ahead
    return res;
}

// problem 3 : total count of subarrays
function subArrayCount(arr) {
    let count = 0;
    count = (arr.length *(arr.length + 1))/2;
    return count;
}

// problem 4 : moving zeroes to end
// time complexity is O(n) and space complexity is O(1)
function moveZeroesToEnd(arr) { //my solution not the best one
    if (arr.length === 0) {
        return arr;
    }

    let res = [];
    let totalZeroes = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) !== 0) {
            res.push(arr[i]);
        } else { 
            totalZeroes = totalZeroes + 1;
        }
        console.log(totalZeroes);
    }
    while (totalZeroes !== 0) {
        res.push(0);
        totalZeroes--;
    }
    return res;
}

// better solution [0,1,0,0,12]
function moveZeroesToEnd(arr){
    let nonZeroIndex = 0;
    for (let i = 0; i< arr.length; i++){
        if (arr[i] !== 0){
            if (i !== nonZeroIndex){
                [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]]; // swap
                nonZeroIndex++;
            }
        }
    }
    return arr;
}

// another better solution
function moveZeroesToEnd(arr) {
        let insertPos = 0;
        for (let i = 0; i < arr.length; i++){
            if (arr[i] !== 0) { // move all non-zero items forward
                arr[insertPos] = arr[i];
                insertPos++;
            }
        }
        while (insertPos < arr.length) {
            arr[insertPos] = 0;
            insertPos++
        }
        return arr;
}

//problem 5 : Given an integer array arr, find the contiguous subarray (containing at least one number) which
//has the largest sum and returns its sum and prints the subarray.// This is known as Kadane's algorithm.
// time complexity is O(n) and space complexity is O(1)
const arr = [-2,1,-3,4,-1,2,1,-5,4];
function maxSubArray(arr) {
    let max = -Infinity;
    let res = [];
    let selectedSArr;
    for (let start = 0; start < arr.length; start++){
        for (let end = start; end < arr.length; end++){
            res.push(arr.slice(start, end + 1));//0,01,012,1,12,2
        }
    }   
    for (let i = 0; i < res.length; i++){
        let sum = res[i].length > 1 ? arrSum(res[i]) : Number(res[i]);
        if (max < sum) {
            max = arrSum(res[i]);
            selectedSArr = res[i]; 
        }
    }

    return {max: max, selectedSArr: selectedSArr}
}

function arrSum(sArr) {
    let sum = 0;
    for (let i = 0; i < sArr.length; i++){
        sum += sArr[i];
    }
    return sum;
}
console.log({ r: maxSubArray(arr) });

// better solution or optimized solution
function maxSubArray(arr) {
    let start = 0; let end = 0; let currentMax = arr[0];
    let maxSoFar = arr[0]; let tempIndex;

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > currentMax + arr[i]) {
            currentMax = arr[i];
            tempIndex = i;
        } else {
            currentMax += arr[i];
        }
        if (currentMax > maxSoFar) {
            maxSoFar = currentMax;
            start = tempIndex;
            end = i;
        }
    } 

    return {max: maxSoFar, selectedSArr: arr.slice(start, end + 1)}
}