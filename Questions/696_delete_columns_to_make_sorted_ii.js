//* https://leetcode.com/problems/delete-columns-to-make-sorted-ii/

//* tc : O(n * m) | sc : O(n)

var minDeletionSize = function(strs) {

    let n = strs.length;
    let m = strs[0].length;

    let count = 0;
    let ordered = Array(n - 1).fill(false);

    for (let column = 0; column < m; column++) {
        let needDelete = false;

        for (let row = 0; row < n - 1; row++) {
            if (!ordered[row] && strs[row][column] > strs[row + 1][column]) {
                needDelete = true;
                count++;

                break;
            }
        }

        if (!needDelete) {
            for (let row = 0; row < n - 1; row++) {
                if (!ordered[row] && strs[row][column] < strs[row + 1][column]) {
                    ordered[row] = true;
                }
            }
        }
    }

    return count;
    
};