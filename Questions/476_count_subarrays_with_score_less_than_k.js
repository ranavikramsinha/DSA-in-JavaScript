//* https://leetcode.com/problems/count-subarrays-with-score-less-than-k/

//* tc O(n) | sc O(1)

var countSubarrays = function(nums, k) {

    let n = nums.length;
    let sum = 0;
    let result = 0;
    let i = 0;
    let j = 0;

    while(j < n){
        sum += nums[i];

        while(i <= j && sum * (j - i + 1) >= k){
            sum -= nums[i];
            i++;
        }

        result += j - i + 1;
        j++;
    }

    return result;
    
};