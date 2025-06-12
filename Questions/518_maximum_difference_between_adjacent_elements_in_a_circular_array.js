//* https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/

//* tc O(n) | sc O(1)

var maxAdjacentDistance = function(nums) {

    let n = nums.length;
    let result = 0;

    for(let i = 0; i < n; i++){
        result = Math.max(result, Math.abs((nums[i]) - nums[(i + 1) % n]))
    }

    return result;
    
};