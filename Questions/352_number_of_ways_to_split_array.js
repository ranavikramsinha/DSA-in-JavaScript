//* https://leetcode.com/problems/number-of-ways-to-split-array/

//* tc O(n) | sc O(1)

var waysToSplitArray = function(nums) {

    let n = nums.length;
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let count = 0;
    let leftSum = 0;

    for(let i = 0; i < n - 1; i++){

        leftSum += nums[i];

        let rightSum = totalSum - leftSum;

        if(leftSum >= rightSum){
            count++;
        }
    }

    return count;
    
};