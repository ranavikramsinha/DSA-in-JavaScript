//* https://leetcode.com/problems/build-array-from-permutation/

//* tc O(n) | sc O(1)

var buildArray = function(nums) {

    let n = nums.length;

    for(let i = 0; i < n; i++){
        nums[i] = nums[i] + n * (nums[nums[i]] % n);
    }

    for(let i = 0; i < n; i++){
        nums[i] = Math.trunc(nums[i] / n);
    }

    return nums;
    
};