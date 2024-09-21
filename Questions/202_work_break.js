//* https://leetcode.com/problems/word-break/

var wordBreak = function(s, wordDict) {
    let n = s.length;
    let dp = new Array(n + 1).fill(-1);
    let set = new Set(wordDict);

    return solve(0, s);

    function solve(index, str){
        if(index >= n){
            return true;
        }

        if(dp[index] !== -1){
            return dp[index];
        }

        if(set.has(str)){
            return true;
        }

        for(let length = 1; length <= n; length++){
            let temp = str.substring(index, index + length);

            if(set.has(temp) && solve(index + length, str)){
                return dp[index] = true;
            }
        }

        return dp[index] = false;
    }
};