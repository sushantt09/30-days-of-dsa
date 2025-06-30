// problem 1 : find if s and t strings are anagrams of each other
function areAnagrams(s,t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
}

// or second solution and optimized solution
// time complexity: O(n) and space complexity: O(n) wrong it's O(1) because we are using map which has a constant size of 26 characters
var isAnagram = function(s, t) {
    if (s.length !== t.length ){
        return false;
    }
    let map = new Map();
    for (let i = 0; i < s.length; i++){
        if (!map.has(s[i])){
            map.set(s[i], 1);
        } else {
            let val = map.get(s[i]);
            map.set(s[i], ++val);
        }
    }

    for (let i=0; i< t.length; i++){
        let val = map.get(t[i]);
        if (!map.has(t[i])){
            return false;
        } else if (val <= 0){
            return false;
        } else {
            map.set(t[i], --val);
        }
    }
    return true;
};