//* https://leetcode.com/problems/find-unique-binary-string/

//* tc O(n) | sc O(1)

var findDifferentBinaryString = function(nums) {

    let n = nums.length;

    let ans = '';

    for(let i = 0; i < n; i++){
        let char = nums[i][i];

        ans += char === '0' ? '1' : '0';
    }

    return ans;
    
};