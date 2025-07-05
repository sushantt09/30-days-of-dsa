// problem 1: squareroot of a number without using built-in functions
var mySqrt = function(x) {
    if (x < 2){
        return x;
    }
    let l = 2;
    let r = Math.floor(x/2);
    while (l<r){
        let m = Math.floor((l+r)/2);
        if (x === m**2) {
            return m;
        } else if (x < m**2 ){
            r = m-1;
        } else {
            l = m+1;
        }
    }
    return r; // right value will become the answer if not the perfect square
};