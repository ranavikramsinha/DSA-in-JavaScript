//* https://leetcode.com/problems/unique-paths/

var uniquePaths = function(m, n) {
    let dp = Array.from({length: m}, () => new Array(n).fill(-1));
    return solve(0, 0, m, n);

    function solve(i , j, m, n){
        if(i < 0 || i >= m || j < 0 || j >= n){
            return 0;
        }

        if(i === m - 1 && j === n - 1){
            return 1;
        }

        if(dp[i][j] !== -1){
            return dp[i][j];
        }

        let right = solve(i, j + 1, m, n);
        let down = solve(i + 1, j, m, n);

        dp[i][j] = right + down;

        return dp[i][j];
    }
};