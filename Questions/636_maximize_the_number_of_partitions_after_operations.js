//* https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/

//* tc : O(26 * n) | sc : O(n)

var maxPartitionsAfterOperations = function(s, k) {

    let memo = new Map();

    let countBits = (x) => x.toString(2).split('1').length - 1;

    return dp(0, 0, true) + 1;

    function dp(i, mask, canChange) {
        if (i === s.length) {
            return 0;
        }

        let key = `${i},${mask},${canChange}`;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let bit = s.charCodeAt(i) - 97;
        let newMask = mask | (1 << bit);
        let result = 0;

        if (countBits(newMask) > k) {
            result = 1 + dp(i + 1, 1 << bit, canChange);
        }
        else {
            result = dp(i + 1, newMask, canChange);
        }

        if (canChange) {
            for (let j = 0; j < 26; j++) {
                let changed = mask | (1 << j);

                if (countBits(changed) > k) {
                    result = Math.max(result, 1 + dp(i + 1, 1 << j, false));
                }
                else {
                    result = Math.max(result, dp(i + 1, changed, false));
                }
            }
        }

        memo.set(key, result);
        return result;
    };
};