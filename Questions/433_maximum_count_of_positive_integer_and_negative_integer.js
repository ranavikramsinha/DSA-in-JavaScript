//* https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/

//* tc O(nlogn) | sc O(1)

var maximumCount = function(nums) {

    let n = nums.length;
    let positive = n - solve(nums, 1, n);
    let negative = solve(nums, 0, n);

    return Math.max(positive, negative);

    function solve(nums, target, numsLength){
        let left = 0;
        let right = numsLength - 1;
        let result = numsLength;

        while(left <= right){
            let middle = left + Math.trunc((right - left) / 2);

            if(nums[middle] >= target){
                result = middle;
                right = middle - 1
            }
            else{
                left = middle + 1;
            }
        }

        return result;
    }
    
};