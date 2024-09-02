//* https://leetcode.com/problems/insert-interval/

var insert = function(intervals, newInterval) {

    let n = intervals.length;
    let i = 0;
    let result = [];

    while(i < n){
        if(intervals[i][1] < newInterval[0]){
            result.push(intervals[i]);
        }
        else if(intervals[i][0] > newInterval[1]){
            break;
        }
        else{
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        }

        i++;
    }

    result.push(newInterval);

    while(i < n){
        result.push(intervals[i]);
        i++;
    }

    return result;
};