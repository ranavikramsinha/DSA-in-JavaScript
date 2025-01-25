//* https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/

//* tc O(nlogn) | sc O(n)

var lexicographicallySmallestArray = function(nums, limit) {

    let n = nums.length;

    let arr = [...nums];
    arr.sort((a, b) => a - b);

    let grouping = 0;
    let map1 = new Map();
    map1.set(arr[0], grouping);

    let map2 = new Map();
    map2.set(grouping, [arr[0]]);

    let arr2 = new Array(n);

    for(let i = 1; i < n; i++){
        if(Math.abs(arr[i] - arr[i - 1]) > limit){
            grouping += 1;
        }

        map1.set(arr[i], grouping);

        if(!map2.has(grouping)){
            map2.set(grouping, []);
        }

        map2.get(grouping).push(arr[i]);
    }
    
    for(let i = 0; i < n; i++){
        let num = nums[i];
        let groups = map1.get(num);

        arr2[i] = map2.get(groups).shift();
    }

    return arr2;

};