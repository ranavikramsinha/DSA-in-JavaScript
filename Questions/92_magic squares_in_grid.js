//* https://leetcode.com/problems/magic-squares-in-grid/

var numMagicSquaresInside = function(grid) {
    let rows = grid.length;
    let cols = grid.length;
    let count = 0;

    function isMagicGrid(grid, a, b){
        let set = new Set();
        let num;

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                num = grid[a + i][b + j];
                if(num < 1 || num > 9 || set.has(num)){
                    return false;
                }
                set.add(num);
            }
        }

        let sum = 15; //* sum = grid[a][b] + grid[a][b + 1] + grid[a][b + 2];

        for(let i = 0; i < 3; i++){
            if(grid[a + i][b] + grid[a + i][b + 1] + grid[a + i][b + 2] !== sum){
                return false;
            }

            if(grid[a][b + i] + grid[a + 1][b + i] + grid[a + 2][b + i] !== sum){
                return false;
            }
        }

        if(grid[a][b] + grid[a + 1][b + 1] + grid[a + 2][b + 2] !== sum){
            return false;
        }

        if(grid[a][b + 2] + grid[a + 1][b + 1] + grid[a + 2][b] !== sum){
            return false;
        }

        return true;
    }

    for(let i = 0; i <= rows - 3; i++){
        for(let j = 0; j <= cols - 3; j++){
            if(isMagicGrid(grid, i, j)){
                count++;
            }
        }
    }

    return count;
};