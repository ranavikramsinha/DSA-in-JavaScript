//* https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/

//* tc : O(n) | sc : O(1)

var maximumLength = function(nums) {

    let n = nums.length;
    let countEven = 0;
    let countOdd = 0;

    for(let num of nums){
        if(num % 2 === 0){
            countEven++;
        }
        else{
            countOdd++;
        }
    }

    let alternativeParity = 1;
    let previousParity = nums[0] % 2;

    for(let i = 1; i < n; i++){
        let currentParity = nums[i] % 2;

        if(currentParity !== previousParity){
            alternativeParity++;
            previousParity = currentParity;
        }
    }

    return Math.max(countEven, countOdd, alternativeParity);
    
};