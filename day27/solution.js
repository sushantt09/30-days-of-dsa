// problem 1: find the number of days until a warmer temperature for each day return an array of the same length as the input array
// time complexity: O(n) and space complexity: O(n)
// Example: [73, 74, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0, 0]
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let ans = Array(temperatures.length).fill(0);
    stack.push(temperatures.length -1);
    ans[temperatures.length -1] = 0;
    for (let i=temperatures.length - 2; i >= 0; i--){
        while (stack.length){
            let top = stack[stack.length -1];
            if (temperatures[top] <= temperatures[i]){
                stack.pop();
            } else {
                ans[i] = top - i;
                break;
            }
        }
        if (!stack.length){
            ans[i] = 0;
        }
        stack.push(i);
    }
    return ans;
};

// problem 2 : find next greater element for each element in circular array
// time complexity: O(n) and space complexity: O(n)
var nextGreaterElements = function(nums) {
    let newArr = [...nums, ...nums];
    let n = newArr.length;
    let stack = [];
    let arr = Array(n).fill(-1);
    stack.push(newArr[n -1]); 
    for (let i = newArr.length -2; i >= 0; i--){
        while (stack.length){
            let top = stack[stack.length -1];
            if (newArr[i] < top){
                arr[i] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(newArr[i]);
    }
    return arr.slice(0, nums.length);
};

// more optimized solution without doubling the array
var nextGreaterElements = function(newArr) {
    let n = newArr.length;
    let stack = [];
    let arr = Array(n).fill(-1);
    stack.push(newArr[n -1]); 
    for (let i = (2*newArr.length) -2; i >= 0; i--){
        while (stack.length){
            let top = stack[stack.length -1];
            if (newArr[i%n] < top){
                arr[i%n] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(newArr[i%n]);
    }
    return arr.slice(0,n);
};

// problem 3 : rotten oranges problem
// time complexity: O(n) and space complexity: O(n)
var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let queue = [];
    // push all the rotten oranges in the queue
    for (let i=0; i<m; i++){
        for (let j=0; j<n; j++){
            if (grid[i][j] === 2){
                queue.push([i,j,0]);
            }
        }
    }
    let minutes = 0
    // mark the adj nodes as rotten and push it in the queue
    while (queue.length){
        let [x,y,level] = queue.shift();
        if (x>0 && grid[x-1][y] === 1){
            grid[x-1][y] = 2;
            queue.push([x-1,y,level+1]);
        }
        if (x < m-1 && grid[x+1][y] === 1){
            grid[x+1][y] = 2;
            queue.push([x+1,y,level+1]);
        }
        if (y > 0 && grid[x][y -1] === 1){
            grid[x][y-1] = 2;
            queue.push([x,y-1,level+1]);
        }
        if ( y < n-1 && grid[x][y+1] === 1){
            grid[x][y+1] = 2;
            queue.push([x,y+1,level+1]);
        }
        minutes = Math.max(minutes,level);
    }

    // run and check if there's any fresh oranges left
    for (let i=0; i<m; i++){
        for (let j=0; j<n; j++){
            if (grid[i][j] === 1){
                return -1;
            }
        }
    }
    return minutes;
};