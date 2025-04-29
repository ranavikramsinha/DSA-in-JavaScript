//* https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/

//* tc O(n) | sc O(1)

var countSubarrays = function(nums, k) {

    let n = nums.length;
    let maximum = Math.max(...nums);
    let count = 0;
    let i = 0;
    let j = 0;
    let result = 0;

    while(j < n){
        if(nums[j] == maximum){
            count++;
        }

        while(count >= k){
            result += n - j;

            if(nums[i] == maximum){
                count--;
            }

            i++;
        }

        j++;
    }

    return result;
    
};