//* https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/

//* DFS :- tc O(2 ^ m * n) | sc O(m * n)

var numWays = function(words, target) {

    let n = words[0].length;
    let m = target.length;
    let modulee = 10 ** 9 + 7;

    let frequency = Array.from({ length: 26}, () => new Array(n).fill(0));

    for(let j = 0; j < n; j++){
        for(let word of words){
            let i = word.charCodeAt(j) - 'a'.charCodeAt(0);
            frequency[i][j]++;
        }
    }

    let memo = Array.from({ length: m + 1}, () => new Array(n + 1).fill(-1));

    return solve(0, 0);

    function solve(i, j){
        if(i === m){
            return 1;
        }

        if(j === n){
            return 0;
        }

        if(memo[i][j] !== -1){
            return memo[i][j];
        }

        let charIndex = target.charCodeAt(i) - 'a'.charCodeAt(0);
        let take = (frequency[charIndex][j] * solve(i + 1, j + 1)) % modulee;

        let notTake = solve(i, j + 1) % modulee;

        memo[i][j] = (take + notTake) % modulee;

        return memo[i][j];
    }
    
};