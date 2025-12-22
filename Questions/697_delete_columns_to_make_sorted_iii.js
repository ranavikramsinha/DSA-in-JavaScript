//* https://leetcode.com/problems/delete-columns-to-make-sorted-iii/

//* tc : O(m^2 * n) | sc : O(m)

var minDeletionSize = function(strs) {

    let n = strs.length;
    let m = strs[0].length;

    let dp = Array(m).fill(1);

    let maxKeep = 1;
    let answer = 0;

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < i; j++) {
            let valid = true;

            for (let r = 0; r < n; r++) {
                if (strs[r][j] > strs[r][i]) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }

        maxKeep = Math.max(maxKeep, dp[i]);

    }

    answer = m - maxKeep;

    return answer;

};