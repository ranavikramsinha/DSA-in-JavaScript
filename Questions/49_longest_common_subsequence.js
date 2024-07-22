//* https://leetcode.com/problems/longest-common-subsequence/description/

var longestCommonSubsequence = function(text1, text2) {

    const length1 = text1.length
    const length2 = text2.length

    const arr = Array.from({length: length1 + 1}, () => Array(length2 + 1).fill(0))

    for(let i = 1; i <= length1; i++){
        for(let j = 1; j <= length2; j++){
            if(text1[i-1] === text2[j-1]){
                arr[i][j] = arr[i-1][j-1] + 1
            }
            else{
                arr[i][j] = Math.max(arr[i-1][j], arr[i][j-1])
            }
        }
    }

    return arr[length1][length2]
    
};