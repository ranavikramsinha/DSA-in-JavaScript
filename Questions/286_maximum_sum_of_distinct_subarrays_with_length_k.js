//* https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/

//* tc O(n) === O(2*n) | sc O(min(n, k))
var maximumSubarraySum = function(nums, k) {
    
    let n = nums.length;
    let set = new Set();
    let i = 0;
    let sum = 0;
    let ans = 0;

    for(let j = 0; j < n; j++){
        while(set.has(nums[j])){
            sum -= nums[i];
            set.delete(nums[i]);
            i++;
        }

        sum += nums[j];
        set.add(nums[j]);

        if(j - i + 1 === k){
            ans = Math.max(ans, sum);
            sum -= nums[i];
            set.delete(nums[i]);
            i++;
        }
    }

    return ans;
};