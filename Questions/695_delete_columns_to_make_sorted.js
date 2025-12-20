//* https://leetcode.com/problems/delete-columns-to-make-sorted

//* tc : O(n * m) | sc : O(1)

var minDeletionSize = function(strs) {

    let n = strs.length;
    let m = strs[0].length;

    let count = 0;

    for (let column = 0; column < m; column++) {
        for (let row = 0; row < n - 1; row++) {
            if (strs[row][column] > strs[row + 1][column]) {
                count++;
                
                break;
            }
        }
    }

    return count;
    
};