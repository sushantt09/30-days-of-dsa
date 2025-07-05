// problem 1 : guess the number api guess(n) gives 0 if matched, -1 if n is lower than the target number, and 1 if n is higher than the target number.
// You need to implement a function that finds the number in the range [1, n]
// time complexity: O(log n)
// space complexity: O(1)
var guessNumber = function(n) {
    let l = 1;
    let r = n;
    while (l <= r){
       let m = l + Math.floor((r-l)/2);
       let res = guess(m);
       if (res === 0){
        return m;
       } else if (res < 0) {
            r = m-1;
       } else {
            l = m+1;
       }
    }
};