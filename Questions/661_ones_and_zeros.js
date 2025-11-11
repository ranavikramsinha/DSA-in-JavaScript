//* https://leetcode.com/problems/ones-and-zeroes/

//* tc : O(str.length * n * m) | sc : O(n * m)

var findMaxForm = function(strs, m, n) {

    let dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));

    for (let str of strs) {
        let zeros = 0, ones = 0;

        for (let char of str) {
            if (char === '0') {
                zeros++;
            }
            else {
                ones++;
            }
        }

        for (let i = m; i >= zeros; i--) {
            for (let j = n; j >= ones; j--) {
                dp[i][j] = Math.max(dp[i][j], 1 + dp[i - zeros][j - ones]);
            }
        }
    }

    return dp[m][n];
    
};