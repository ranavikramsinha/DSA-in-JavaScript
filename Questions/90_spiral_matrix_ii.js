//* https://leetcode.com/problems/spiral-matrix-ii/

var generateMatrix = function(n) {
    if(n === 0){
        return [];
    }
    let m = n;
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let dir = 0;
    let top = 0;
    let down = m - 1;
    let left = 0;
    let right = n - 1;
    let counter = 1;

    while(top <= down && left <= right){
        if(dir === 0){
            for(let i = left; i <= right; i++){
                matrix[top][i] = counter++;
            }
            top++;
        }

        if(dir === 1){
            for(let i = top; i <= down; i++){
                matrix[i][right] = counter++;
            }
            right--;
        }

        if(dir === 2){
            for(let i = right; i >= left; i--){
                matrix[down][i] = counter++;
            }
            down--;
        }

        if(dir === 3){
            for(let i = down; i >= top; i--){
                matrix[i][left] = counter++;
            }
            left++;
        }

        dir++;

        if(dir === 4){
            dir = 0;
        }

    }
    return matrix;
};