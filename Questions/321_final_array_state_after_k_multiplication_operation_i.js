//* https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/

//* tc O(nlogn + k * nlogn) | sc O(n)

var getFinalState = function(nums, k, multiplier) {
    let n = nums.length;
    let arr = [];

    for(let i = 0; i < n; i++){
        arr.push([nums[i], i]);
    }

    let compare = (a, b) => {
        if(a[0] === b[0]){
            return a[1] - b[1];
        }

        return a[0] - b[0];
    }

    arr.sort(compare);
    
    while(k > 0){
        let smallest = arr.shift();

        nums[smallest[1]] *= multiplier;

        arr.push([nums[smallest[1]], smallest[1]]);
        arr.sort(compare);

        k--;
    }

    return nums;
};