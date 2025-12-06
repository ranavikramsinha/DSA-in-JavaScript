//* https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k/

//* tc : O(n) | sc : O(n) 

var countPartitions = function(nums, k) {

    let n = nums.length;
    
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    
    let prefix = new Array(n + 1).fill(0);
    prefix[0] = 1;
    
    let left = 0;

    let minimumDeque = [];
    let maximumDeque = [];

    let modulo = 1e9 + 7;
    
    for (let right = 0; right < n; right++) {
        while (minimumDeque.length && nums[minimumDeque[minimumDeque.length - 1]] >= nums[right]) {
            minimumDeque.pop();
        }

        minimumDeque.push(right);
        
        while (maximumDeque.length && nums[maximumDeque[maximumDeque.length - 1]] <= nums[right]) {
            maximumDeque.pop();
        }

        maximumDeque.push(right);
        
        while (nums[maximumDeque[0]] - nums[minimumDeque[0]] > k) {
            left++;

            if (minimumDeque[0] < left) {
                minimumDeque.shift();
            }

            if (maximumDeque[0] < left) {
                maximumDeque.shift();
            }
        }
        
        let leftPrefix = left > 0 ? prefix[left - 1] : 0;
        dp[right + 1] = (prefix[right] - leftPrefix + modulo) % modulo;
        
        prefix[right + 1] = (prefix[right] + dp[right + 1]) % modulo;
    }
    
    return dp[n];

};