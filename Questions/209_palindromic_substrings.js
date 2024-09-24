//* https://leetcode.com/problems/palindromic-substrings/

//* recursion + memoization
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

//* bottom up
var countSubstrings = function(s) {
    let n = s.length;
    let dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(-1));
    let count = 0;

    for(let length = 1; length <= n; length++){
        for(let i = 0; i + length - 1 < n; i++){
            let j = i + length - 1;

            if(i === j){
                dp[i][j] = true;
            }
            else if(i + 1 === j){
                dp[i][j] = (s[i] === s[j]);
            }
            else{
                dp[i][j] = (s[i] === s[j] && dp[i + 1][j - 1]);
            }

            if(dp[i][j] === true){
                count++;
            }
        }
    }

    return count;
};