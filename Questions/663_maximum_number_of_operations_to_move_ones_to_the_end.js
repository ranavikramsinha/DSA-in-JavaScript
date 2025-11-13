//* https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/

//* tc : O(n) | sc : O(1)

var maxOperations = function(s) {
    
    let operations = 0;
    let ones = 0;
    let n = s.length;

    for (let i = 0; i < n; i++) {
        if (s[i] === '1') {
            ones++;
        }
        else {
            if (i === 0 || s[i - 1] === '1') {
                operations += ones;
            }
        }
    }

    return operations;

};