//* https://leetcode.com/problems/zero-array-transformation-ii/

//* tc O(m + n) | sc O(n)

var minZeroArray = function(nums, queries) {

    if(nums.reduce((a, b) => a + b, 0) === 0){
        return 0;
    }

    let m = nums.length;
    let n = queries.length;
    let result = 0;
    let arr = new Array(m).fill(0);
    let cumulatingSumOfArr = 0;

    for(let i = 0; i < m; i++){
        let number = nums[i];

        while(cumulatingSumOfArr + arr[i] < number){
            if(result === n){
                return -1;
            }

            let [a, b, c] = queries[result];
            result++;

            if(b + 1 < i){
                continue;
            }

            let max = Math.max(a, i);

            arr[max] += c;
            arr[b + 1] -= c;
        }

        cumulatingSumOfArr += arr[i];
    }

    return result;
    
};

//* tc O(logn * (m + n)) | sc O(n) 

var minZeroArray = function(nums, queries) {

    if(nums.reduce((a, b) => a + b, 0) === 0){
        return 0;
    }

    let m = nums.length;
    let n = queries.length;
    let left = 0;
    let right = n - 1;
    let result = -1;

    while(left <= right){
        let middle = left + Math.trunc((right - left) / 2);

        if(solve(nums, queries, middle) === true){
            result = middle + 1;
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }

    return result;

    function solve(nums, queries, middle){
        arr = new Array(nums.length + 1).fill(0);

        for(let i = 0; i <= middle; i++){
            let a = queries[i][0];
            let b = queries[i][1];
            let c = queries[i][2];

            arr[a] += c;

            if(b + 1 < nums.length){
                arr[b + 1] -= c;
            }
        }

        let cumulativeSum = 0;

        for(let i = 0; i < nums.length; i++){
            cumulativeSum += arr[i];

            arr[i] = cumulativeSum;

            if(nums[i] > arr[i]){
                return false;
            }
        }

        return true;
    }
    
};