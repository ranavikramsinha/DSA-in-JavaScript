//* https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-ii/

//* tc O(n) | sc O(n)

var maxFreeTime = function(eventTime, startTime, endTime) {

    let n = startTime.length;
    let arr = [];
    
    arr.push(startTime[0]);

    for(let i = 1; i < n; i++){
        arr.push(startTime[i] - endTime[i - 1]);
    }
    
    arr.push(eventTime - endTime[endTime.length - 1]);

    let m = arr.length;
    let maximumRight = new Array(m).fill(0);
    let maximumLeft = new Array(m).fill(0);

    for(let i = m - 2; i >= 0; i--){
        maximumRight[i] = Math.max(maximumRight[i + 1], arr[i + 1]);
    }

    for(let i = 1; i < m; i++){
        maximumLeft[i] = Math.max(maximumLeft[i - 1], arr[i - 1]);
    }

    let result = 0;

    for(let i = 1; i <= n; i++){
        let currentEventTime = endTime[i - 1] - startTime[i - 1];

        if(currentEventTime <= Math.max(maximumLeft[i - 1], maximumRight[i])){
            result = Math.max(result, arr[i - 1] + currentEventTime + arr[i]);
        }

        result = Math.max(result, arr[i - 1] + arr[i]);
    }

    return result;

};