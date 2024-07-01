//* https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

var maxVowels = function(s, k) {

    const vowels = new Set(["a", "e", "i", "o", "u"])

    let presentVowelCount = 0
    let maxVowels = 0

    for(let i = 0; i < k; i++){
        if(vowels.has(s[i])){
            presentVowelCount++
        }

        maxVowels = presentVowelCount

        for(let i = k; i < s.length; i++){
            if(vowels.has(s[i])){
                presentVowelCount++
            }

            if(vowels.has(s[i-k])){
                presentVowelCount--
            }
        }

        maxVowels = Math.max(maxVowels, presentVowelCount)
    }

    return maxVowels / k
    
};