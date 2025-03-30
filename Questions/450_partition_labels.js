//* https://leetcode.com/problems/partition-labels/

//* tc O(n) | sc O(1)

var partitionLabels = function(s) {

    let n = s.length;
    let map = {};
    // let arr = s.split("");
    let count = 0;
    let result = [];

    // for(let num of arr){
    //     map.set(num, count);
    //     count++;
    // }
    
    for(let i = 0; i < n; i++){
        map[s[i]] = i;
    }

    let start = 0;

    while(start < n){
        let end = map[s[start]];
        let isExpandPossible = start;

        while(isExpandPossible < end){
            end = Math.max(end, map[s[isExpandPossible]]);
            isExpandPossible++;
        }

        result.push(isExpandPossible - start + 1);
        start = isExpandPossible + 1;
    }
    
    return result;
};