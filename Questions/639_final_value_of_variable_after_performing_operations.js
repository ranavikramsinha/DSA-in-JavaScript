//* https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

//* tc : O(n) | sc : O(1)

var finalValueAfterOperations = function(operations) {

    return operations.reduce((x, op) => x + (op[1] === '+' ? 1 : -1), 0);

};