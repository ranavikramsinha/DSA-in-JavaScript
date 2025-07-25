//* https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/

//* tc : O(n) | sc : O(n)

var maxSum = function(nums) {

    let arr = new Array(101).fill(-1);
    let maximumNegativeNumber = -100;
    let sum = 0;

    for(let num of nums){
        if(num <= 0){
            maximumNegativeNumber = Math.max(maximumNegativeNumber, num);
        }
        else if(arr[num] === -1){
            sum += num;
            arr[num] = 1;
        }
    }

    return sum === 0 ? maximumNegativeNumber : sum;
    
};