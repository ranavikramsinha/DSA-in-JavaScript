//* https://leetcode.com/problems/longest-harmonious-subsequence/

//* tc O(n) | sc O(n)

var findLHS = function(nums) {

    let n = nums.length;
    let map = new Map();
    let result = 0;

    for(let number of nums){
        map.set(number, (map.get(number) || 0) + 1);
    }

    for(let number of nums){
        let minimum = number;
        let maximum = number + 1;

        if(map.has(maximum)){
            result = Math.max(result, map.get(minimum) + map.get(maximum));
        }
    }

    return result;
    
};