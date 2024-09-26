//* https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = function(s) {
    let n = s.length;
    let dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(-1));
    let maxLength = -Infinity;
    let startingPoint = -1;

    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            if(solve(s, i, j) === true){
                if(j - i + 1 > maxLength){
                    maxLength = j - i + 1;
                    startingPoint = i;
                }
            }
        }
    }

    return s.substring(startingPoint, startingPoint + maxLength);

    function solve(s, i, j){
        if(i >= j){
            return true;
        }

        if(dp[i][j] !== -1){
            return dp[i][j];
        }

        if(s[i] === s[j]){
            return dp[i][j] = solve(s, i + 1, j - 1);
        }

        return false;
    }
};