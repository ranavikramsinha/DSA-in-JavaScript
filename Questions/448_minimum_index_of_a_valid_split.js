//* https://leetcode.com/problems/minimum-index-of-a-valid-split/

//* tc O(n) | sc O(n)

var minimumIndex = function(nums) {

    let n = nums.length;
    let map1 = new Map();
    let map2 = new Map();

    for(let num of nums){
        map2.set(num, (map2.get(num) || 0) + 1);
    }

    for(let i = 0; i < n; i++){
        let num = nums[i];

        let n1 = i + 1;
        let n2 = n - i - 1;

        map1.set(num, (map1.get(num) || 0) + 1);
        map2.set(num, (map2.get(num) || 0) - 1);

        if(map1.get(num) > Math.trunc(n1 / 2) && map2.get(num) > Math.trunc(n2 / 2)){
            return i;
        }
    }

    return -1;
    
};