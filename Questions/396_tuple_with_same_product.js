//* https://leetcode.com/problems/tuple-with-same-product/

//* tc O(n^2) | sc O(n)

var tupleSameProduct = function(nums) {

    let n = nums.length;
    let map = new Map();
    let count = 0

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let value = nums[i] * nums[j];

            map.set(value, (map.get(value) || 0) + 1);
        }
    }

    for(let [value, valueOccurrence] of map){
        count += Math.trunc((valueOccurrence) * (valueOccurrence - 1) / 2);
    }

    return count * 8;
    
};