//* https://leetcode.com/problems/1-bit-and-2-bit-characters/

//* tc : O(n) | sc : O(1)

var isOneBitCharacter = function(bits) {

    let n = bits.length;

    if(n === 1) {
        return true;
    }

    let i = 0;

    while(i < n - 1) {
        i += (bits[i] ? 2 : 1);
    }

    return i === (n - 1);
    
};