//* https://leetcode.com/problems/put-marbles-in-bags/

//* tc O(nlogn) | sc O(n)

var putMarbles = function(weights, k) {

    if(k === weights.length){
        return 0;
    }

    let n = weights.length;
    let costOfEachPair = new Array(n - 1).fill(0);

    for(let i = 0; i < costOfEachPair.length; i++){
        costOfEachPair[i] = weights[i] + weights[i + 1];
    }

    costOfEachPair.sort((a, b) => a - b);

    let sumFromStart = 0;
    let sumFromEnd = 0;

    for(let i = 0; i < k - 1; i++){
        sumFromStart += costOfEachPair[i];
        sumFromEnd += costOfEachPair[costOfEachPair.length - 1 - i];
    }

    return sumFromEnd - sumFromStart;
    
};