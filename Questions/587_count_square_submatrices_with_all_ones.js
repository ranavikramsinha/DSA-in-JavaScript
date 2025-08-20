//* https://leetcode.com/problems/count-square-submatrices-with-all-ones/

//* tc : O(m * n) | sc : O(m * n)

var countSquares = function(matrix) {

    let row = matrix.length;
    let col = matrix[0].length;

    let memo = Array.from({ length: row}, () => Array(col).fill(-1));

    let result = 0;

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            result += solve(i, j);
        }
    }

    return result;

    function solve(i, j){
        if(i >= row || j >= col){
            return 0;
        }

        if(matrix[i][j] === 0){
            return 0;
        }

        if(memo[i][j] !== -1){
            return memo[i][j];
        }

        let right = solve(i, j + 1);
        let diagonal = solve(i + 1, j + 1);
        let below = solve(i + 1, j);

        return memo[i][j] = 1 + Math.min(right, diagonal, below);
    }
    
};