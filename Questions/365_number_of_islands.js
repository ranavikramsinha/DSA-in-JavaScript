//* https://leetcode.com/problems/number-of-islands/

//* tc O(m * n) | sc O(m * n)

var numIslands = function(grid) {

    let m = grid.length;
    let n = grid[0].length;
    let count = 0;
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === "1"){
                count++;
                dfs(i, j, grid);
            }
        }
    }
    
    return count;

    function dfs(row, column, grid){
        if(row < 0 || column < 0 || row >= m || column >= n || grid[row][column] === "0"){
            return;
        }

        grid[row][column] = "0";

        for(let [rowDirection, columnDirection] of directions){
            dfs(row + rowDirection, column + columnDirection, grid);
        }
    }
    
};