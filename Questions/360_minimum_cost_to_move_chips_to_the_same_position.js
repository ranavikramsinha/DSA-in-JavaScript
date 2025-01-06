//* https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/

//* tc O(n) | sc O(1)

var minCostToMoveChips = function(position) {

    let n = position.length;
    let evenCost = 0;
    let oddCost = 0;

    for(let i = 0; i < n; i++){
        
        if(position[i] % 2 === 0){
            evenCost++;
        }
        else{
            oddCost++;
        }
    }

    return Math.min(evenCost, oddCost);
    
};