//* https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/

//* tc O(n) | sc O(1)

let n = nums.length;
let count = 0;

for(let i = 0; i < n - 2; i++){
    if(nums[i] === 0){
        count++;
        nums[i] = 1;
        nums[i + 1] = nums[i + 1] === 0 ? 1 : 0;
        nums[i + 2] = nums[i + 2] === 0 ? 1 : 0;
    }
}

let sum = nums.reduce((a, b) => a + b, 0);

return sum === n ? count : -1;