//* https://leetcode.com/problems/count-number-of-bad-pairs/

//* tc O(n) | sc O(n)

var countBadPairs = function(nums) {

    let n = nums.length;
    let count = 0;
    let map = new Map();
    map.set(nums[0], 1);

    for(let j = 1; j < n; j++){
        let occurrenceOfJ = map.get(nums[j] - j) || 0;

        let elementsBeforeJ = j;

        let badPairs = elementsBeforeJ - occurrenceOfJ;

        count += badPairs;

        map.set(nums[j] - j, (map.get(nums[j] - j) || 0) + 1);
    }

    return count;
    
};

//* tc O(n) | sc O(n)

var countBadPairs = function(nums) {

    let n = nums.length;
    let count = 0;

    let map = new Map();

    for(let j = 0; j < n; j++){
        let num = nums[j] - j;

        let occurrenceOfNum = map.get(num) || 0;

        let elementsOfJ = j;

        let badPairs = elementsOfJ - occurrenceOfNum;

        count += badPairs;

        map.set(num, (map.get(num) || 0) + 1);
    }

    return count;
    
};