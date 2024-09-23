//* https://leetcode.com/problems/pascals-triangle-ii/

var getRow = function(rowIndex) {

    let previous = [];

    for(let i = 0; i < rowIndex + 1; i++){
        let current = new Array(i + 1).fill(1);

        for(let j = 1; j < i; j++){
            current[j] = previous[j] + previous[j -1];
        }

        previous = current;
    }

    return previous;
    
};