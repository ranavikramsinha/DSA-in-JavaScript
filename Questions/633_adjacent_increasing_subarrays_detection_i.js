//* https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/

//* tc : O(n) | sc : O(1)

var hasIncreasingSubarrays = function(nums, k) {

    let n = nums.length;

    if (n < 2 * k) {
        return false;
    }

    let i = 0;

    while (i <= n - 2 * k) {
        let j = i + 1;

        while (j < i + k && nums[j] > nums[j - 1]) {
            j++;
        }

        if (j < i + k) {
            i = j;
            continue;
        }

        let m = i + k + 1;

        while (m < i + 2 * k && nums[m] > nums[m - 1]) {
            m++;
        }

        if (m === i + 2 * k) {
            return true;
        }

        i = m - k;
    }

    return false;

};