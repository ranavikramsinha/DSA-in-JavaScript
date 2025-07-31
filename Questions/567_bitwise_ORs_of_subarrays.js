//* https://leetcode.com/problems/bitwise-ors-of-subarrays/

//* tc : O(n * m) | sc : O(n)

var subarrayBitwiseORs = function(arr) {

    let previous = new Set();
    let currentValue = new Set();
    let result = new Set();

    for (let i = 0; i < arr.length; i++){
        for(let x of previous){
            let val = x | arr[i];

            currentValue.add(val);
            result.add(val);
        }

        currentValue.add(arr[i]);
        result.add(arr[i]);
        previous.clear();

        for(let val of currentValue){
            previous.add(val);
        }

        currentValue.clear();
    }

    return result.size;
    
};