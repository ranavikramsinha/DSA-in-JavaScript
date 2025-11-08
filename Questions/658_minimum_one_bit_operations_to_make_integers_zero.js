//* https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/

//* tc : O(log(n)) | sc : O(log(n))

var minimumOneBitOperations = function(n) {

    if (n === 0) {
        return 0;
    }

    let highestBit = 0;

    while ((1 << highestBit) <= n) {
        highestBit++;
    }

    highestBit--;

    let withoutHighest = n ^ (1 << highestBit);

    return (1 << (highestBit + 1)) - 1 - minimumOneBitOperations(withoutHighest);

};