//* https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/

//* tc : O(36 * long(num1)) | sc : O(1)

var makeTheIntegerZero = function(num1, num2) {

    for (let t = 1; t <= 36; t++) {
        let val = BigInt(num1) - BigInt(t) * BigInt(num2);

        if (val < 0n) return -1;

        let bits = val.toString(2).split("1").length - 1;

        if (bits <= t && BigInt(t) <= val) {
            return t;
        }
    }
    
    return -1;
    
};