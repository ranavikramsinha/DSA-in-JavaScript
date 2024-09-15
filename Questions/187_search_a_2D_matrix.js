//* https://leetcode.com/problems/search-a-2d-matrix/

var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let left = 0;
    let right = (m * n) - 1;

    while(left <= right){
        let middle = Math.trunc((left + right) / 2);

        let row = Math.trunc(middle / n);
        let column = middle % n;

        if(target > matrix[row][column]){
            left = middle + 1;
        }
        else if(target < matrix[row][column]){
            right = middle - 1;
        }
        else{
            return true;
        }
    }

    return false;
};