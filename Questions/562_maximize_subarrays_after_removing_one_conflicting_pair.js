//* https://leetcode.com/problems/maximize-subarrays-after-removing-one-conflicting-pair/

//* tc : O(n * m) | sc : O(n)

var maxSubarrays = function(n, conflictingPairs) {

    let right = new Array(n + 1).fill(null).map(() => []);

    for(let [a,b] of conflictingPairs ){
        right[Math.max(a,b)].push(Math.min(a,b))
    }

    let ans = 0;
    let left = [0, 0]
    let bonus = new Array(n + 1).fill(0)

    for(let r = 1; r <= n; r++){
        for(let l of right[r]){
            if(l > left[0]){
                left = [l, left[0]]
            }
            else if(l > left[1]){
                left = [left[0], l]
            }
        }

        ans += r - left[0];

        if(left[0] > 0){
            bonus[left[0]] += left[0] - left[1]
        }
    }

    return ans + Math.max(...bonus);
    
};