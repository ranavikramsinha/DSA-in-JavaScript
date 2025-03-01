//* https://leetcode.com/problems/apply-operations-to-an-array/

//* tc O(n) | sc O(1)

var applyOperations = function(nums) {

    let n = nums.length;

    let i = 0;

    for(let j = 0; j < n; j++){
        if(j + 1 < n && nums[j] === nums[j + 1] && nums[j] !== 0){
            nums[j] *= 2;
            nums[j + 1] = 0;
        }

        if(nums[j] !== 0){
            if(j !== i){
                [nums[j], nums[i]] = [nums[i], nums[j]];
            }
            
            i++;
        }
    }

    return nums;
    
};