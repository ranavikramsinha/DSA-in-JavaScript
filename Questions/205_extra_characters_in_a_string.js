//* https://leetcode.com/problems/extra-characters-in-a-string/

var minExtraChar = function(s, dictionary) {
    let n = s.length;
    let dp = new Array(n + 1).fill(-1);
    let set = new Set(dictionary);

    return solve(0, s);

    function solve(index, str){
        if(index >= n){
            return 0;
        }

        if(dp[index] !== -1){
            return dp[index];
        }

        let currentString = "";
        let minExtra = n;

        for(let i = index; i < n; i++){
            currentString += str[i];

            let currentExtra = (set.has(currentString)) ? 0 : currentString.length;

            let remainExtra = solve(i + 1, str);

            let totalExtra = currentExtra + remainExtra;

            minExtra = Math.min(minExtra, totalExtra);
        }

        return dp[index] = minExtra;
    }
};