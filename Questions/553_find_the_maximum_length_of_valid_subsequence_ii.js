//* https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/

//* tc : O(n^2) | sc : O(n * k)

var maximumLength = function(nums, k) {

    let n = nums.length;
    let maximumSubsequence = 1;
    let dp = Array.from({ length : k}, () => new Array(n).fill(1));

    for(let i = 1; i < n; i++){
        for(let j = 0; j < i; j++){
            let mod = (nums[j] + nums[i]) % k;

            dp[mod][i] = Math.max(dp[mod][i], 1 + dp[mod][j]);
            maximumSubsequence = Math.max(maximumSubsequence, dp[mod][i]);
        }
    }

    return maximumSubsequence;
    
};