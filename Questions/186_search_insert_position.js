//* https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let middle = Math.trunc((left + right) / 2);

        if(target === nums[middle]){
            return middle;
        }

        if(target > nums[middle]){
            left = middle + 1;
        }
        else{
            right = middle - 1;
        }
    }

    return left;
    
};