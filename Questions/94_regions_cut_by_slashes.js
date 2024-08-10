//* https://leetcode.com/problems/regions-cut-by-slashes/

var regionsBySlashes = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let regions = 0;
    let matrix = Array.from({length: rows * 3}, () => Array(cols * 3).fill(0));
    // let dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];

    function dfs(matrix, i, j){
        if(i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length || matrix[i][j] === 1){
            return;
        }

        matrix[i][j] = 1;

        dfs(matrix, i, j + 1);
        dfs(matrix, i, j - 1);
        dfs(matrix, i + 1, j);
        dfs(matrix, i - 1, j);

        // for(const dir of dirs){
        //     let newI = i + dir[0];
        //     let newJ = j + dir[1];
        //     dfs(matrix, newI, newJ);
        // }
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === '/'){
                matrix[i * 3][(j * 3) + 2] = 1;
                matrix[(i * 3) + 1][(j * 3) + 1] = 1;
                matrix[(i * 3) + 2][j * 3] = 1;
            }
            else if(grid[i][j] === '\\'){
                matrix[i * 3][j * 3] = 1;
                matrix[(i * 3) + 1][(j * 3) + 1] = 1;
                matrix[(i * 3) + 2][(j * 3) + 2] = 1;
            }
        }
    }

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                dfs(matrix, i, j);
                regions += 1;
            }
        }
    }

    return regions;
};