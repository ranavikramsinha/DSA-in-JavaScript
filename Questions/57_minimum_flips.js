//* https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/description/

var minFlips = function(a, b, c) {

    let flip = 0

    while(a !== 0 || b !== 0 || c !== 0){
        if((c & 1) === 1){
            if((a & 1) === 0 && (b & 1) === 0){
                flip++
            }
        }
        else if((c & 1) === 0){
            if((a & 1) === 1){
                flip++
            }

            if((b & 1) === 1){
                flip++
            }
        }

        a >>= 1
        b >>= 1
        c >>= 1
    }

    return flip
    
};