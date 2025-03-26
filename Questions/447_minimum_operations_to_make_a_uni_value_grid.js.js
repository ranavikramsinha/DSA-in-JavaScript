//* https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/

//* tc O(m *n * log(m * n) | sc O(n)

var minOperations = function(grid, x) {

    let m = grid.length;
    let n = grid[0].length;
    let arrLen = m * n;
    let arr = [];
    let result = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] % x !== grid[0][0] % x){
                return -1;
            }

            arr.push(grid[i][j]);
        }
    }

    arr.sort((a, b) => a - b);

    let median = arr[Math.trunc(arrLen / 2)];

    for(let num of arr){
        result += Math.abs(median - num) / x;
    }

    return result;
    
};