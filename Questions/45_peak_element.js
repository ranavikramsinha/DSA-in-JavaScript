//* https://leetcode.com/problems/find-peak-element/

var findPeakElement = function(nums) {

    let left = 0
    let right = nums.length - 1

    while(left < right){
        mid = Math.floor((right + left)/2)
        
        if(nums[mid] > nums[mid + 1]){
            right = mid
        }
        else{
            left = mid + 1
        }
    }

    return left  
};