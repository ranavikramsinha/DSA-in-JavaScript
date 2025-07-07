//* https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/

//* tc O(nlogn) | sc O(n)

var maxEvents = function(events) {

events.sort((a, b) => a[1] - b[1]);

    let maxDay = events.at(-1)[1];
    let nextDay = new Array(maxDay + 2).fill(0).map((_, i) => i);
    let count = 0;

    for (let event of events) {
        let start = event[0];
        let end = event[1];
        let day = search(start);

        if (day <= end) {
            count++;
            nextDay[day] = search(day + 1);
        }
    }

    return count;
    
    function search(day){
        if (nextDay[day] !== day){
            nextDay[day] = search(nextDay[day]);
        }

        return nextDay[day];
    };
    
};