//* https://leetcode.com/problems/xor-queries-of-a-subarray/

var xorQueries = function(arr, queries) {

    let n = arr.length;

    let cumulativeXor = new Array(n).fill(0);

    cumulativeXor[0] = arr[0];

    for(let i = 0; i < n; i++){
        cumulativeXor[i] = cumulativeXor[i - 1] ^ arr[i];
    }

    let result = [];

    for(let query of queries){
        let left = query[0];
        let right = query[1];

        let value = cumulativeXor[right] ^ (left === 0 ? 0 : cumulativeXor[left - 1]);

        result.push(value);
    }

    return result;
    
};