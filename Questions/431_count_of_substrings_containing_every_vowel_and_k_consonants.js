//* https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/

//* tc O(n) | sc O(n)

var countOfSubstrings = function(word, k) {

    let n = word.length;
    let map = new Map();
    let nextConsonantIdx = new Array(n);
    let lastConsonantIdx = n;

    for(let i = n - 1; i >= 0; i--){
        nextConsonantIdx[i] = lastConsonantIdx;

        if(!isVowel(word[i])){
            lastConsonantIdx = i;
        }
    }

    let i = 0;
    let j = 0;
    let count = 0;
    let consonantCount = 0;

    while(j < n){
        let char = word[j];

        if(isVowel(char)){
            map.set(char, (map.get(char) || 0) + 1);
        }
        else{
            consonantCount++;
        }

        while(i < n && consonantCount > k){
            let char = word[i];

            if(isVowel(char)){
                map.set(char, (map.get(char) || 0) - 1);

                if(map.get(char) <= 0){
                    map.delete(char);
                }
            }
            else{
                consonantCount--;
            }

            i++;
        }

        while(i < n && map.size === 5 && consonantCount === k){
            let idx = nextConsonantIdx[j];
            count += idx - j;

            let char = word[i];

            if(isVowel(char)){
                map.set(char, (map.get(char) || 0) - 1);

                if(map.get(char) <= 0){
                    map.delete(char);
                }
            }
            else{
                consonantCount--;
            }

            i++;
        }

        j++;
    }

    return count;

    function isVowel(char){
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
    }
    
};