//* https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/

//* tc O(n) | sc O(n)

var maxFreeTime = function(eventTime, k, startTime, endTime) {

    let n = startTime.length;
    let arr = [];
    arr.push(startTime[0]);

    for(let i = 1; i < n; i++){
        arr.push(startTime[i] - endTime[i - 1]);
    }

    arr.push(eventTime - endTime[endTime.length - 1]);

    let i = 0;
    let j = 0;
    let maximumSum = 0;
    let currentSum = 0;
    let m = arr.length;

    while(j < m){
        currentSum += arr[j];

        if(i < m && j - i + 1 > k + 1){
            currentSum -= arr[i];
            i++;
        }

        maximumSum = Math.max(maximumSum, currentSum);
        j++;
    }

    return maximumSum;
    
};