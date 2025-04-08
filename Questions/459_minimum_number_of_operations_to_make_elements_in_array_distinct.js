//* https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/

//* tc O(n) | sc O(n)

var minimumOperations = function(nums) {
    
    let n = nums.length;
    let set = new Set();
    let count = 0

    for(let i = n - 1; i >= 0; i--){
        if(set.has(nums[i])){
            return count = Math.trunc(i / 3) + 1;
        }

        set.add(nums[i]);
    }

    return count;

};