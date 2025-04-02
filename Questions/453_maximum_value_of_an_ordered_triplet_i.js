//* https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/

//* tc O(n) | sc O(n)

var maximumTripletValue = function(nums) {

    let n = nums.length;
    let leftSideMax = new Array(n).fill(0);
    let rightSideMax = new Array(n).fill(0);
    let result = 0;

    for(let i = 1; i < n; i++){
        leftSideMax[i] = Math.max(leftSideMax[i - 1], nums[i - 1]);
    }

    for(let i = n - 2; i >= 0; i--){
        rightSideMax[i] = Math.max(rightSideMax[i + 1], nums[i + 1]);
    }

    for(let j = 1; j < n - 1; j++){
        result = Math.max(result, (leftSideMax[j] - nums[j]) * rightSideMax[j]);
    }

    return result;
};