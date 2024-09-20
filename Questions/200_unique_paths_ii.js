//* https://leetcode.com/problems/unique-paths-ii/

var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    let dp = Array.from({length: m}, () => new Array(n).fill(-1));

    return solve(0, 0, obstacleGrid);

    function solve(i , j, obstacleGrid){
        if(i < 0 || i >= m || j < 0 || j >= n || obstacleGrid[i][j] !== 0){
            return 0;
        }

        if(dp[i][j] !== -1){
            return dp[i][j];
        }

        if(i === m - 1 && j === n - 1){
            return 1;
        }

        let right = solve(i, j + 1, obstacleGrid);
        let bottom = solve(i + 1, j, obstacleGrid);

        dp[i][j] = right + bottom;

        return dp[i][j];
    }
};