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

//* Input Matrix:
//* [ 0, 1, 1 ]    →   Row Pattern: "SBB"    →   Map: { "SBB": 1 }
//* [ 1, 0, 0 ]    →   Row Pattern: "SBB"    →   Map: { "SBB": 2 }
//* [ 0, 1, 1 ]    →   Row Pattern: "SBB"    →   Map: { "SBB": 3 }
//* 
//* Max Rows = Maximum frequency in Map = 3
//* 