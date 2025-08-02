//* https://leetcode.com/problems/rearranging-fruits/

//* tc : O(n * log(n)) | sc : O(n)

var minCost = function(basket1, basket2) {

    let count = new Map();

    for(let x of basket1){
        count.set(x, (count.get(x) || 0) + 1);
    }

    for(let x of basket2){
        count.set(x, (count.get(x) || 0) - 1);
    }

    let swaps = [];
    let minimumValue = Infinity;

    for (let [val, diff] of count.entries()) {
        if (diff % 2){
            return -1;
        }

        let half = Math.abs(diff) / 2;

        for(let i = 0; i < half; i++){
            swaps.push(val);
        }

        minimumValue = Math.min(minimumValue, val);
    }

    swaps.sort((a, b) => a - b);

    let total = 0;
    let halfLength = Math.trunc(swaps.length / 2);

    for(let i = 0; i < halfLength; i++){
        total += Math.min(swaps[i], minimumValue * 2);
    }

    return total;
    
};