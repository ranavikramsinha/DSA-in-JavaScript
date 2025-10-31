//* https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/

//* tc : O(n) | sc : O(n)

var getSneakyNumbers = function(nums) {

    let n = nums.length - 2;
    let count = new Uint8Array(n);
    let result = [];

    for (let num of nums) {
        count[num]++;

        if (count[num] === 2) {
            result.push(num);

            if (result.length === 2) {
                return result;
            }
        }
    }
    
};