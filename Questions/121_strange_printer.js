//* https://leetcode.com/problems/strange-printer/

var strangePrinter = function(s) {
    let n = s.length;
    let dp = Array.from({length: n}, () => new Array(n).fill(-1));

    function solve(l, r, s){
        if(l === r){
            return 1;
        }

        if(l > r){
            return 0;
        }

        if(dp[l][r] !== -1){
            return dp[l][r];
        }

        let i = l + 1;

        while(i <= r && s[i] === s[l]){
            i++;
        }

        if(i === r + 1){
            return 1;
        }

        let sameChar = 1 + solve(i, r, s);
        let diffChar = Infinity;

        for(let j = i; j <= r; j++){
            if(s[j] === s[l]){
                let result = solve(i, j - 1, s) + solve(j, r, s);
                diffChar = Math.min(diffChar, result)
            }
        }

        dp[l][r] = Math.min(sameChar, diffChar);
        return dp[l][r];
    }

    return solve(0, n - 1, s);
};