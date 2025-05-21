//* https://leetcode.com/problems/set-matrix-zeroes/

//* tc O(m * n) | sc O(1)

var setZeroes = function(matrix) {

    let m = matrix.length;
    let n = matrix[0].length;
    let isFirstRowHasZero = false;
    let isFirstColumnHasZero = false;

    for(let row = 0; row < m; row++){
        if(matrix[row][0] === 0){
            isFirstColumnHasZero = true;
        }
    }

    for(let column = 0; column < n; column++){
        if(matrix[0][column] === 0){
            isFirstRowHasZero = true;
        }
    }

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;
            }
        }
    }
    
    if(isFirstRowHasZero === true){
        for(let column = 0; column < n; column++){
            matrix[0][column] = 0;
        }
    }

    if(isFirstColumnHasZero === true){
        for(let row = 0; row < m; row++){
            matrix[row][0] = 0;
        }
    }
};

//* tc O(m * n) | sc O(m + n)

var setZeroes = function(matrix) {

    let m = matrix.length;
    let n = matrix[0].length;

    let row = new Array(m).fill(false);
    let column = new Array(n).fill(false);

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === 0){
                row[i] = true;
                column[j] = true;
            }
        }
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(row[i] || column[j]){
                matrix[i][j] = 0;
            }
        }
    }
    
};