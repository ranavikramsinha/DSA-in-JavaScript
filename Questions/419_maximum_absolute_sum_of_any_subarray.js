//* https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/

//* tc O(n) | sc O(1)

var maxAbsoluteSum = function(nums) {

    let n = nums.length;

    let currentMaximumSubArraySum = 0;
    let maximumSubArraySum = 0;

    let currentMinimumSubArraySum = 0;
    let minimumSubArraySum = 0;

    for(let i = 0; i < n; i++){
        currentMaximumSubArraySum = Math.max(currentMaximumSubArraySum + nums[i], nums[i]);
        maximumSubArraySum = Math.max(maximumSubArraySum, currentMaximumSubArraySum);

        currentMinimumSubArraySum = Math.min(currentMinimumSubArraySum + nums[i], nums[i]);
        minimumSubArraySum = Math.min(minimumSubArraySum, currentMinimumSubArraySum);
    }

    let ans = Math.max(maximumSubArraySum, Math.abs(minimumSubArraySum));

    return ans;
    
};