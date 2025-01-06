//* https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/

//* tc O(n) | sc O(n)

var minOperations = function(boxes) {

    let box = boxes.split("");
    let n = box.length;
    let arr = new Array(n).fill(0);

    let cumlativeIndexValue = 0;
    let cumlativeSum = 0;

    for(let i = 0; i < n; i++){
        arr[i] = cumlativeSum;

        cumlativeIndexValue += box[i] === "1" ? 1 : 0;

        cumlativeSum += cumlativeIndexValue;
    }

    cumlativeIndexValue = 0;
    cumlativeSum = 0;

    for(let i = n - 1; i >= 0; i--){
        arr[i] += cumlativeSum;

        cumlativeIndexValue += box[i] === "1" ? 1 : 0;

        cumlativeSum += cumlativeIndexValue;
    }

    return arr;
    
};