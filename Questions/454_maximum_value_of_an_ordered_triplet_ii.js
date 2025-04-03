//* https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/

//* tc O(n) | sc O(n)

var maximumTripletValue = function(nums) {

    let n = nums.length;
    let leftMaxSide = new Array(n).fill(0);
    let rightMaxSide = new Array(n).fill(0);
    let result = 0;

    for(let i = 1; i < n; i++){
        leftMaxSide[i] = Math.max(leftMaxSide[i - 1], nums[i - 1]);
    }

    for(let i = n - 2; i >= 0; i--){
        rightMaxSide[i] = Math.max(rightMaxSide[i + 1], nums[i + 1]);
    }

    for(let i = 1; i < n; i++){
        result = Math.max(result, (leftMaxSide[i] - nums[i]) * rightMaxSide[i]);
    }

    return result;
    
};