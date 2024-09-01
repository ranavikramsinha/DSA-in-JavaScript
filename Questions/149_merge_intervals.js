//* https://leetcode.com/problems/merge-intervals/

var merge = function(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);

    let n = intervals.length;
    let arr = [];

    for(let i = 0; i < n; i++){
        if(arr.length === 0 || arr[arr.length - 1][1] < intervals[i][0]){
            arr.push(intervals[i]);
        }
        else{
            arr[arr.length - 1][1] = Math.max(arr[arr.length - 1][1], intervals[i][1]);
        }
    }

    return arr;
    
};