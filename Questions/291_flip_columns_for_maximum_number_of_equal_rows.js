//* https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/

//* tc O(m * n) | sc O(m * n)

var maxEqualRowsAfterFlips = function(matrix) {
    
    let map = new Map();
    
    let m = matrix.length;
    let n = matrix[0].length;

    for(let row of matrix){
        let rowWisePattern = "";

        let firstCellValueOfTheRow = row[0];

        for(let col = 0; col < n; col++){
            rowWisePattern += (row[col] === firstCellValueOfTheRow) ? "Similar" : "Different";
        }

        map.set(rowWisePattern, (map.get(rowWisePattern) || 0) + 1);
    }

    let maxRows = 0;

    for(let [key, value] of map){
        maxRows = Math.max(maxRows, value);
    }

    return maxRows;
};