//* https://leetcode.com/problems/count-total-number-of-colored-cells/

//* tc O(1) | sc O(1)

var coloredCells = function(n) {

    return 1 + (2 * (n - 1)) * n;
    
};