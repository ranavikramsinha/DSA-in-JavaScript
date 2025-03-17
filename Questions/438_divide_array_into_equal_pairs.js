//* https://leetcode.com/problems/divide-array-into-equal-pairs/

//* tc O(n) | sc O(1)

var divideArray = function(nums) {

    let arr = new Array(501).fill(true);

    for(let num of nums){
        arr[num] = !arr[num];
    }

    for(let i = 0; i < 501; i++){
        if(arr[i] === false){
            return false;
        }
    }

    return true;
    
};

//* tc O(n) | sc O(n)

var divideArray = function(nums) {

    let set = new Set();

    for(let num of nums){
        if(!set.has(num)){
            set.add(num);
        }
        else if(set.has(num)){
            set.delete(num);
        }
    }

    return set.size === 0 ? true : false;
    
};

//* tc O(n) | sc O(n)

var divideArray = function(nums) {

    let map = new Map();

    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }

    for(let [key, value] of map){
        if(value % 2 !== 0){
            return false;
        }
    }

    return true;
    
};