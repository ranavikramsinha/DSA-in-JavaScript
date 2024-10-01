//* https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/

var canArrange = function(arr, k) {
    let map = {};

    for(let num of arr){
        let remainder = num % k;

        if(remainder < 0){
            remainder += k;
        }

        let keying = (remainder === 0) ? 0 : k - remainder;

        if(!map[keying]){
            map[remainder] = (map[remainder] || 0) + 1;
        }
        else{
            map[keying]--;
        }
    }

    for(let key in map){
        if(map[key] > 0){
            return false;
        }
    }

    return true;
};