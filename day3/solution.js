//Problem 1 :  Given an array of N integers, write a program to return an element that occurs more than N/2 times 
// in the given array. You may consider that such an element always exists in the array.
function majorityElement(arr) {
    let res; let newVal; let max = 0;
    let map = new Map();
    for (let i = 0; i < arr.length; i++){
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            newVal = map.get(arr[i]);
            map.set(arr[i],newVal + 1);
        }
    } 
    for (let i = 0; i < arr.length; i++){
        if (map.get(arr[i]) > max) {
            max = map.get(arr[i]);
            res = arr[i];
        }
    }
    return res;
}
//optimized version

function majorityElement(arr) {
    let map = new Map();
    let res = arr[0];
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = map.get(arr[i]) || 0;
        count++;
        map.set(arr[i], count);

        if (count > max) {
            max = count;
            res = arr[i];
        }
    }

    return res;
}

//O(1) space complexity version and O(n) time complexity
function majorityElement(arr) {
    let count = 0; let candidate = null;
    for (let num of arr) { 
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    let freq = 0;
    for (let num of arr) {
        if (num === candidate) freq++;
    }

    return (freq > arr.length / 2) ? candidate : null;
}

//problem 2 : You are given an array of prices where prices[i] is the price of a given stock on an ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to
//sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//time complexity O(n) and space complexity O(1)
function maxProfit(prices){
    let minPrice = prices[0];
    let maxProfit = 0; let profit = 0;
    for (let i=0; i< prices.length; i++){
        profit = prices[i] - minPrice;
        maxProfit = Math.max(profit, maxProfit);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
}
