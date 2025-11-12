//* https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/

//* tc : O(n^2 * log(max(nums))) | sc : O(1)

var minOperations = function(nums) {

    let n = nums.length;
    let c = nums.reduce((r, v) => r + +(v === 1), 0);

    if (c > 0) {
        return n - c;
    }

    let result = Infinity;

    for (let i = 0, min = Math.min; i < n; i++) {
        for (let j = i + 1, g = nums[i]; j < n; j++) {
            if ((g = gcd(g, nums[j])) === 1) {
                result = min(result, j - i);
                break;
            }
        }
    }

    return isFinite(result) ? result + n - 1 : -1;

    function gcd(a, b) {
        while (b) {
            [a, b] = [b, a % b];
        }
        
        return a;
    };
    
};