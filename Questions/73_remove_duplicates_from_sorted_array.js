//* https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// var removeDuplicates = function(nums) {

//     let count = 0;
//     let n = nums.length;
//     const set = new Set();

//     for(let i = 0; i < n; i++){
//         if(!set.has(nums[i])){
//             set.add(nums[i]);
//             nums[count] = nums[i];
//             count++; 
//         }
//     }
    
//     return count;
// };

//* time => 0(n) & space => 0(1)
var removeDuplicates = function(nums) {

    let n = nums.length;

    if(n === 0){
        return 0;
    }

    let count = 1;

    for(let i = 1; i < n; i++){
        if(nums[i] !== nums[i - 1]){
            nums[count] = nums[i];
            count++
        }
    }

    return count;
    
};