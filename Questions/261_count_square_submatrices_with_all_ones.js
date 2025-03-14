//* https://leetcode.com/problems/count-square-submatrices-with-all-ones/

var countSquares = function(matrix) {

    let m = matrix.length;
    let n = matrix[0].length;
    let ans = 0;

    let dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(i === 0 || j === 0){
                dp[i][j] = matrix[i][j];
            }
            else if(matrix[i][j] === 1){
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]);
            }

            ans += dp[i][j];
        }
    }

    return ans;
    
};