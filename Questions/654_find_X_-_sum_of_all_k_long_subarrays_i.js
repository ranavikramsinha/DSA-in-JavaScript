//* 

//* tc : O(n * k * log(k)) | sc : O(n * k)

var findXSum = function(nums, k, x) {

    let n = nums.length - k + 1;
    let arr = new Array(n);

    for (let i = 0; i < n; i++) {
        let subArray = nums.slice(i, i + k);
        let frequency = new Map();

        for (let num of subArray) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }

        let top = [...frequency.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]).slice(0, x);

        let sum = 0;

        for (let [num, count] of top) {
            sum += num * count;
        }

        arr[i] = sum;
    }

    return arr;
    
};