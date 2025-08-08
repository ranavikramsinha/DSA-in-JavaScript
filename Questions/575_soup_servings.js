//* https://leetcode.com/problems/soup-servings/

//* tc : O(n^2) | sc : O(n^2)

var soupServings = function(n) {

    if(n > 5000){
        return 1.0;
    }

    let m = Math.ceil(n / 25);
    let memo = Array.from({ length: m + 1},() => Array(m + 1).fill(-1));

    function dfs(a, b){
        if(a <= 0 && b <= 0){
            return 0.5;
        }

        if(a <= 0){
            return 1.0;
        }

        if(b <= 0){
            return 0.0;
        }

        if(memo[a][b] !== -1){
            return memo[a][b];
        }

        memo[a][b] = 0.25 * ( dfs(a - 4, b) + dfs(a - 3, b - 1) + dfs(a - 2, b - 2) + dfs(a - 1, b - 3));

        return memo[a][b];
    }

    return dfs(m, m);
    
};