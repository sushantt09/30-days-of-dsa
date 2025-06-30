// problem 1 : remove duplicates from an array
// time complexity: O(n)
// space complexity: O(1)
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4]; //sorted array
function removeDuplicates(a) {
    let currIndex = 0;
    for (let i = 1; i < a.length; i++){
        if (a[i] > a[currIndex]) {
            currIndex = currIndex + 1;
            a[currIndex] = a[i];
        }
    }
    return currIndex + 1; // return the length of the array without duplicates
    // if you want the array without duplicates, you can return a.slice(0, currIndex + 1);
}
console.log(removeDuplicates(arr));

// problem 2 : remove duplicates from an unsorted array
// time complexity: O(n)
// space complexity: O(n)
function removeDuplicatesUnsorted(arr) {
    const seen = new Set();
    let currIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!seen.has(arr[i])) {
            seen.add(arr[i]);
            arr[currIndex] = arr[i];
            currIndex++;
        }
    }
    return currIndex; // return the length of the array without duplicates
    // if you want the array without duplicates, you can return arr.slice(0, currIndex);
}

// problem 3 : remove element from an array
// space and time complexity: O(n)
var removeElement = function(nums, val) {
    let currIndex = 0;
    for (let i=0; i<nums.length; i++){
        if (nums[i] !== val){
            nums[currIndex] = nums[i];
            currIndex += 1;
        }
    }
    return currIndex;
};

// reverse string
// time complexity: O(n)
// space complexity: O(1)
var reverseString = function(s) {
    let currIndex = 0;
    for (let i= 0; i < s.length/2; i++){
       [s[i], s[s.length -1 -i]] = [s[s.length -1 -i], s[i]];
    }
    return s;
};