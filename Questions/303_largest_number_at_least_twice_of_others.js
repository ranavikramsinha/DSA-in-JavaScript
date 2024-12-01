//* https://leetcode.com/problems/largest-number-at-least-twice-of-others/

//* tc O(n) | sc O(1)

var dominantIndex = function(nums) {

    let maxValue = Math.max(...nums);

    let idx = nums.indexOf(maxValue);

    for(let i = 0; i < nums.length; i++){

        let num = nums[i];

        if(i !== idx && num * 2 > maxValue){
            return -1;
        }
    }

    return idx;
    
};