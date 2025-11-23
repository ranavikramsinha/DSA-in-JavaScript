//* https://leetcode.com/problems/greatest-sum-divisible-by-three/

//* tc : O(n) | sc : O(1)

var maxSumDivThree = function(nums) {

    let dp = [0, -Infinity, -Infinity];

    for (let num of nums) {
        let previous = [...dp];

        for (let r = 0; r < 3; r++) {
            let newSum = previous[r] + num;
            let newR = newSum % 3;

            dp[newR] = Math.max(dp[newR], newSum);
        }
    }

    return dp[0]
    
};