//* https://leetcode.com/problems/spiral-matrix-i/

var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let dir = 0;
    let result = [];
    let top = 0;
    let down = m - 1;
    let left = 0;
    let right = n - 1;

    while(top <= down && left <= right){
        if(dir === 0){
            for(let i = left; i <= right; i++){
                result.push(matrix[top][i]);
            }
            top++;
        }

        if(dir === 1){
            for(let i = top; i <= down; i++){
                result.push(matrix[i][right]);
            }
            right--;
        }

        if(dir === 2){
            for(let i = right; i >= left; i--){
                result.push(matrix[down][i]);
            }
            down--;
        }

        if(dir === 3){
            for(let i = down; i >= top; i--){
                result.push(matrix[i][left]);
            }
            left++;
        }

        dir++;

        if(dir === 4){
            dir = 0;
        }

    }
    return result;
};