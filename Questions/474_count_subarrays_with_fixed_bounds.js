//* https://leetcode.com/problems/count-subarrays-with-fixed-bounds/

//* tc O(n) | sc O(1)

var countSubarrays = function(nums, minK, maxK) {

    let n = nums.length;
    let minKValuePosition = -1;
    let maxKValuePosition = -1;
    let valueGreaterAndLessThanMaxAndMinPosition = -1;
    let result = 0;

    for(let i = 0; i < n; i++){
        if(nums[i] < minK || nums[i] > maxK){
            valueGreaterAndLessThanMaxAndMinPosition = i;
        }

        if(nums[i] === minK){
            minKValuePosition = i;
        }

        if(nums[i] === maxK){
            maxKValuePosition = i;
        }

        let smallerIndex = Math.min(minKValuePosition, maxKValuePosition);
        let validSubArray = smallerIndex - valueGreaterAndLessThanMaxAndMinPosition;

        result += (validSubArray <= 0) ? 0 : validSubArray;
    }

    return result;
    
};