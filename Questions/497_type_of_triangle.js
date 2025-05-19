//* https://leetcode.com/problems/type-of-triangle/

//* tc O(1) | sc O(1)

var triangleType = function(nums) {

    if(nums[0] + nums[1] <= nums[2] || nums[0] + nums[2] <= nums[1] || nums[1] + nums[2] <= nums[0]){
        return "none";
    }
    else if(nums[0] === nums[1] && nums[1] === nums[2]){
        return "equilateral";
    }
    else if(nums[0] !== nums[1] && nums[1] !== nums[2] && nums[2] !== nums[0]){
        return "scalene";
    }
    else{
        return "isosceles";
    }
    
};