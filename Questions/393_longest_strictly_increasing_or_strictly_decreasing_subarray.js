//* https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/

//* tc O(n) | sc O(1)

var longestMonotonicSubarray = function(nums) {

    let n = nums.length;
    let increasing = 1;
    let decreasing = 1;
    let ans = 1;

    for(let i = 0; i < n - 1; i++){
        if(nums[i] < nums[i + 1]){
            increasing++;
            decreasing = 1;

            ans = Math.max(ans, increasing);
        }
        else if(nums[i] > nums[i + 1]){
            decreasing++;
            increasing = 1;

            ans = Math.max(ans, decreasing);
        }
        else{
            increasing = 1;
            decreasing = 1;
        }

    }

    return ans;
    
};