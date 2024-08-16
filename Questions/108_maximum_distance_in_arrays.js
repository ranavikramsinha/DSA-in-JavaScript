//* https://leetcode.com/problems/maximum-distance-in-arrays/

var maxDistance = function(arrays) {

    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length - 1];
    let result = 0;

    for(let i = 1; i < arrays.length; i++){
        let currentMin = arrays[i][0];
        let currentMax = arrays[i][arrays[i].length - 1];

        result = Math.max(result, Math.abs(currentMin - max), Math.abs(currentMax - min));

        max = Math.max(max, currentMax);
        min = Math.min(min, currentMin);
    }

    return result;
};