//* https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {

    let map = {};

    for(let i = 0; i < nums.length; i++){
        let remain = target - nums[i];

        if(remain in map){
            return [map[remain], i];
        }

        map[nums[i]] = i;
    }

    return [];
    
};