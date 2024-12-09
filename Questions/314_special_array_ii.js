//* https://leetcode.com/problems/special-array-ii/

//* tc O(n + q) | sc O(n + q)

var isArraySpecial = function(nums, queries) {
    let n = nums.length;
    let prefixSum = new Array(n).fill(0);

    for(let i = 1; i < n; i++){
        prefixSum[i] = prefixSum[i - 1];

        if(nums[i - 1] % 2 === nums[i] % 2){
            prefixSum[i]++;
        }
    }

    let queriesLength = queries.length;
    let result = new Array(queriesLength).fill(true);

    if(n === 1){
        return result;
    }

    for(let i = 0; i < queriesLength; i++){
        let u = queries[i][0];
        let v = queries[i][1];
        let count = prefixSum[v] - prefixSum[u];

        result[i] = (count >= 1) ? false : true;
    }

    return result;
};