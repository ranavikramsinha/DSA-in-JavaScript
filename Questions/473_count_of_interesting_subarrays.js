//* https://leetcode.com/problems/count-of-interesting-subarrays/

//* tc O(n) | sc O(n)

var countInterestingSubarrays = function(nums, modulo, k) {

    let n = nums.length;
    let map = new Map();
    map.set(0, 1);

    let sum = 0;
    let result = 0;

    for(let i = 0; i < n; i++){
        if(nums[i] % modulo === k){
            sum += 1;
        }

        let range1 = sum % modulo;
        let range2 = (range1 - k + modulo) % modulo;

        result += map.get(range2) || 0;
        map.set(range1, (map.get(range1) || 0) + 1);
    }

    return result;
    
};