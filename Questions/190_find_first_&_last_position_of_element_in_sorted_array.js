//* https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function(nums, target) {
    let n = nums.length;

    let left = findLeft(nums, target, n);
    let right = findRight(nums, target, n);

    return [left, right];

    function findLeft(nums, target, n){
        let left = 0;
        let right = n - 1;
        let leftPosition = -1;

        while(left <= right){
            let middle = left + Math.trunc((right - left) / 2);

            if(nums[middle] === target){
                leftPosition = middle;
                right = middle - 1;
            }
            else if(target > nums[middle]){
                left = middle + 1;
            }
            else{
                right = middle - 1;
            }
        }

        return leftPosition;
    }

    function findRight(nums, target, n){
        let left = 0;
        let right = n - 1;
        let rightPosition = -1;

        while(left <= right){
            let middle = left + Math.trunc((right - left) / 2);

            if(nums[middle] === target){
                rightPosition = middle;
                left = middle + 1;
            }
            else if(target > nums[middle]){
                left = middle + 1;
            }
            else{
                right = middle - 1;
            }
        }

        return rightPosition;
    }
};