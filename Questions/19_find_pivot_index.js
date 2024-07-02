//* https://leetcode.com/problems/find-pivot-index/description/

var pivotIndex = function(nums) {

    const totalSum = nums.reduce((total, num) => total + num, 0)

    let leftSum = 0

    for(let i = 0; i < nums.length; i++){
        let rightSum = totalSum - leftSum - nums[i]

        if(leftSum === rightSum){
            return i
        }

        leftSum += nums[i]
    }

    return -1
    
};