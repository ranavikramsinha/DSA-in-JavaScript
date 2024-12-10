//* https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/

//* tc O(nlongn) | sc O(1)

var maximumBeauty = function(nums, k) {

    nums.sort((a, b) => a - b);
    
    let n = nums.length;
    let i = 0;
    let maximumBeauty = 0;

    for(let j = 0; j < n; j++){

        while(nums[j] - nums[i] > 2 * k){
            i++;
        }

        maximumBeauty = Math.max(maximumBeauty, j - i + 1);
    }

    return maximumBeauty;
    
};