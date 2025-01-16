//* https://leetcode.com/problems/bitwise-xor-of-all-pairings/

//* tc O(m + n) | sc O(m + n)

var xorAllNums = function(nums1, nums2) {

    let m = nums1.length;
    let n = nums2.length;

    let map = new Map();
    let ans = 0;

    for(let num of nums1){
        map.set(num,( map.get(num) || 0) + n);
    }

    for(let num of nums2){
        map.set(num,( map.get(num) || 0) + m);
    }

    for(let [num, freq] of map){
        if(freq % 2 !== 0){
            ans ^= num;
        }
    }

    return ans;
};