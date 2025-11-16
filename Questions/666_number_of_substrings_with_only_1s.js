//* https://leetcode.com/problems/number-of-substrings-with-only-1s/

//* tc : O(n) | sc : O(1)

var numSub = function(s) {

    let count = 0;
    let result = 0;
    let modulo = 10 ** 9 + 7;

    for (let character of s) {
        count = +character * (count + (+character));
        result = (result + count) % modulo;
    }

    return result;
    
};