//* https://leetcode.com/problems/count-unguarded-cells-in-the-grid/

//* tc O(m * n) | sc O(m * n)

var countUnguarded = function(m, n, guards, walls) {

    let grid = Array.from({length: m}, () => Array(n).fill(0));

    for(let [i, j] of guards){
        grid[i][j] = 'G';
    }

    for(let [i, j] of walls){
        grid[i][j] = 'W';
    }

    for(let [guardRows, guardCols] of guards){
        dfs(guardRows - 1, guardCols, m, n, 'UP');
        dfs(guardRows + 1, guardCols, m, n, 'DOWN');
        dfs(guardRows, guardCols - 1, m, n, 'LEFT');
        dfs(guardRows, guardCols + 1, m, n, 'RIGHT');
    }

    let unguardedCount = 0;

    for(let row = 0; row < m; row++){
        for(let col = 0; col < n; col++){
            if(grid[row][col] === 0){
                unguardedCount++;
            }
        }
    }

    return unguardedCount;
    

    function dfs(row, col, rows, cols, direction){
        if(row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'G' || grid[row][col] === 'W'){
            return;
        }

        grid[row][col] = 'Visited';

        if(direction === 'UP'){
            dfs(row - 1, col, rows, cols, direction);
        }
        else if(direction === 'DOWN'){
            dfs(row + 1, col, rows, cols, direction);
        }
        else if(direction === 'LEFT'){
            dfs(row, col - 1, rows, cols, direction);
        }
        else if(direction === 'RIGHT'){
            dfs(row, col + 1, rows, cols, direction);
        }
    }
};