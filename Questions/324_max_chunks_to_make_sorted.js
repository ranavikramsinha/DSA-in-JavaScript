//* https://leetcode.com/problems/max-chunks-to-make-sorted/

//* tc O(nlogn) | sc O(n)

var maxChunksToSorted = function(arr) {

    let n = arr.length;
    let arrCumulativeSum = 0;
    let sortedArr = [...arr];
    let sortedArrCumulativeSum = 0;
    let chunk = 0;

    for(let i = 0; i < n; i++){
        
        arrCumulativeSum += arr[i];
        sortedArrCumulativeSum += sortedArr[i];

        if(arrCumulativeSum === sortedArrCumulativeSum){
            chunk++;
        }
    }

    return chunk;
    
};

//* tc O(n) | sc O(n)

var maxChunksToSorted = function(arr) {

    let n = arr.length;
    let arrCumulativeSum = 0;
    let sortedArrCumulativeSum = 0;
    let chunk = 0;

    for(let i = 0; i < n; i++){
        
        arrCumulativeSum += arr[i];
        sortedArrCumulativeSum += i;

        if(arrCumulativeSum === sortedArrCumulativeSum){
            chunk++;
        }
    }

    return chunk;
    
};