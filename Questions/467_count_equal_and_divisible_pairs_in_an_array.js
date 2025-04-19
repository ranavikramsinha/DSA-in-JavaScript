//* https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

//* tc O(n ^ 2) | sc O(1)

var countPairs = function(nums, k) {

    let n = nums.length;
    let count = 0;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(nums[i] === nums[j] && ((i * j) % k === 0)){
                count++;
            }
        }
    }

    return count;
    
};