//* https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function(nums, target) {
    let n = nums.length;
    let pivotIndex = solve1(nums, n);
    let result = solve2(0, pivotIndex - 1, nums, target);

    if(result !== -1){
        return result;
    }

    result = solve2(pivotIndex, n - 1, nums, target);

    return result;

    function solve1(nums, n){
        let left = 0;
        let right = n - 1;

        while(left < right){
            let middle = left + Math.trunc((right - left) / 2);

            if(nums[middle] > nums[right]){
                left = middle + 1;
            }
            else{
                right = middle;
            }
        }

        return right;
    }

    function solve2(left, right, nums, target){
        let result = -1;

        while(left <= right){
            let middle = left + Math.trunc((right - left) / 2);

            if(nums[middle] === target){
                result = middle;
                break;
            }
            else if(nums[middle] < target){
                left = middle + 1;
            }
            else{
                right = middle - 1;
            }
        }

        return result;
    }
};