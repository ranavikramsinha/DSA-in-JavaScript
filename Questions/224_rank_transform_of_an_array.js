//* https://leetcode.com/problems/rank-transform-of-an-array/

var arrayRankTransform = function(arr) {
    let newArray = [...arr];

    let set = new Set(newArray.sort((a, b) => a - b));

    let map = {};

    let counting = 1;

    for(let num of set){
        map[num] = counting;
        counting++;
    }

    for(let i = 0; i < arr.length; i++){
        arr[i] = map[arr[i]];
    }

    return arr;
};