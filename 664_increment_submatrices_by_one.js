//* https://leetcode.com/problems/increment-submatrices-by-one/

//* tc : O(m + n^2) | sc : O(n^2) where m is each query updates only 4 cells in difference

var rangeAddQueries = function(n, queries) {

    let difference = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    for (let [row1, column1, row2, column2] of queries) {
        difference[row1][column1] += 1;
        difference[row2 + 1][column1] -= 1;
        difference[row1][column2 + 1] -= 1;
        difference[row2 + 1][column2 + 1] += 1;
    }

    let matrix = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let x1 = i === 0 ? 0 : matrix[i - 1][j];
            let x2 = j === 0 ? 0 : matrix[i][j - 1];
            let x3 = i === 0 || j === 0 ? 0 : matrix[i - 1][j - 1];
            
            matrix[i][j] = difference[i][j] + x1 + x2 - x3;
        }
    }

    return matrix;
    
};