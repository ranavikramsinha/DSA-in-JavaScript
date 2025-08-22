//* https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/

//* tc : O(row * col) | sc : O(1)

var minimumArea = function(grid) {

    let m = grid.length;
    let n = grid[0].length;

    let minRow = m;
    let maxRow = -1;
    let minCol = n;
    let maxCol = -1;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 1){
                minRow = Math.min(minRow, i);
                maxRow = Math.max(maxRow, i);

                minCol = Math.min(minCol, j);
                maxCol = Math.max(maxCol, j);
            }
        }
    }

    return (maxRow - minRow + 1) * (maxCol - minCol + 1);
    
};