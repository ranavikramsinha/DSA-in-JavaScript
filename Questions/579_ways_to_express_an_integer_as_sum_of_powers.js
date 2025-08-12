//* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/

//* tc : O(n * n) | sc : O(n * n) where num go till n in worst case (At max states = memo[n][n])

var numberOfWays = function(n, x) {

    let modulo = 10 ** 9 + 7;
    let memo = Array.from({length: 301}, () => new Array(301).fill(-1));

    return solve(n, 1, x);

    function solve(n, num, x){
        if(n == 0){
            return 1;
        }

        let value = Math.pow(num, x);

        if(value > n){
            return 0;
        }

        if(memo[n][num] !== -1){
            return memo[n][num];
        }

        let take = solve(n - value, num + 1, x);
        let skip = solve(n, num + 1, x);

        return memo[n][num] = (take + skip) % modulo;
    }
    
};