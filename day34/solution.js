// problem 1 : intersection of two linked lists using two pointer approach
// Time complexity: O(m + n) and Space complexity: O(1)
var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    while (pA !== pB){
        pA = pA === null ? headB : pA.next; // if pA reaches the end, switch to headB
        pB = pB === null ? headA : pB.next; // if pB reaches the end, switch to headA
        // this way, both pointers will traverse the same distance when they meet
    }
    return pA;
};

// problem 2 : find the maxWater that can be contained between two lines
// Time complexity: O(n) and Space complexity: O(1)
var maxArea = function(arr) {
    let i = 0; let j = arr.length -1;
    let maxWater = 0;
    while (i< j){
        let area = Math.min(arr[i], arr[j]) * (j-i);
        maxWater = Math.max(area, maxWater);
        if (arr[i] > arr[j]){
            --j;
        } else {
            ++i;
        }
    }
    return maxWater;
};

// problem 3 : find the three sum of a given array
// Time complexity: O(n^2) and Space complexity: O(1)
// Note: The input array should not contain duplicate elements for this solution to work correctly.
// If duplicates are present, the solution will still work but may return duplicate triplets.
// To handle duplicates, we can sort the array and skip over duplicate elements during the iteration.
// This will ensure that each triplet is unique in the result.
// The solution uses a two-pointer approach to find pairs that sum to a specific value, which
// is derived from the three-sum problem by fixing one element and finding pairs in the remaining
// elements that sum to the negative of the fixed element.
// Example: For the input array [-1, 0, 1, 2, -1, -4], the output will be [[-1, -1, 2],
// [0, -1, 1]].
var threeSum = function(arr) {
    arr.sort((a,b)=> a-b);
    let ans=[]; 
    for (let i=0; i<arr.length; i++){
        if (arr[i] !== arr[i-1]){
            twoSum(arr,i,ans);
        }
    }
    return ans;
};

function twoSum (arr,x,ans) {
    let i=x+1; j=arr.length-1;
    while (i<j){
        if (arr[i]+arr[j]+arr[x] == 0) {
            ans.push([arr[i], arr[j], arr[x]]);
            ++i, --j;
            while (i<j && arr[i] == arr[i-1]) ++i; 
        } else if (arr[i] + arr[j] + arr[x] > 0){
            --j;
        } else {
            ++i;
        }
    }
}

// problem 4: find the trapping rain water
// Time complexity: O(n) and Space complexity: O(1)
var trap = function(arr) {
    let left = 0, right = arr.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (arr[left] < arr[right]) {
            if (arr[left] >= leftMax) {
                leftMax = arr[left];
            } else {
                water += leftMax - arr[left];
            }
            left++;
        } else {
            if (arr[right] >= rightMax) {
                rightMax = arr[right];
            } else {
                water += rightMax - arr[right];
            }
            right--;
        }
    }
    return water;
}

// another approach with time complexity O(n) and space complexity O(n)
var trap = function(arr) {
    let n = arr.length;
    let lMax = [];
    let rMax = [];
    lMax[0] = arr[0];
    rMax[n-1] = arr[n-1];
    for (let i=1; i<n; i++){
        lMax[i] = Math.max(lMax[i-1],arr[i]);
        rMax[n-1-i] = Math.max(arr[n-1-i], rMax[n-i]);
    }
    // loop for filling water
    let ans = 0;
    for (let i=0; i<n; i++){
        let waterTrapped = (Math.min(lMax[i], rMax[i]) - arr[i]);
        ans = ans + Math.max(waterTrapped, 0);
    }
    return ans;
};