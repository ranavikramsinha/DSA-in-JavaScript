//* https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

//* tc : O(n) | sc : O(1)

var longestSubarray = function(nums) {

    let n = nums.length;
    let result = 0;

    let i = 0;
    let j = 0;
    let lastIndex = -1

    while(j < n){
        if(nums[j] === 0){
            i = lastIndex + 1;
            lastIndex = j;
        }

        result = Math.max(result, j - i);
        j++;
    }

    return result;
    
};