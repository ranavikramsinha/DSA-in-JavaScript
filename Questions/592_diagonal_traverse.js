//* https://leetcode.com/problems/diagonal-traverse/

//* tc : O(m * n) | sc : O(m * n)

var findDiagonalOrder = function(mat) {

    let m = mat.length;
    let n = mat[0].length;
    let mapping = new Map();
    let result = [];

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            let key = i + j;

            if(!mapping.has(key)){
                mapping.set(key, []);
            }

            mapping.get(key).push(mat[i][j]);
        }
    }

    let changeDirection = true;

    for(let [_, arr] of mapping){
        if(changeDirection){
            arr.reverse();
        }

        for(let num of arr){
            result.push(num);
        }

        changeDirection = !changeDirection;
    }

    return result;
    
};