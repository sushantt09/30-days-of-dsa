// problem 1: find the index of the element if present in the rotated sorted array
// time complexity: O(log n) and space complexity: O(1)
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l<=r){
        let m = l + Math.floor((r-l)/2);
        if (nums[m] === target ){
            return m;
        }
        if (nums[l] <= nums[m]){ // left side sorted
            if (target < nums[m] && nums[l] <= target){
                r = m-1;
            } else {
                l = m+1;
            }
        } else { // right side sorted
            if (target > nums[m] && target <= nums[r]) {
                l = m+1;
            } else {
                r = m-1;
            }
        }
    }
    return -1;
};