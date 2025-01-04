//* https://leetcode.com/problems/count-palindromic-subsequences/

//* tc O(n) | sc O(1)

var countPalindromes = function(s) {

    let n = s.length;
    let count = 0;
    let modulee = 10 ** 9 + 7;

    for(let firstDigit = 0; firstDigit <= 9; firstDigit++){
        for(let secondDigit = 0; secondDigit <= 9; secondDigit++){

            let middleChar = -1;

            let palindromePattern = [firstDigit.toString(), secondDigit.toString(), middleChar, secondDigit.toString(), firstDigit.toString()];

            let dp = [1, 0, 0, 0, 0, 0];

            for(let i = 0; i < n; i++){
                for(let j = 4; j >= 0; j--){
                    if(s[i] === palindromePattern[j] || j === 2){
                        dp[j + 1] = (dp[j + 1] + dp[j]) % modulee;
                    }
                }
            }

            count = (count + dp[5]) % modulee;

        }
    }
    
    return count;
};