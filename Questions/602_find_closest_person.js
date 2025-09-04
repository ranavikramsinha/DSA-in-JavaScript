//* https://leetcode.com/problems/find-closest-person/

//* tc : O(1) | sc : O(1)

var findClosest = function(x, y, z) {

    let a = Math.abs(x - z);
    let b = Math.abs(y - z);
    let value = (a < b) ? 1 : 0;

    return a === b ? 0 : 2 - value;
    
};