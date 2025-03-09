//* https://leetcode.com/problems/alternating-groups-ii/

//* tc O(n + k) | sc O(n) where k is the number of groups

var numberOfAlternatingGroups = function(colors, k) {

    let n = colors.length;
    
    for(let i = 0; i < k - 1; i++){
        colors.push(colors[i]);
    }

    let size = colors.length;
    let i = 0;
    let j = 1;
    let result = 0;

    while(j < size){
        if(colors[j] === colors[j - 1]){
            i = j
            j++;
            continue;
        }

        if(j - i + 1 === k){
            result++;
            i++;
        }

        j++;
    }

    return result;
    
};