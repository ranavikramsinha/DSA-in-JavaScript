//* https://leetcode.com/problems/maximum-erasure-value/

//* tc : O(n) | sc : O(n)
var maximumUniqueSubarray = function(nums) {

    let n = nums.length;
    let set = new Set();
    let i = 0;
    let j = 0;
    let sum = 0;
    let result = 0;

    while(j < n){
        if(!set.has(nums[j])){
            sum += nums[j];
            result = Math.max(result, sum);
            set.add(nums[j]);
            j++;
        }
        else{
            while(i < n && set.has(nums[j])){
                sum -= nums[i];
                set.delete(nums[i]);
                i++;
            }
        }
    }

    return result;
    
};