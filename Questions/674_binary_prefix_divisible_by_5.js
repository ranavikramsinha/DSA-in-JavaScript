//* https://leetcode.com/problems/binary-prefix-divisible-by-5/

//* tc : O(n) | sc : O(n)

var prefixesDivBy5 = function(nums) {

    let n = nums.length;
    let value = 0;
    let result = [];

    for(let i = 0; i < n; i++){
        value = ((value * 2) + nums[i]) % 5;

        result.push(value === 0);
    }

    return result;
    
};