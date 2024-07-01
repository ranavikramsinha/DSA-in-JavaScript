//* https://leetcode.com/problems/maximum-average-subarray-i/

var findMaxAverage = function(nums, k) {

    let sum = 0
    
    for(let i = 0; i < k; i++){
        sum += nums[i]
    }

    let max = sum

    for(let i = k; i < nums.length; i++){
        sum = sum - nums[i - k] + nums[i]
        max = Math.max(max, sum)
    }

    return max / k
    
};

console.log(findMaxAverage([1, 2, 3, 4, 5], 3))