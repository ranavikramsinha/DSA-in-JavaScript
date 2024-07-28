//* https://leetcode.com/problems/kth-largest-element-in-an-array/

var findKthLargest = function(nums, k) {

    nums.sort((a,b) => b - a)

    const largestKthNumber = nums[k - 1]

    return largestKthNumber

};