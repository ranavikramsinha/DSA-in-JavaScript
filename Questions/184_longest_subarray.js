//* https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/

var longestSubarray = function(nums) {

    let maxValue = Math.max(...nums);
    let result = 0;
    let subArray = 0;

    for(let num of nums){
        if(maxValue === num){
            subArray++;
        }
        else{
            subArray = 0;
        }

        result = Math.max(result, subArray);
    }

    return result;
};