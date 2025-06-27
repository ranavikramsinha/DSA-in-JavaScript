//* https://leetcode.com/problems/longest-subsequence-repeated-k-times/

//* tc O((n / k) * n) | sc O(n / k) where n / k is number of nodes in the backtracking tree

var longestSubsequenceRepeatedK = function(s, k) {

    let n = s.length;
    let frequency = new Array(26).fill(0);
    let charactersForUse = new Array(26).fill(false);
    let maximumUseOfCharacterFrequency = new Array(26).fill(0);
    let maximumLength = Math.trunc(n / k);

    for(let character of s){
        frequency[character.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let i = 0; i < 26; i++){
        if(frequency[i] >= k){
            charactersForUse[i] = true;
            maximumUseOfCharacterFrequency[i] = Math.trunc(frequency[i] / k)
        }
    }

    let current = "";
    let result = "";

    backtracking(s, current, charactersForUse, maximumUseOfCharacterFrequency, k, maximumLength);

    return result;

    function backtracking(s, current, charactersForUse, maximumUseOfCharacterFrequency, k, maximumLength){
        if(current.length > maximumLength){
            return;
        }

        if((current.length > result.length || (current.length === result.length && current > result)) && isSubsequence(s, current, k)){
            result = current;
        }

        for(let i = 0; i < 26; i++){
            if(charactersForUse[i] === false || maximumUseOfCharacterFrequency[i] <= 0){
                continue;
            }

            let char = String.fromCharCode(97 + i);
            current += char;
            maximumUseOfCharacterFrequency[i]--;

            backtracking(s, current, charactersForUse, maximumUseOfCharacterFrequency, k, maximumLength);

            current = current.slice(0, current.length - 1);
            maximumUseOfCharacterFrequency[i]++;
        }
    }

    function isSubsequence(s, subsequence, k){
        let i = 0;
        let j = 0;
        let len = subsequence.length;
        let size = s.length;

        while(i < size && j < k * len){
            if(s[i] === subsequence[j % len]){
                j++;
            }

            i++;
        }

        return j === k * len;
    }
    
};


//* Optimize for early return

var longestSubsequenceRepeatedK = function(s, k) {

    let n = s.length;
    let frequency = new Array(26).fill(0);
    let charactersForUse = new Array(26).fill(false);
    let maximumUseOfCharacterFrequency = new Array(26).fill(0);
    let maximumLength = Math.trunc(n / k);

    for(let character of s){
        frequency[character.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let i = 0; i < 26; i++){
        if(frequency[i] >= k){
            charactersForUse[i] = true;
            maximumUseOfCharacterFrequency[i] = Math.trunc(frequency[i] / k)
        }
    }

    let current = "";
    let result = "";

    for(let size = maximumLength; size >= 0; size--){
        let temp = maximumUseOfCharacterFrequency;

        if(backtracking(s, current, charactersForUse, temp, k, size) === true){
            return result;
        }
    }

    return result;

    function backtracking(s, current, charactersForUse, maximumUseOfCharacterFrequency, k, maximumLength){
        if(current.length === maximumLength){
            if(isSubsequence(s, current, k)){
                result = current;
                return true;
            }

            return false;
        }

        for(let i = 25; i >= 0; i--){
            if(charactersForUse[i] === false || maximumUseOfCharacterFrequency[i] <= 0){
                continue;
            }

            let char = String.fromCharCode(97 + i);
            current += char;
            maximumUseOfCharacterFrequency[i]--;

            if(backtracking(s, current, charactersForUse, maximumUseOfCharacterFrequency, k, maximumLength) === true){
                return true;
            }

            current = current.slice(0, current.length - 1);
            maximumUseOfCharacterFrequency[i]++;
        }

        return false;
    }

    function isSubsequence(s, subsequence, k){
        let i = 0;
        let j = 0;
        let len = subsequence.length;
        let size = s.length;

        while(i < size && j < k * len){
            if(s[i] === subsequence[j % len]){
                j++;
            }

            i++;
        }

        return j === k * len;
    }
    
};