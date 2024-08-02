//* https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {

    let count = 0;
    let n = nums.length;
    const set = new Set();

    for(let i = 0; i < n; i++){
        if(!set.has(nums[i])){
            set.add(nums[i]);
            nums[count] = nums[i];
            count++; 
        }
    }
    
    return count;
};