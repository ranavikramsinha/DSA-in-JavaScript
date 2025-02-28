//* https://leetcode.com/problems/shortest-common-supersequence/

//* tc O(m * n) | sc O(m * n)

var shortestCommonSupersequence = function(str1, str2) {
    
    let m = str1.length;
    let n = str2.length;
    let memo = Array.from({ length: m}, () => new Array(n));

    return dfs(0, 0);

    function dfs(i, j){
        if(i === m){
            return str2.substring(j);
        }

        if(j === n){
            return str1.substring(i);
        }

        if(memo[i][j] !== undefined){
            return memo[i][j];
        }

        if(str1[i] === str2[j]){
            memo[i][j] = str1[i] + dfs(i + 1, j + 1);
        }
        else{
            let option1 = str1[i] + dfs(i + 1, j);
            let option2 = str2[j] + dfs(i, j + 1);

            memo[i][j] = (option1.length < option2.length) ? option1 : option2;
        }

        return memo[i][j];
    }

    return dfs(0, 0);
    
};