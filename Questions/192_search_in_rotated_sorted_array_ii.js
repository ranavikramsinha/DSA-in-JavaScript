//* https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

var search = function(nums, target) {
    let n = nums.length;
    let pivotIndex = solve1(nums, n);
    let result = solve2(0, pivotIndex - 1, nums, target);

    if(result !== false){
        return result;
    }

    result = solve2(pivotIndex, n - 1, nums, target);

    return result;

    function solve1(nums, n){
        let left = 0;
        let right = n - 1;

        while((left < right) && (nums[left] === nums[left + 1])){
            left++;
        }

        while((left < right) && (nums[right] === nums[right - 1])){
            right--;
        }

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
        let result = false;

        while(left <= right){
            let middle = left + Math.trunc((right - left) / 2);

            if(nums[middle] === target){
                result = true;
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