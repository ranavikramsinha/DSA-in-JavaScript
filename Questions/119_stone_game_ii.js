//* https://leetcode.com/problems/stone-game-ii

var stoneGameII = function(piles) {
    let n = piles.length;
    let dp = Array.from({length: 2}, () => Array.from({length: n + 1}, () => new Array(n + 1).fill(-1)));

    function solve(piles, person, i, M){
        if(i >= n){
            return 0;
        }

        if(dp[person][i][M] !== -1){
            return dp[person][i][M];
        }

        let result = (person === 1) ? -1 : Infinity;
        let stones = 0;

        for(let x = 1; x <= Math.min(2 * M, n - i); x++){
            stones += piles[i + x - 1];

            if(person === 1){
                result = Math.max(result, stones + solve(piles, 0, i + x, Math.max(M, x)));
            }
            else{
                result = Math.min(result, solve(piles, 1, i + x, Math.max(M, x)));
            }
        }

        dp[person][i][M] = result;
        return dp[person][i][M];
    }

    return solve(piles, 1, 0, 1);
};