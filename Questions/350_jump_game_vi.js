//* https://leetcode.com/problems/jump-game-vi/

//* tc O(n) | sc O(n)

var maxResult = function(nums, k) {

    let n = nums.length;
    let memo = new Array(n).fill(0);
    memo[0] = nums[0];

    let queue = [];
    queue.push(0);

    for(let i = 1; i < n; i++){
        let value = nums[i];

        if(queue.length > 0 && i - k > queue[0]){
            queue.shift();
        }

        value += memo[queue[0]];

        memo[i] = value;

        while(queue.length > 0 && memo[queue[queue.length - 1]] < value){
            queue.pop();
        }

        queue.push(i);
    }

    return memo[n - 1];
    
};