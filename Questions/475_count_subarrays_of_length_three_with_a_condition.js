//* https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/

//* tc O(n) | sc O(1)

var countSubarrays = function(nums) {

    let n = nums.length;
    let count = 0;

    for(let i = 1; i < n - 1; i++){
        if((2 * (nums[i - 1] + nums[i + 1])) == nums[i]){
            count++;
        }
    }

    return count;
    
};