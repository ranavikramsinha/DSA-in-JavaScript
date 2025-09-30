//* https://leetcode.com/problems/find-triangular-sum-of-an-array/

//* tc : O(n^2) | sc : O(1)

var triangularSum = function(nums) {

    let n = nums.length;

    for (let level = 0; level < n - 1; level++) {
        for (let i = 0; i < n - 1 - level; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }
    }

    return nums[0];
    
};