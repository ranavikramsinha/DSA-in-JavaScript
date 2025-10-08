//* https://leetcode.com/problems/successful-pairs-of-spells-and-potions/

//* tc : O(nlog(n)) | sc : O(n + m)

var successfulPairs = function(spells, potions, success) {

    let m = potions.length;
    potions.sort((a, b) => a - b);

    let  pairs = [];

    for(let spell of spells){
        let lowerBoundIdx =  solve(spell) ;
        let count = m - lowerBoundIdx;
        pairs.push(count);
    }

    return pairs;

    function solve(spell){
        let left = 0, right = m;

        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);

            if (spell * potions[mid] >= success){
                right = mid;
            }
            else{
                left = mid + 1;
            }      
        }
        return left;
    }
};