//* https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/

//* tc : O(n^2) | sc : O(n)

var hasSameDigits = function(s) {

    s = [...s];

    let right = s.length - 1;

    while (right + 1 > 2) {
        for (let i = 0; i < right; i++) {
            s[i] = (+s[i] + (+s[i + 1])) % 10;
        }

        right--;
    }

    return s[0] === s[right];
    
};