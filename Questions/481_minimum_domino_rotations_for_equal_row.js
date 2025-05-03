//* https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/

//* tc O(n) | sc O(1)

var minDominoRotations = function(tops, bottoms) {

    if(tops.length !== bottoms.length){
        return -1;
    }

    let result = Infinity;

    for(let i = 1; i <= 6; i++){
        let numberOfSwaps = solve(tops, bottoms, i);

        if(numberOfSwaps !== -1){
            result = Math.min(numberOfSwaps, result);
        }
    }

    return result !== Infinity ? result : -1;

    function solve(tops, bottoms, value){
        let countTopSwaps = 0;
        let countBottomSwaps = 0;
        let n = tops.length;

        for(let i = 0; i < n; i++){
            if(tops[i] !== value && bottoms[i] === value){
                countTopSwaps++;
            }
            else if(bottoms[i] !== value && tops[i] === value){
                countBottomSwaps++;
            }
            else if(tops[i] !== value && bottoms[i] !== value){
                return -1;
            }
        }

        return Math.min(countTopSwaps, countBottomSwaps);
    }
    
};