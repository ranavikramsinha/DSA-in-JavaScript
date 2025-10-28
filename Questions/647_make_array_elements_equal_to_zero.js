//* https://leetcode.com/problems/make-array-elements-equal-to-zero/

//* tc :  O(n) | sc : O(1)

var countValidSelections = function(nums) {

    let validCount = 0;
    let sum = nums.reduce((x, y) => x + y, 0);
    let left = 0;
    let right = sum;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (left - right === 1 || right - left === 1) {
                validCount++;
            }
            else if (left === right) {
                validCount += 2;
            }
        }
        else {
            left += nums[i];
            right -= nums[i];
        }
    }

    return validCount;
    
};