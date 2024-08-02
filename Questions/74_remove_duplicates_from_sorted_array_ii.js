//* https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

var removeDuplicates = function(nums) {

    let n = nums.length;

    if(n <= 2){
        return n;
    }

    let count = 2;

    for(let i = 2; i < n; i++){
        if(nums[i] !== nums[count - 2] || nums[i] !== nums[count - 1]){
            nums[count] = nums[i];
            count++;
        }
    }

    return count;
    
};