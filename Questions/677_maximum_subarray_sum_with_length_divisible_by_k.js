//* https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/

//* tc : O(n) | sc : O(k)

var maxSubarraySum = function(nums, k) {

    let n = nums.length;
    let prefix = new Array(n + 1).fill(0);
    let minimumPrefix  = new Array(k).fill(Infinity);
    minimumPrefix[0] = 0;

    let ans = -Infinity;

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    for (let i = 1; i <= n; i++) {
        let rem = i % k;

        if (minimumPrefix[rem] !== Infinity) {
            ans = Math.max(ans, prefix[i] - minimumPrefix[rem]);
        }

        minimumPrefix[rem] = Math.min(minimumPrefix[rem], prefix[i]);
    }

    return ans;
    
};