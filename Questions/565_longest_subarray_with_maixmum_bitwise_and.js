//* https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/

//* tc : O(n) | sc : O(1)

var longestSubarray = function(nums) {

    let count = 0;
    let subArray = 0;
    let maximumValue = Math.max(...nums);

    for(let num of nums){
        if(maximumValue === num){
            subArray++;
        }
        else{
            subArray = 0;
        }

        count = Math.max(count, subArray);
    }

    return count;
    
};