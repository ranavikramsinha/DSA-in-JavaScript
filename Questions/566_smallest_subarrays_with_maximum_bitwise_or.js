//* https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/

//* tc : O(n) | sc : O(1)

var smallestSubarrays = function(nums) {

    let n = nums.length;
    let result = new Array(n);
    let setBitIndex = new Array(32).fill(-1);

    for (let i = n - 1; i >= 0; i--){
        let endIndex = i;

        for (let j = 0; j < 32; j++){
            if (!(nums[i] & (1 << j))){
                if (setBitIndex[j] !== -1){
                    endIndex = Math.max(endIndex, setBitIndex[j]);
                }
            }
            else{
                setBitIndex[j] = i;
            }
        }

        result[i] = endIndex - i + 1;
    }

    return result;
    
};