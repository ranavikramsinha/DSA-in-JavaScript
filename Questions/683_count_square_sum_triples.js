//* https://leetcode.com/problems/count-square-sum-triples/

//* tc : O(n^2) | sc : O(1)

var countTriples = function(n) {

    let count = 0;

    for(let i = 1; i <= n - 1; i++) {
        for(let j = i + 1; j <= n; j++) {
            let k = Math.sqrt((i * i) + (j * j));

            if(Number.isInteger(k) && k <= n) {
                count += 2;
            }
        }
    }

    return count;
    
};