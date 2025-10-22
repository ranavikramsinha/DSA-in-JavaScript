//* https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/

//* tc : O(n * log(n)) | sc : O(n)

var maxFrequency = function (nums, k, numOperations) {

    let n = nums.length;
    nums.sort((a, b) => a - b);

    let map = new Map();
    let ans = 0;
    let i = 0;
    let j = 0;

    for (let num of nums) {
        while (j < n && nums[j] <= num + k) {
            map.set(nums[j], (map.get(nums[j]) || 0) + 1);
            j++;
        }

        while (i < n && nums[i] < num - k) {
            map.set(nums[i], (map.get(nums[i]) || 0) - 1);
            i++;
        }

        let curr = Math.min(j - i, map.get(num) + numOperations);
        ans = Math.max(ans, curr);
    }


    j = 0;

    for (let i = 0; i < n; i++) {
        while (j < n && nums[j] <= nums[i] + 2 * k) {
            j++;
        }
        
        let curr = Math.min(j - i, numOperations);
        ans = Math.max(ans, curr);
    }

    return ans;
};