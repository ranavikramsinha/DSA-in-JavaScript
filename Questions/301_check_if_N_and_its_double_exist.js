//* https://leetcode.com/problems/check-if-n-and-its-double-exist/

//* tc: O(n) | sc: O(n)

var checkIfExist = function(arr) {

    let set = new Set();

    for(let value of arr){

        if((value % 2 === 0 && set.has(value / 2)) || set.has(2 * value)){
            return true;
        }

        set.add(value);
    }

    return false;
    
};