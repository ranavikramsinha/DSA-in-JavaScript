//* https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/

//* tc O(n) | sc O(n)

var maximumLength = function(s) {
    const n = s.length;
    const twoD_Matrix = Array.from({ length: 26 }, () => Array(n + 1).fill(0));
    let previousCharacter = s[0];
    let length = 0;

    for(let i = 0; i < n; i++){
        const currentCharacter = s[i];

        if(currentCharacter === previousCharacter){
            length += 1;
        }
        else{
            length = 1;
            previousCharacter = currentCharacter;
        }

        twoD_Matrix[currentCharacter.charCodeAt(0) - 'a'.charCodeAt(0)][length] += 1;
    }

    let result = 0;

    for(let i = 0; i < 26; i++){
        let cumulativeSum = 0;

        for(let j = n; j >= 1; j--){
            cumulativeSum += twoD_Matrix[i][j];

            if(cumulativeSum >= 3){
                result = Math.max(result, j);
                break;
            }
        }
    }

    return result === 0 ? -1 : result;
};