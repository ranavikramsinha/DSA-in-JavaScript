//* https://leetcode.com/problems/jump-game-iii/

//* tc O(n) | sc O(n)

var canReach = function(arr, start) {

    let n = arr.length;
    let set = new Set();

    return solve(start, set);

    function solve(i){
        if( i < 0 || i >= n){
            return false;
        }

        if(set.has(i)){
            return false;
        }

        if(arr[i] === 0){
            return true;
        }

        set.add(i);

        let left = solve(i - arr[i]);
        let right = solve(i + arr[i]);

        return left || right;
    }
    
};