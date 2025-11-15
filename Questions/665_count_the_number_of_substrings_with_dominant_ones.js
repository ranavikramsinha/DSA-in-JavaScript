//* https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/

//* tc : O(n * sqrt(n)) | sc : O(n)

var numberOfSubstrings = function(s) {

    let n = s.length;
    let result = 0;
    let dp = Array(n + 1).fill(-1);

    for (let i = 0; i < n; i++) {
        if (i === 0 || s[i - 1] === '0'){
            dp[i + 1] = i;
        }
        else{
            dp[i + 1] = dp[i];
        }
    }

    for (let i = 1; i <= n; i++) {
        let count0 = (s[i - 1] === '0') ? 1 : 0;
        let j = i;

        while (j > 0 && count0 * count0 <= n) {
            let count1 = (i - dp[j]) - count0;

            if (count0 * count0 <= count1) {
                result += Math.min(j - dp[j], count1 - count0 * count0 + 1);
            }

            j = dp[j];
            count0++;
        }
    }

    return result;
    
};