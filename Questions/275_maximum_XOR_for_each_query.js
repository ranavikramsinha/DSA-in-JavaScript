//* https://leetcode.com/problems/maximum-xor-for-each-query/

//* tc O(n) | sc O(1)
var getMaximumXor = function(nums, maximumBit) {
    let xor = (2**maximumBit) - 1;
    for(let i =0; i<nums.length; i++){
        xor ^= nums[i];
        nums[i] = xor;
    } 
    return nums.reverse();
};