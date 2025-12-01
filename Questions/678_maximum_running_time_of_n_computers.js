//* https://leetcode.com/problems/maximum-running-time-of-n-computers/

//* tc : O(m * logm) | sc : O(n) where m is the number of batteries

var maxRunTime = function(n, batteries) {

    batteries.sort((a, b) => a - b);

    let extra = batteries.slice(0, batteries.length - n).reduce((acc, x) => acc + x, 0);

    let live = batteries.slice(batteries.length - n);

    for (let i = 0; i < n - 1; i++) {
        let gap = live[i + 1] - live[i];

        if (Math.floor(extra / (i + 1)) < gap) {
            return live[i] + Math.floor(extra / (i + 1));
        }

        extra -= (i + 1) * gap;
    }

    return live[n - 1] + Math.floor(extra / n);
    
};