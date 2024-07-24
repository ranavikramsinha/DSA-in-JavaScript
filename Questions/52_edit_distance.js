//* https://leetcode.com/problems/edit-distance/

var minDistance = function(word1, word2) {

    m = word1.length
    n = word2.length
    const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(-1));

    return edit(word1, word2, 0, 0)

    function edit(w1, w2, i, j){

        if( i === m){
            return n - j
        }
        else if( j === n){
            return m - i
        }

        if(dp[i][j] !== -1){
            return dp[i][j]
        }

        if(w1[i] === w2[j]){
            return dp[i][j] = edit(w1, w2, i + 1, j + 1)
        }
        else{
            const insertCharacter = 1 + edit(w1, w2, i, j + 1)
            const deleteCharacter = 1 + edit(w1, w2, i + 1, j)
            const replaceCharacter = 1 + edit(w1, w2, i + 1, j + 1)

            return dp[i][j] = Math.min(insertCharacter, deleteCharacter, replaceCharacter)
        }
    }
    
};

//* var minDistance = function(word1, word2) {
//* 
//*     m = word1.length
//*     n = word2.length
//*     const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(-1));
//* 
//*     return edit(word1, word2, m, n)
//* 
//*     function edit(w1, w2, m, n){
//* 
//*         if(m === 0){
//*             return n
//*         }
//*         else if(n === 0){
//*             return m
//*         }
//* 
//*         if(dp[m][n] !== -1){
//*             return dp[m][n]
//*         }
//* 
//*         if(w1[m - 1] === w2[n - 1]){
//*             return dp[m][n] = edit(w1, w2, m - 1, n - 1)
//*         }
//*         else{
//*             const insertCharacter = 1 + edit(w1, w2, m, n - 1)
//*             const deleteCharacter = 1 + edit(w1, w2, m - 1, n)
//*             const replaceCharacter = 1 + edit(w1, w2, m - 1, n - 1)
//* 
//*             return dp[m][n] = Math.min(insertCharacter, deleteCharacter, replaceCharacter)
//*         }
//*     }
//*     
//* };