//* https://leetcode.com/problems/remove-element/

var removeElement = function(nums, val) {

    let count = 0;
    let n = nums.length;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[count] = nums[i];
            count++
        }
    }
    
    return count;
};