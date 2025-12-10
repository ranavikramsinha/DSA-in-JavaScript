//* https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations/

//* tc : O(n) | sc : O(1)

var countPermutations = function(complexity) {

    const n = complexity.length;
    const modulo = 1e9 + 7;
    const first = complexity[0];
   
    for (let i = 1; i < n; i++) {
        if (complexity[i] <= first) {
            return 0;
        }
    }

    let count = 1;

    for (let i = 2; i < n; i++) {
        count = (count * i) % modulo;
    }

    return count;

};