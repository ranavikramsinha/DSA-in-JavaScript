//* https://leetcode.com/problems/interleaving-string/

var isInterleave = function(s1, s2, s3) {
    let row = s1.length;
    let col = s2.length;
    let n = s3.length;
    let dp = Array.from({length: row + 1}, () => new Array(col + 1).fill(-1));
    return solve(0, 0, s1, s2, s3);

    function solve(i, j, s1, s2, s3){
        if(i === row && j === col && i + j === n){
            return true;
        }
        if(i + j >= n){
            return false;
        }
        if(dp[i][j] !== -1){
            return dp[i][j];
        }

        let result = false;

        if(i < row && s1[i] === s3[i + j]){
            result = solve(i + 1, j, s1, s2, s3);
        }

        if(result === true){
            return dp[i][j] = result;
        }

        if(j < col && s2[j] === s3[i + j]){
            result = solve(i, j + 1, s1, s2, s3);
        }

        return dp[i][j] = result;
    }
};