//* https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/

//* using array
var canArrange = function(arr, k) {
    let arr2 = new Array(k).fill(0);

    for(let num of arr){
        let remainder = ((num % k) + k ) % k;
        arr2[remainder]++;
    }

    if(arr2[0] % 2 !== 0){
        return false;
    }

    for(let rem = 1; rem <= Math.floor(k / 2); rem++){
        let counterHalf = k - rem;

        if(arr2[counterHalf] !== arr2[rem]){
            return false;
        }
    }

    return true;
};

//* using map
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