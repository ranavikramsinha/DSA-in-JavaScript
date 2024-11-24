//* https://leetcode.com/problems/maximum-matrix-sum/

//* tc O(n^2) | sc O(1)

var maxMatrixSum = function(matrix) {
    let n = matrix.length;
    let sumOfAllNumbers = 0;
    let minimumNumberInMatrix = Infinity;
    let totalNegativeNumbers = 0;

    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            let currentNumber = matrix[i][j];
            let absValue = Math.abs(currentNumber);

            sumOfAllNumbers += absValue;

            if (currentNumber < 0){
                totalNegativeNumbers++;
            }

            minimumNumberInMatrix = Math.min(minimumNumberInMatrix, absValue);
        }
    }

    return sumOfAllNumbers - (totalNegativeNumbers % 2 === 0 ? 0 : 2 * minimumNumberInMatrix);
};