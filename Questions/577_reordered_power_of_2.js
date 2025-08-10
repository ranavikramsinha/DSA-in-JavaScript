//* https://leetcode.com/problems/reordered-power-of-2/

//* tc : O(1) | sc : O(1)

var reorderedPowerOf2 = function(n) {

    let sortedString = num => [...String(num)].sort().join('');

    let target = sortedString(n);

    for(let i = 0; i < 30; i++){
        if(target === sortedString(1 << i)){
            return true;
        }
    }

    return false;
    
};