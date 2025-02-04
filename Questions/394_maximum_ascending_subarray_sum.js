//* https://leetcode.com/problems/maximum-ascending-subarray-sum/

//* tc O(n) | sc O(1)

var maxAscendingSum = function(nums) {

    let n = nums.length;
    let sum = 0;
    let result = 0;

    for(let i = 0; i < n; i++){
        if(i > 0 && nums[i] <= nums[i - 1]){
            sum = nums[i];
            
            result = Math.max(result, sum);
            continue;
        }

        sum += nums[i];

        result = Math.max(result, sum);
    }

    return result;
    
};