//* https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/

//* tc O(2 * n) | sc O(1)
var minimumSubarrayLength = function(nums, k) {

    let n = nums.length;
    let result = Infinity;
    let i = 0;
    let j = 0;
    let bitCounts = new Array(32).fill(0);

    while(j < n){
        updateBitCounts(nums[j], bitCounts, 1);

        while(i <= j && decimalFromBitCounts(bitCounts) >= k){
            result = Math.min(result, j - i + 1);
            updateBitCounts(nums[i], bitCounts, -1);
            i++;
        }

        j++;
    }

    return result === Infinity ? -1 : result;

    function updateBitCounts(num, bitCounts, value){
        for(let i = 0; i < 32; i++){
            if((num >> i) & 1){
                bitCounts[i] += value; 
            }
        }
    }

    function decimalFromBitCounts(bitCounts){
        let value = 0;

        for(let i = 0; i < 32; i++){
            if(bitCounts[i] > 0){
                value |= (1 << i);
            }
        }

        return value;
    }
};