//* https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/

//* tc O(nlogn) | sc O(n)

var findScore = function(nums) {

    let n = nums.length;
    let score = 0;
    let valueWithIndex = Array.from({ length: n}, (_, i) => i);

    valueWithIndex.sort((a, b) => nums[a] - nums[b]);

    for(let i = 0; i < n; i++){
        let idx = valueWithIndex[i];

        if(nums[idx] !== -1){
            score += nums[idx];
            nums[idx] = -1;

            if(idx - 1 >= 0 && nums[idx - 1] !== -1){
                nums[idx - 1] = -1;
            }

            if(idx + 1 < n && nums[idx + 1] !== -1){
                nums[idx + 1] = -1;
            }
        }
    }

    return score;
    
};