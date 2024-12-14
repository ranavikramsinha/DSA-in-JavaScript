//* https://leetcode.com/problems/continuous-subarrays/

//* tc O(n) | sc O(1)

var continuousSubarrays = function(nums) {
    
    let n = nums.length;
    let start = 0;
    let end = 0;
    let currentMinimum = Infinity;
    let currentMaximum = -Infinity;
    let count = 0;

    while(end < n){
        currentMinimum = Math.min(currentMinimum, nums[end]);
        currentMaximum = Math.max(currentMaximum, nums[end]);

        if(currentMaximum - currentMinimum > 2){
            start = end;
            currentMinimum = nums[end];
            currentMaximum = nums[end];

            while(start - 1 >= 0 && Math.abs(nums[start - 1] - nums[end]) <= 2){
                start--;
                currentMinimum = Math.min(currentMinimum, nums[start]);
                currentMaximum = Math.max(currentMaximum, nums[start]);
            }
        }

        count += (end - start + 1);
        end++;
    }

    return count; 
};