//* https://leetcode.com/problems/triangle/

//* tc : O(n^2) | sc : O(n)

var minimumTotal = function(triangle) {

    let n = triangle.length;
    let dp = triangle[n - 1].slice();

    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
        }
    }
    
    return dp[0];
    
};