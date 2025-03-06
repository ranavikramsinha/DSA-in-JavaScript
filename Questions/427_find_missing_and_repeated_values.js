//* https://leetcode.com/problems/find-missing-and-repeated-values/

//* tc O(n^2) | sc O(1)

var findMissingAndRepeatedValues = function(grid) {

    let n = grid.length;
    let num = n * n;
    let gridSum = 0;
    let gridSquareSum = 0;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            gridSum += grid[i][j];
            gridSquareSum += grid[i][j] * grid[i][j];
        }
    }

    let sum = Math.trunc((num * (num + 1)) / 2);
    let squareSum = Math.trunc(((num * (num + 1) * (2 * num + 1))) / 6);

    let sumDifference = gridSum - sum;
    let squareSumDifference = gridSquareSum - squareSum;

    let a = Math.trunc((squareSumDifference/sumDifference + sumDifference) / 2);
    let b = Math.trunc((squareSumDifference/sumDifference - sumDifference) / 2);

    return [a, b];
    
};