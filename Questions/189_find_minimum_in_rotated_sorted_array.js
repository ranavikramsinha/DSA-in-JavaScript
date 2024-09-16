//* https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function(nums) {
    
    let n = nums.length;
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

    return nums[right];
};