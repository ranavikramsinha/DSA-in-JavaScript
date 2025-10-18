//* https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/

//* tc : O(n * log(n)) | sc : O(1)

var maxDistinctElements = function(nums, k) {

    nums.sort((a, b) => a - b);

    let current = -Infinity;
    let count = 0;

    for (let x of nums) {
        const start = x - k;
        const end = x + k;

        current = Math.max(current, start);

        if (current <= end) {
            count += 1;
            current += 1;
        }
    }

    return count;
};