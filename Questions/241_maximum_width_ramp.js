//* https://leetcode.com/problems/maximum-width-ramp/

var maxWidthRamp = function(nums) {
    let n = nums.length;
    let stack = [];

    for(let i = 0; i < n; i++){
        if(stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]){
            stack.push(i);
        }
    }
    
    let result = -Infinity;

    for(let i = n - 1; i >= 0; i--){
        while(stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]){
            result = Math.max(result, i - stack.pop());
        }

        if(stack.length === 0){
            break;
        }
    }

    return result;
};