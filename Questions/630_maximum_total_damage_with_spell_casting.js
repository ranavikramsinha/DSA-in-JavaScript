//* https://leetcode.com/problems/maximum-total-damage-with-spell-casting/

//* tc : O(n^2) | sc : O(n)

var maximumTotalDamage = function(power) {

    let frequency = new Map();

    for (let p of power) {
        frequency.set(p, (frequency.get(p) || 0) + p);
    }

    let unique = Array.from(frequency.keys()).sort((a, b) => a - b);
    let n = unique.length;
    let dp = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let currentPower = unique[i];
        let currentDamage = frequency.get(currentPower);
        let skip = i > 0 ? dp[i - 1] : 0;
        let take = currentDamage;
        let j = i - 1;

        while (j >= 0 && Math.abs(unique[j] - currentPower) <= 2) {
            j--;
        }

        if (j >= 0) {
            take += dp[j];
        }

        dp[i] = Math.max(skip, take);
    }

    return dp[n - 1];

};