//* https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/

//* tc : O(n) | sc : O(1)

var minNumberOperations = function(target) {

    let n = target.length;
    let count = target[0];

  
    for (let i = 1; i < n; i++) {
        count += Math.max(0, target[i] - target[i - 1]);
    }

    return count;
    
};