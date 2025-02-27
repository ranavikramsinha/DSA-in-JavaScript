//* https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/

//* tc O(n^2) | sc O(n^2)

var lenLongestFibSubseq = function(arr) {

    let n = arr.length;
    let map = new Map();
    let ans = 0;
    let memo = Array.from({ length: n}, () => new Array(n).fill(0));

    for(let i = 0; i < n; i++){
        map.set(arr[i], i);
    }

    for(let j = 1; j < n; j++){
        for(let k = j + 1; k < n; k++){
            let length = solve(j, k, arr, map);

            if(length >= 3){
                ans = Math.max(ans, length);
            }
        }
    }

    return ans;

    function solve(j, k, arr, map){
        if(memo[j][k] !== 0){
            return memo[j][k];
        }

        let x = arr[k] - arr[j];

        if(map.has(x) && map.get(x) < j){
            let i = map.get(x);

            return memo[j][k] = solve(i, j, arr, map) + 1;
        }
        else{
            return memo[j][k] = 2;
        }
    }
    
};