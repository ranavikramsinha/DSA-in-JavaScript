//* https://leetcode.com/problems/count-the-number-of-the-ideal-arrays/

//* tc O(M (L + logM)) | sc O(L + M)

var idealArrays = function(n, maxValue) {

    let dp = Array.from({ length: 15 }, () => Array(10001).fill(0));
    let prefixSum = Array.from({ length: 15 }, () => Array(10001).fill(0));
    let totalSubsequenceCountFromStartingValue = Array(15).fill(0);
    let modulo = 10 ** 9 + 7;

    for (let i = 1; i <= 10000; i++){
        dp[1][i] = 1;
        prefixSum[1][i] = i;
    }

    for (let i = 2; i < 15; i++){
        for (let j = i; j <= 10000; j++){
            dp[i][j] = prefixSum[i - 1][j - 1];
            prefixSum[i][j] = (dp[i][j] + prefixSum[i][j - 1]) % modulo;
        }
    }

    for (let i = 1; i <= maxValue; i++){
        countChain(i, 1);
    }

    function countChain(lastValue, currentLength){
        totalSubsequenceCountFromStartingValue[currentLength]++;
        for (let i = 2 * lastValue; i <= maxValue; i += lastValue)
            countChain(i, currentLength + 1);
    }

    let result = maxValue;

    for (let i = 2; i < 15; i++){
        result = (result + totalSubsequenceCountFromStartingValue[i] * dp[i][n]) % modulo;
    }

    return result;
    
};