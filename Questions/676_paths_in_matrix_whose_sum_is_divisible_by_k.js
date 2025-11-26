//* https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/

//* tc : O(m * n * k) | sc : O(m * n * k)

var numberOfPaths = function(grid, k) {
    
    let m = grid.length;
    let n = grid[0].length;
    let MOD = 1000000000 + 7;

    let dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => new Array(k).fill(0))
    );

    dp[0][0][grid[0][0] % k] = 1;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            for (let Remainder = 0; Remainder < k; Remainder++) {
                let ways = dp[r][c][Remainder];

                if (ways === 0) {
                    continue;
                }

                if (r + 1 < m) {
                    let newRemainder = (Remainder + grid[r + 1][c]) % k;

                    dp[r + 1][c][newRemainder] = (dp[r + 1][c][newRemainder] + ways) % MOD;
                }

                if (c + 1 < n) {
                    let newRemainder = (Remainder + grid[r][c + 1]) % k;

                    dp[r][c + 1][newRemainder] = (dp[r][c + 1][newRemainder] + ways) % MOD;
                }
            }
        }
    }

    return dp[m - 1][n - 1][0];

};