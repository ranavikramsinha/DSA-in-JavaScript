//* https://leetcode.com/problems/summary-ranges/

var summaryRanges = function(nums) {

    let n = nums.length;
    let result = [];

    for(let i = 0; i < n; i++){
        let start = nums[i];

        while((i + 1) < n && nums[i + 1] - nums[i] === 1){
            i++;
        }

        if(start !== nums[i]){
            result.push(`${start}->${nums[i]}`)
        }
        else{
            result.push(`${start}`);
        }
    }

    return result;
    
};