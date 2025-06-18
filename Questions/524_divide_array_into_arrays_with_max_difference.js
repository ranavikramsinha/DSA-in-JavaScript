//* https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/

//* tc O(nlogn) | sc O(n)

var divideArray = function(nums, k) {

    let n = nums.length;
    let result = [];
    nums.sort((a, b) => a - b);

    for(let i = 0; i < n; i += 3){
        if(nums[i + 2] - nums[i] > k){
            return [];
        }

        result.push([nums[i], nums[i + 1], nums[i + 2]]);
    }

    return result;
    
};