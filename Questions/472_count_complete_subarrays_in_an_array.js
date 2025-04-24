//* https://leetcode.com/problems/count-complete-subarrays-in-an-array/

//* tc O(n) | sc O(n)

var countCompleteSubarrays = function(nums) {

    let n = nums.length;
    let set = new Set(nums);
    let map = new Map();
    let distinctElements = set.size;
    let i = 0;
    let j = 0;
    let result = 0;

    while(j < n){
        map.set(nums[j], (map.get(nums[j]) || 0) + 1);

        while(map.size === distinctElements){
            result += (n - j);

            map.set(nums[i], (map.get(nums[i])) - 1);

            if(map.get(nums[i]) === 0){
                map.delete(nums[i]);
            }

            i++;
        }

        j++;
    }

    return result;
    
};