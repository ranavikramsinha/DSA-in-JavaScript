//* https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {

    let m = matrix.length;
    let n = m;

    for(let i = 0; i < m; i++){
        for(let j = i; j < n; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for(let i = 0; i < n; i++){
        matrix[i].reverse();
    }
    
};