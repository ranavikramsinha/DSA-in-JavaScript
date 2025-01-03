//* https://leetcode.com/problems/minimum-average-difference/

//* tc O(n) | sc O(1)

var minimumAverageDifference = function(nums) {

    let n = nums.length;
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let minAveDiff = Infinity;
    let leftSum = 0;
    let index = 0;

    for(let i = 0; i < n; i++){
        leftSum += nums[i];
        
        let rightSum = totalSum - leftSum;

        let x = Math.trunc(leftSum / (i + 1));
        let y = (i === n - 1) ? 0 : Math.trunc(rightSum / (n - i - 1));

        let value = Math.abs(x - y);

        if(value < minAveDiff){
            minAveDiff = Math.abs(x - y);
            index = i;
        }
    }

    return index;
    
};