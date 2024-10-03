//* https://leetcode.com/problems/make-sum-divisible-by-p/

var minSubarray = function(nums, p) {
    let sum = 0;

    for(let num of nums){
        sum = (sum + num) % p;
    }

    let target = sum % p;

    if(target === 0){
        return 0;
    }

    let map = new Map();
    map.set(0, -1);

    let current = 0;
    let n = nums.length;
    let result = n;

    for(let j = 0; j < n; j++){
        current = (current + nums[j]) % p;

        let find = (current - target + p) % p;

        if(map.has(find)){
            result = Math.min(result, j - map.get(find));
        }

        map.set(current, j);
    }

    return result === n ? -1 : result;

};