//* https://leetcode.com/problems/palindromic-substrings/

var countSubstrings = function(s) {
    let n = s.length;
    let dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(-1));
    let count = 0;

    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            if(solve(s, i, j)){
                count++;
            }
        }
    }

    return count;

    function solve(s, i, j){
        if(i > j){
            return true;
        }

        if(dp[i][j] !== -1){
            return dp[i][j];
        }

        if(s[i] === s[j]){
            return dp[i][j] = solve(s, i + 1, j - 1);
        }

        return dp[i][j] = false;
    }
};