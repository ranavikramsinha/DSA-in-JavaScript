//* https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/

//* tc O(m * n) | sc O(m * n)
var maxMoves = function(grid) {

    let m = grid.length;
    let n = grid[0].length;
    let dp = Array.from({length: m}, () => new Array(n).fill(-1));
    let directions = [-1, 0, 1];

    let ans = 0;

    for(let i = 0; i < m; i++){
        ans = Math.max(ans, solve(i, 0, grid, dp));
    }

    return ans;

    function solve(row , col, grid, dp){
        
        if(dp[row][col] !== -1){
            return dp[row][col];
        }

        let maxMoves = 0;

        for(let direction of directions){
            let newRow = row + direction;
            let newCol = col + 1;

            if(newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[newRow][newCol] > grid[row][col]){
                maxMoves = Math.max(maxMoves, 1 + solve(newRow, newCol, grid, dp));
            }
        }

        return dp[row][col] = maxMoves;
    } 
};