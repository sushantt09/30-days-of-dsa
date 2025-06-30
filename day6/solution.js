// problem 1 : reverse a number
// time complexity: O(log n)
// space complexity: O(1)
function reverseNumber(n){
    let rev = null;
    let num = n;
    let negative;
    if (n < 0) {
        num = -n;
        negative = true;
    }
    while (num > 0) {
        rem = num % 10;
        rev = (10*rev) + rem;
        num = Math.floor(num / 10);
    }
    let limit = Math.pow(2, 31); // 2 to the power of 31
    if (rev > limit -1 || rev < -limit) { return 0; }
    return negative ? -rev : rev;
}

console.log(reverseNumber(-123));