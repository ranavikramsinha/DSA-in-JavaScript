//* https://leetcode.com/problems/non-overlapping-intervals/

var eraseOverlapIntervals = function(intervals) {

    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;
    const n = intervals.length;
    let i = 0;
    let j = 1;

    while(j < n){
        let currentInterval = intervals[i];
        let nextInterval = intervals[j];

        let currentStart = currentInterval[0];
        let currentEnd = currentInterval[1];

        let nextStart = nextInterval[0];
        let nextEnd = nextInterval[1];

        if(currentEnd <= nextStart){
            i = j;
            j++;
        }
        else if(currentEnd <= nextEnd){
            j++;
            count++;
        }
        else if(currentEnd > nextEnd){
            i = j;
            j++;
            count++;
        }
    }

    return count;
};