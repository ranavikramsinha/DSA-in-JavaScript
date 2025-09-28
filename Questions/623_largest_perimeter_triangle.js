//* https://leetcode.com/problems/largest-perimeter-triangle/

//* tc : O(n * log(n)) | sc : O(1)

var largestPerimeter = function(nums) {

    nums.sort((a, b) => a - b);

    for (let i = nums.length - 1; i >= 2; i--) {

        let a = nums[i - 2], b = nums[i - 1], c = nums[i];

        if (a + b > c) {
            return a + b + c;
        }
    }

    return 0;
};