//* https://leetcode.com/problems/count-days-without-meetings/

//* tc O(nlogn) | sc O(1)

var countDays = function(days, meetings) {

    let n = meetings.length;
    let start = 0;
    let end = 0;
    let count = 0;

    meetings.sort((a, b) => (a[0] - b[0]));

    for(let meet of meetings){
        if(meet[0] > end){
            count += meet[0] - end - 1;
        }

        end = Math.max(end, meet[1]);
    }

    if(end < days){
        count += days - end;
    }

    return count;
    
};