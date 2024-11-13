//* https://leetcode.com/problems/count-the-number-of-fair-pairs/

//* tc O(nlogn) | sc O(1)
var countFairPairs = function(nums, lower, upper) {

    nums.sort((a, b) => a - b);

    let n = nums.length;
    let result = 0;

    for(let i = 0; i < n; i++){

        let lowerBoundIndex = lowerBound(nums, lower - nums[i], i + 1);
        let lowerRangeCount = lowerBoundIndex - 1 - i;

        let upperBoundIndex = upperBound(nums, upper - nums[i], i + 1);
        let upperRangeCount = upperBoundIndex - 1 - i;

        result += (upperRangeCount - lowerRangeCount);

    }
    
    return result;

    function lowerBound(arr, target, start){
        let left = start;
        let right = arr.length;
        
        while(left < right){
            let middle = left + Math.trunc((right - left) / 2);

            if(arr[middle] < target){
                left = middle + 1;
            }
            else{
                right = middle;
            }
        }
        return left;
    }

    function upperBound(arr, target, start){
        let left = start;
        let right = arr.length;

        while(left < right){
            let middle = left + Math.trunc((right - left) / 2);

            if(arr[middle] <= target){
                left = middle + 1;
            }
            else{
                right = middle;
            }
        }
        return left;
    }
};