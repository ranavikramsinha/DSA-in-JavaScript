//* https://leetcode.com/problems/spiral-matrix-iv/

var spiralMatrix = function(m, n, head) {
    if(m === 0 || n === 0){
    return [];
}

let matrix = Array.from({ length: m }, () => Array(n).fill(-1));
let direction = 0;
let top = 0;
let down = m - 1;
let left = 0;
let right = n - 1;

while(top <= down && left <= right){
    if(direction === 0){
        for(let i = left; head !== null && i <= right; i++){
            matrix[top][i] = head.val;
            head = head.next;
        }
        top++;
    }

    if(direction === 1){
        for(let i = top; head !== null && i <= down; i++){
            matrix[i][right] = head.val;
            head = head.next;
        }
        right--;
    }

    if(direction === 2){
        for(let i = right; head !== null && i >= left; i--){
            matrix[down][i] = head.val;
            head = head.next;
        }
        down--;
    }

    if(direction === 3){
        for(let i = down; head !== null && i >= top; i--){
            matrix[i][left] = head.val;
            head = head.next;
        }
        left++;
    }

    direction++;

    if(direction === 4){
        direction = 0;
    }

}
return matrix;
};