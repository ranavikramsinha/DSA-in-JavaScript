//* https://leetcode.com/problems/single-number-ii/

var singleNumber = function(nums) {
    
    let map = {};

    for(let num of nums){
        map[num] = map[num] !== undefined ? map[num] + 1 : 1;
    }

    for(let m in map){
        if(map[m] === 1){
            return Number(m);
        }
    }

};