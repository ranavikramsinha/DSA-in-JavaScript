//* https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/

//* tc O(n) | sc O(1)
var takeCharacters = function(s, k) {

    let n = s.length;
    let freq = [0, 0, 0];

    for(let char of s){
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    if(freq[0] < k || freq[1] < k || freq[2] < k){
        return -1;
    }

    let countOfA = freq[0] - k;
    let countOfB = freq[1] - k;
    let countOfC = freq[2] - k;

    let current = [0, 0, 0];
    let maxLength = 0;
    let left = 0;

    for(let right = 0; right < n; right++){
        current[s[right].charCodeAt(0) - 'a'.charCodeAt(0)]++;

        while(left <= right && (current[0] > countOfA || current[1] > countOfB || current[2] > countOfC)){
            current[s[left].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    let ans = n - maxLength;

    return ans;
    
};