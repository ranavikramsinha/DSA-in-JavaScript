//* https://leetcode.com/problems/first-completely-painted-row-or-column/

//* tc O(m * n) | sc O(n) where n is the length of arr

var firstCompleteIndex = function(arr, mat) {

    let m = mat.length;
    let n = mat[0].length;
    let k = arr.length;

    let map = new Map();

    for(let i = 0; i < k; i++){
        map.set(arr[i], i);
    }

    let minIdx = Infinity;

    for(let row = 0; row < m; row++){
        let lastIdx = -Infinity;

        for(let col = 0; col < n; col++){
            let value = mat[row][col];
            let index = map.get(value);
            lastIdx = Math.max(lastIdx, index);
        }

        minIdx = Math.min(minIdx, lastIdx);
    }

    for(let col = 0; col < n; col++){
        let lastIdx = -Infinity;

        for(let row = 0; row < m; row++){
            let value = mat[row][col];
            let index = map.get(value);
            lastIdx = Math.max(lastIdx, index);
        }

        minIdx = Math.min(minIdx, lastIdx);
    }

    return minIdx;
    
};