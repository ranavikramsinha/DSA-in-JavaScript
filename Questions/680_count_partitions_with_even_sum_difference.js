//* https://leetcode.com/problems/count-partitions-with-even-sum-difference/

//* tc : O(n) | sc : O(1)

var countPartitions = function(nums) {

    let n = nums.length;
    let total = nums.reduce((a, b) => a + b, 0);

    if(total % 2 !== 0) {
        return 0;
    }

    return n - 1;
    
};