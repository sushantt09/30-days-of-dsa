// problem 1 : find the best day to buy and sell stocks to maximize profit. 
// This greedy algorithm teaches dynamic decision-making for optimal stock trading.
// Time complexity: O(n), Space complexity: O(1)
const arr = [7,1,5,3,6,4];
function buyAndSell(a) {
    let maxProfit = 0; let min = a[0]; let profit;
    for (let i = 1; i < a.length; i++){
        profit = a[i] - min;
        if (maxProfit < profit) {
            maxProfit = profit;
        }
        if (a[i] < min) {
            min = a[i];
        }
    }
    return maxProfit;
}

// problem 2 : merge two sorted arrays into one sorted array.
// time complexity: O((m+n)log(m+n)), space complexity: O(m+n)
let nums1 = [1, 2, 3];let nums2 = [2, 5, 6];
function mergeSortedArr(nums1, m, nums2, n) {
    nums1 = [...nums1, ...nums2];
    nums1.sort();
    return nums1;
}

// another approach to merge two sorted arrays

function mergeSortedArr2(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);
    let p1 = 0, p2 = 0;
    for (let i = 0; i < m + n; i++) {
        if (p1 < m && (p2 >= n || nums1Copy[p1] <= nums2[p2])) {
            nums1[i] = nums1Copy[p1];
            p1++;
        } else {   
            nums1[i] = nums2[p2];
            p2++;
        }
    }
    return nums1;
}
//OR
function mergeSortedArr(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);
    let p1 = m-1, p2 = n-1;
    for (let i = m + n - 1; i >= 0; i--) {
        console.log({ p1, p2 });
        if (p1 >= 0 && (p2 < 0 || nums1Copy[p1] >= nums2[p2])) {
            nums1[i] = nums1Copy[p1];
            p1--;
        } else {   
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
}

// problem 3 : move all zeroes to the end of the array while maintaining the order of non-zero elements.
// Time complexity: O(n), Space complexity: O(1)
function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt++] = nums[i];
        }
    }
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

// or another approach
function moveZeroes(a) {
    let p1 = 0;
    for (let i = 0; i < a.length; i++){
        if (a[p1] === 0 && a[i] !== 0) {
            a[p1] = a[i];
            a[i] = 0;
            p1++;
        }
        if (a[i] === 0 && a[p1] !== 0) {
            p1 = i;
        }
    }
    return a;
}

//problem 4 : find the maximum number of consecutive 1s in a binary array.
// Time complexity: O(n), Space complexity: O(1)
function findMaxConsecutiveOnes(arr) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 1) {
            count++;
        } else {
            count = 0;
        }
        if (max < count) {
            max = count;
        }
    }
    return max;
}
// another approach
function findMaxConsecutiveOnes(arr) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 1) {
            count++;
        } else {
            max = Math.max(max, count);
            count = 0;
        }
    }
    return Math.max(max, count);
}

// problem 5: missing number in an array.
// Time complexity: O(n), Space complexity: O(1)
function missingNumber(arr) {
    let n = arr.length;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return total - sum;
}

// problem 6 : find the single number in an array where every other number appears twice.
// Time complexity: O(n), Space complexity: O(1)
function singleNumber(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result ^= arr[i]; //bitwise XOR operation
    }
    return result;
}

// another approach using hashtable
// Time complexity: O(n), Space complexity: O(n)
var singleNumber = function(nums) {
    let hash = {};
    for (let i=0; i<nums.length; i++){
        if (!hash[nums[i]]){
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
    for (let i=0; i<nums.length; i++){
        if (hash[nums[i]] === 1){
            return nums[i];
        }
    }
};