//* https://leetcode.com/problems/pascals-triangle/

var generate = function(numRows) {

    let result = new Array(numRows);

    for(let i = 0; i < numRows; i++){
        result[i] = new Array(i + 1).fill(1);

        for(let j = 1; j < i; j++){
            result[i][j] = result[i - 1][j] + result[i - 1][j - 1];
        }
    }

    return result;
    
};