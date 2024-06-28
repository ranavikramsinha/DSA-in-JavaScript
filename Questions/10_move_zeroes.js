//* https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {

    let print = 0

    for(let read = 0; read < nums.length; read++){
        if(nums[read] !== 0){
            nums[print] = nums[read]
            print++
        }
    }

    for(; print < nums.length; print++){
        nums[print] = 0
    }

    return nums
    
};

console.log(moveZeroes([0, 0, 0, 1, 1, 1, 1, 0, 2, 3, 4, 5]))