//* https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/

//* tc O(n) | sc O(n)

var findThePrefixCommonArray = function(A, B) {

    let n = A.length;
    let map = new Map();
    let arr = new Array(n).fill(0);
    
    let count = 0;

    for(let i = 0; i < n; i++){
        
        map.set(A[i], (map.get(A[i]) || 0) + 1);

        if(map.get(A[i]) === 2){
            count++;
        }

        map.set(B[i], (map.get(B[i]) || 0) + 1);

        if(map.get(B[i]) === 2){
            count++;
        }

        arr[i] = count;
    }

    return arr;
    
};