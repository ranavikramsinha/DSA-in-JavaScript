//* https://leetcode.com/problems/convert-1d-array-into-2d-array/

var construct2DArray = function(original, m, n) {

    if(original.length !== m * n){
        return [];
    }

    let result = Array.from({length: m}, () => new Array(n).fill(0));

    for(let i = 0; i < original.length; i++){
        let row = Math.floor(i / n);
        let col = i % n;

        result[row][col] = original[i];
    }
    
    return result;
};