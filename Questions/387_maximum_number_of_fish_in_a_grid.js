//* https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/

//* tc O(m * n) | sc O(m * n) 

var findMaxFish = function(grid) {

    let m = grid.length;
    let n = grid[0].length;
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let maximumNumber = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] > 0){
                maximumNumber = Math.max(maximumNumber, dfs(i, j, grid));
            }
        }
    }

    return maximumNumber;

    function dfs(i, j, grid){
        if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0){
            return 0;
        }

        let count = grid[i][j];
        grid[i][j] = 0;

        for(let [x, y] of directions){
            let newI = i + x;
            let newJ = j + y;

            count += dfs(newI, newJ, grid);
        }

        return count;
    }  
};