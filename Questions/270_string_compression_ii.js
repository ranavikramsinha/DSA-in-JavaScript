//* https://leetcode.com/problems/string-compression-ii/

var getLengthOfOptimalCompression = function(s, k) {
    let n = s.length;
    let dp = Array.from({ length: n + 1}, () => Array(k + 1).fill(Number.MAX_SAFE_INTEGER));
    
    dp[0][0] = 0;

    for(let end = 1; end <= n; end++){
        for(let remainingDeletions = 0; remainingDeletions <= k; remainingDeletions++){
            let sameCharCount = 0;
            let currentDeletions = 0;

            for(let start = end; start >= 1; start--){
                if(s[start - 1] === s[end - 1]){
                    sameCharCount++;
                }
                else{
                    currentDeletions++;
                }

                if(remainingDeletions - currentDeletions >= 0){
                    let compressed = 1 + (sameCharCount >= 100 ? 3 : sameCharCount >= 10 ? 2 : sameCharCount >= 2 ? 1 : 0);

                    dp[end][remainingDeletions] = Math.min(
                        dp[end][remainingDeletions], 
                        dp[start - 1][remainingDeletions - currentDeletions] + compressed
                    );
                }
            }

            if(remainingDeletions > 0){
                dp[end][remainingDeletions] = Math.min(dp[end][remainingDeletions], dp[end - 1][remainingDeletions - 1]);
            }
        }
    }

    return dp[n][k];
    
};