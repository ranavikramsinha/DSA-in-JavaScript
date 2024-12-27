//* https://leetcode.com/problems/best-sightseeing-pair/

//* tc O(n) | sc O(1)

var maxScoreSightseeingPair = function(values) {

    let n = values.length;
    let maximumPair = values[0];
    let ans = 0;

    for(let i = 1; i < n; i++){

        let a = values[i] - i;
        let b = maximumPair;

        ans = Math.max(ans, a + b);

        maximumPair = Math.max(maximumPair, values[i] + i);
    }

    return ans;
    
};

//* tc O(n) | sc O(n)

var maxScoreSightseeingPair = function(values) {

    let n = values.length;
    let arr = new Array(n).fill(0);
    let ans = 0;

    arr[0] = values[0];

    for(let j = 1; j < n; j++){
        let a = values[j] - j;
        let b = arr[j - 1];

        ans = Math.max(ans, a + b);

        arr[j] = Math.max(values[j] + j, arr[j -1]);
    }

    return ans;
    
};