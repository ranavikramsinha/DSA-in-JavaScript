//* https://leetcode.com/problems/find-the-middle-index-in-array/

//* tc O(n) | sc O(1)

var findMiddleIndex = function(nums) {

    let n = nums.length;
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for(let i = 0; i < n; i++){

        let rightSum = totalSum - leftSum - nums[i];

        if(leftSum === rightSum){
            return i;
        }

        leftSum += nums[i];

    }

    return -1;
    
};