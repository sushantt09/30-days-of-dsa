// implementation of merge sort algorithm
// Time complexity: O(n log n) && Space complexity: O(n)
var sortArray = function(nums) {
    if (nums.length <= 1) { return nums;}
    let mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    return merge(left, right);
  };
  
  function merge(left, right) {
      let res = [];
      let i=0;
      let j=0;
      while ( i < left.length && j < right.length){
          if (left[i] < right[j]){
              res.push(left[i]);
              i++;
          } else {
              res.push(right[j]);
              j++;
          }
      }
      // logic for rest of items left in any array
      return [...res, ...left.slice(i), ...right.slice(j)];
  }