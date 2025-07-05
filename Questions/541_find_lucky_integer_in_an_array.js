//* https://leetcode.com/problems/find-lucky-integer-in-an-array/

//* tc O(n) | sc O(1) (considering the result) and O(n) (if considering the frequency array)

var findLucky = function(arr) {

    let frequency = new Array(501).fill(0);
    let result = -1;

    for(let num of arr){
        frequency[num]++;
    }

    for(let i = 501; i >= 1; i--){
        if(i === frequency[i]){
            result = i;
            break;
        }
    }

    return result;
    
};