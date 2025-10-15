//* https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/

//* tc : O(n * log(n)) | sc : O(n)

var maxIncreasingSubarrays = function(nums) {

    let n = nums.length;
    let subarrays = [];
    let i = 0;

    while (i < n) {
        let j = i + 1;

        while (j < n && nums[j] > nums[j - 1]) {
            j++;
        }

        subarrays.push(j - i);
        i = j;
    }

    let left = 1;
    let right = Math.floor(n / 2);
    let ans = 0;

    function isValid(k) {
        for (let s = 0; s < subarrays.length; s++) {
            if (subarrays[s] >= 2 * k) {
                return true;
            }

            if (s + 1 < subarrays.length && subarrays[s] >= k && subarrays[s + 1] >= k) {
                return true;
            }
        }

        return false;
    };

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (isValid(mid)) {
            ans = mid;
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return ans;
};