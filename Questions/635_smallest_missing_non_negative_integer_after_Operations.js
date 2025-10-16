//* https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/

//* tc : O(n) | sc : O(n)

var findSmallestInteger = function(nums, value) {

    let frequency = new Array(value).fill(0);

    for (let num of nums) {
        let mod = ((num % value) + value) % value;
        frequency[mod]++;
    }

    let mex = 0;

    while (true) {
        let mod = mex % value;
        
        if (frequency[mod] === 0) {
            break;
        }

        frequency[mod]--;
        mex++;
    }

    return mex;

};