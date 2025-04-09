//* https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/

//* tc O(n) | sc O(n)

var minOperations = function(nums, k) {

    if(Math.min(...nums) < k){
        return -1;
    }

    let n = nums.length;
    let set = new Set();

    for(let num of nums){
        if(num > k){
            set.add(num);
        }
    }

    return set.size;
    
};